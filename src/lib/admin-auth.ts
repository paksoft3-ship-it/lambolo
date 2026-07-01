/**
 * Minimal, dependency-free admin session auth.
 *
 * A session is a signed token: base64url(payload).base64url(HMAC-SHA256).
 * Signing uses Web Crypto (globalThis.crypto.subtle) so the exact same code
 * runs in the Edge middleware and in Node route handlers.
 *
 * Access is gated by a single shared password (ADMIN_PASSWORD). This is a
 * pragmatic choice for a small marketing site with one operator; swap for a
 * real user table if multi-user access is ever needed.
 */

export const ADMIN_COOKIE = "lambolo_admin";
export const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

const PASSWORD = process.env.ADMIN_PASSWORD ?? "";
// Prefer a dedicated secret; fall back to the password so signing still works.
const SECRET = process.env.ADMIN_SESSION_SECRET || PASSWORD;

/** Whether an admin password has been configured at all. */
export function adminConfigured(): boolean {
  return PASSWORD.length > 0;
}

/** Constant-time string compare to avoid trivial timing leaks on the password. */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function passwordMatches(input: string): boolean {
  return adminConfigured() && safeEqual(input, PASSWORD);
}

// --- encoding helpers (edge-safe, no Buffer) ------------------------------

function toBase64Url(bytes: Uint8Array): string {
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(input: string): Uint8Array {
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = b64.length % 4 ? "=".repeat(4 - (b64.length % 4)) : "";
  const str = atob(b64 + pad);
  const bytes = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i);
  return bytes;
}

async function sign(data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return toBase64Url(new Uint8Array(sig));
}

/** Create a signed session token valid for `ttlMs`. */
export async function createSession(ttlMs: number = SESSION_TTL_MS): Promise<string> {
  const payload = toBase64Url(
    new TextEncoder().encode(JSON.stringify({ exp: Date.now() + ttlMs })),
  );
  const sig = await sign(payload);
  return `${payload}.${sig}`;
}

/** Verify a session token's signature and expiry. */
export async function verifySession(token: string | undefined): Promise<boolean> {
  if (!token || !SECRET) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = await sign(payload);
  if (!safeEqual(sig, expected)) return false;
  try {
    const { exp } = JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));
    return typeof exp === "number" && exp > Date.now();
  } catch {
    return false;
  }
}
