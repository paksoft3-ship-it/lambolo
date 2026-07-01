import { saveLead } from "@/lib/leads-store";
import { partnershipSchema, type PartnershipPayload } from "@/lib/validation";

export type PartnershipServiceResult =
  | { ok: true; mode: "supabase" | "mock" }
  | { ok: false; code: "duplicate" | "config" | "error"; message: string };

export async function submitPartnership(
  payload: PartnershipPayload,
): Promise<PartnershipServiceResult> {
  const record = {
    name: payload.name,
    company: payload.company ?? null,
    phone: payload.phone ?? null,
    email: payload.email.toLowerCase(),
    type: payload.type,
    message: payload.message,
    created_at: new Date().toISOString(),
  };

  try {
    const res = await saveLead("partnership", record);
    return { ok: true, mode: res.mode };
  } catch (err) {
    const name = err instanceof Error ? err.name : "";
    if (name === "DuplicateLeadError") {
      // Allow repeat partnership enquiries — treat as success.
      return { ok: true, mode: "mock" };
    }
    if (name === "LeadConfigError") {
      return {
        ok: false,
        code: "config",
        message:
          "Başvuru sistemi şu an yapılandırılmadı. Lütfen info@lambolo.com üzerinden ulaş.",
      };
    }
    // eslint-disable-next-line no-console
    console.error("[lambolo:partnership] unexpected error", err);
    return {
      ok: false,
      code: "error",
      message: "Beklenmeyen bir hata oluştu. Lütfen tekrar dene.",
    };
  }
}

export { partnershipSchema };
