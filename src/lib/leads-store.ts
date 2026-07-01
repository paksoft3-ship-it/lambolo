/**
 * Provider-independent persistence layer for leads (waitlist + partnership).
 *
 * Backend selection (first available wins):
 *  1. Neon / any Postgres — if DATABASE_URL is set (recommended, used on Vercel).
 *  2. Supabase REST — if the Supabase env vars are set.
 *  3. Dev in-memory mock — clearly marked, so forms work without a database.
 *  4. Production with none of the above → a typed config error (never a silent
 *     data loss).
 *
 * All secrets here are server-only and never exposed to the browser.
 */

import { neon } from "@neondatabase/serverless";

export type LeadKind = "waitlist" | "partnership";

export type LeadRecord = Record<string, unknown> & {
  email: string;
};

/** A stored lead as returned to the admin panel — always has an id. */
export type LeadRow = LeadRecord & {
  id: string;
  created_at?: string;
};

export type StorageMode = "neon" | "supabase" | "mock" | "unconfigured";

export class LeadConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LeadConfigError";
  }
}

export class DuplicateLeadError extends Error {
  constructor(message = "Bu e-posta zaten kayıtlı.") {
    super(message);
    this.name = "DuplicateLeadError";
  }
}

export type StoreResult = {
  ok: true;
  mode: StorageMode;
};

const DATABASE_URL =
  process.env.DATABASE_URL || process.env.POSTGRES_URL || "";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const isProd = process.env.NODE_ENV === "production";

const hasNeon = Boolean(DATABASE_URL);
const hasSupabase = Boolean(SUPABASE_URL && SUPABASE_KEY);

/** Table names can be overridden via env; sensible defaults otherwise. */
const TABLES: Record<LeadKind, string> = {
  waitlist:
    process.env.LEADS_WAITLIST_TABLE ??
    process.env.SUPABASE_WAITLIST_TABLE ??
    "waitlist_leads",
  partnership:
    process.env.LEADS_PARTNERSHIP_TABLE ??
    process.env.SUPABASE_PARTNERSHIP_TABLE ??
    "partnership_leads",
};

/**
 * Table names are interpolated into SQL, so they must be plain identifiers.
 * They come from env/defaults (operator-controlled), but we validate anyway.
 */
function safeTable(kind: LeadKind): string {
  const table = TABLES[kind];
  if (!/^[a-z_][a-z0-9_]*$/i.test(table)) {
    throw new Error(`Invalid table name for ${kind}: ${table}`);
  }
  return table;
}

// Lazily created so the driver is only touched when actually used.
let sqlClient: ReturnType<typeof neon> | null = null;
function getSql() {
  if (!sqlClient) sqlClient = neon(DATABASE_URL);
  return sqlClient;
}

function isUniqueViolation(err: unknown): boolean {
  const code = (err as { code?: string })?.code;
  const msg = err instanceof Error ? err.message : String(err);
  return code === "23505" || msg.includes("23505") || /duplicate key/i.test(msg);
}

// Dev-only in-memory mock. Module scope persists across requests in dev.
const mockStore: Record<LeadKind, Map<string, LeadRow>> = {
  waitlist: new Map(),
  partnership: new Map(),
};

async function insertNeon(
  kind: LeadKind,
  record: LeadRecord,
): Promise<StoreResult> {
  const table = safeTable(kind);
  const keys = Object.keys(record).filter((k) => k !== "id");
  const cols = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const values = keys.map((k) => record[k] as unknown);
  try {
    await getSql().query(
      `INSERT INTO ${table} (${cols}) VALUES (${placeholders})`,
      values,
    );
  } catch (err) {
    if (isUniqueViolation(err)) throw new DuplicateLeadError();
    throw err;
  }
  return { ok: true, mode: "neon" };
}

async function insertSupabase(
  kind: LeadKind,
  record: LeadRecord,
): Promise<StoreResult> {
  const table = TABLES[kind];
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY as string,
      Authorization: `Bearer ${SUPABASE_KEY as string}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(record),
  });

  if (res.status === 409) {
    throw new DuplicateLeadError();
  }
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    // Unique-violation surfaced as 400/23505 depending on config.
    if (detail.includes("23505") || detail.toLowerCase().includes("duplicate")) {
      throw new DuplicateLeadError();
    }
    throw new Error(`Supabase insert failed (${res.status}): ${detail}`);
  }
  return { ok: true, mode: "supabase" };
}

function insertMock(kind: LeadKind, record: LeadRecord): StoreResult {
  const store = mockStore[kind];
  const key = record.email.toLowerCase();
  if (store.has(key)) {
    throw new DuplicateLeadError();
  }
  const row: LeadRow = {
    ...record,
    id: (record.id as string) ?? crypto.randomUUID(),
    created_at: (record.created_at as string) ?? new Date().toISOString(),
  };
  store.set(key, row);
  // Visible in server logs so submissions are never "silently" lost in dev.
  // eslint-disable-next-line no-console
  console.info(
    `[lambolo:mock] stored ${kind} lead for ${record.email} (total ${store.size}). ` +
      `Configure Supabase env vars to persist for real.`,
  );
  return { ok: true, mode: "mock" };
}

export async function saveLead(
  kind: LeadKind,
  record: LeadRecord,
): Promise<StoreResult> {
  if (hasNeon) {
    return insertNeon(kind, record);
  }
  if (hasSupabase) {
    return insertSupabase(kind, record);
  }
  if (isProd) {
    throw new LeadConfigError(
      "Lead storage is not configured. Set DATABASE_URL (Neon/Postgres) to " +
        "persist leads in production.",
    );
  }
  return insertMock(kind, record);
}

export function storageMode(): StorageMode {
  if (hasNeon) return "neon";
  if (hasSupabase) return "supabase";
  return isProd ? "unconfigured" : "mock";
}

// --- Read / delete (admin panel) ------------------------------------------

async function listNeon(kind: LeadKind): Promise<LeadRow[]> {
  const table = safeTable(kind);
  const rows = await getSql().query(
    `SELECT * FROM ${table} ORDER BY created_at DESC`,
  );
  return rows as LeadRow[];
}

async function listSupabase(kind: LeadKind): Promise<LeadRow[]> {
  const table = TABLES[kind];
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/${table}?select=*&order=created_at.desc`,
    {
      headers: {
        apikey: SUPABASE_KEY as string,
        Authorization: `Bearer ${SUPABASE_KEY as string}`,
      },
      cache: "no-store",
    },
  );
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Supabase list failed (${res.status}): ${detail}`);
  }
  return (await res.json()) as LeadRow[];
}

function listMock(kind: LeadKind): LeadRow[] {
  return Array.from(mockStore[kind].values()).sort((a, b) =>
    String(b.created_at ?? "").localeCompare(String(a.created_at ?? "")),
  );
}

/** Return all leads of a kind, newest first. */
export async function listLeads(kind: LeadKind): Promise<LeadRow[]> {
  if (hasNeon) return listNeon(kind);
  if (hasSupabase) return listSupabase(kind);
  if (isProd) {
    throw new LeadConfigError(
      "Lead storage is not configured. Set DATABASE_URL to read leads.",
    );
  }
  return listMock(kind);
}

async function deleteNeon(kind: LeadKind, id: string): Promise<void> {
  const table = safeTable(kind);
  await getSql().query(`DELETE FROM ${table} WHERE id = $1`, [id]);
}

async function deleteSupabase(kind: LeadKind, id: string): Promise<void> {
  const table = TABLES[kind];
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`,
    {
      method: "DELETE",
      headers: {
        apikey: SUPABASE_KEY as string,
        Authorization: `Bearer ${SUPABASE_KEY as string}`,
        Prefer: "return=minimal",
      },
    },
  );
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Supabase delete failed (${res.status}): ${detail}`);
  }
}

function deleteMock(kind: LeadKind, id: string): void {
  const store = mockStore[kind];
  for (const [key, row] of store) {
    if (row.id === id) {
      store.delete(key);
      return;
    }
  }
}

/** Delete a single lead by id. */
export async function deleteLead(kind: LeadKind, id: string): Promise<void> {
  if (hasNeon) return deleteNeon(kind, id);
  if (hasSupabase) return deleteSupabase(kind, id);
  if (isProd) {
    throw new LeadConfigError("Lead storage is not configured.");
  }
  deleteMock(kind, id);
}
