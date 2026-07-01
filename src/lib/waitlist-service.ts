import { saveLead } from "@/lib/leads-store";
import { waitlistSchema, type WaitlistPayload } from "@/lib/validation";

export type WaitlistServiceResult =
  | { ok: true; mode: "supabase" | "mock" }
  | { ok: false; code: "duplicate" | "config" | "error"; message: string };

/**
 * Service abstraction over the persistence layer. Keeps the API route thin and
 * makes the storage backend swappable without touching route handlers.
 */
export async function submitWaitlist(
  payload: WaitlistPayload,
): Promise<WaitlistServiceResult> {
  const record = {
    name: payload.name,
    email: payload.email.toLowerCase(),
    phone: payload.phone ?? null,
    age_range: payload.ageRange ?? null,
    consent: payload.consent ?? false,
    source: payload.source,
    created_at: new Date().toISOString(),
  };

  try {
    const res = await saveLead("waitlist", record);
    return { ok: true, mode: res.mode };
  } catch (err) {
    return mapError(err);
  }
}

export { waitlistSchema };

function mapError(err: unknown): WaitlistServiceResult {
  const name = err instanceof Error ? err.name : "";
  if (name === "DuplicateLeadError") {
    return {
      ok: false,
      code: "duplicate",
      message: "Bu e-posta zaten listemizde. Teşekkürler!",
    };
  }
  if (name === "LeadConfigError") {
    return {
      ok: false,
      code: "config",
      message:
        "Kayıt sistemi şu an yapılandırılmadı. Lütfen daha sonra tekrar dene.",
    };
  }
  // eslint-disable-next-line no-console
  console.error("[lambolo:waitlist] unexpected error", err);
  return {
    ok: false,
    code: "error",
    message: "Beklenmeyen bir hata oluştu. Lütfen tekrar dene.",
  };
}
