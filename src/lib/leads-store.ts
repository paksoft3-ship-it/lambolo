/**
 * Provider-independent persistence layer for leads (waitlist + partnership).
 *
 * Behaviour:
 *  - If Supabase env vars are present, leads are written to Supabase via the
 *    REST API using the service-role key (server-only — never exposed to the
 *    browser).
 *  - Otherwise, in development we fall back to a clearly-marked in-memory mock
 *    store so the form is fully testable without a database.
 *  - In production with no database configured we throw a typed configuration
 *    error so a real submission is never silently lost.
 */

export type LeadKind = "waitlist" | "partnership";

export type LeadRecord = Record<string, unknown> & {
  email: string;
};

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
  mode: "supabase" | "mock";
};

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const isProd = process.env.NODE_ENV === "production";

const hasSupabase = Boolean(SUPABASE_URL && SUPABASE_KEY);

/** Table names can be overridden via env; sensible defaults otherwise. */
const TABLES: Record<LeadKind, string> = {
  waitlist: process.env.SUPABASE_WAITLIST_TABLE ?? "waitlist_leads",
  partnership: process.env.SUPABASE_PARTNERSHIP_TABLE ?? "partnership_leads",
};

// Dev-only in-memory mock. Module scope persists across requests in dev.
const mockStore: Record<LeadKind, Map<string, LeadRecord>> = {
  waitlist: new Map(),
  partnership: new Map(),
};

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
  store.set(key, record);
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
  if (hasSupabase) {
    return insertSupabase(kind, record);
  }
  if (isProd) {
    throw new LeadConfigError(
      "Waitlist storage is not configured. Set NEXT_PUBLIC_SUPABASE_URL and " +
        "SUPABASE_SERVICE_ROLE_KEY to persist leads in production.",
    );
  }
  return insertMock(kind, record);
}

export function storageMode(): "supabase" | "mock" | "unconfigured" {
  if (hasSupabase) return "supabase";
  return isProd ? "unconfigured" : "mock";
}
