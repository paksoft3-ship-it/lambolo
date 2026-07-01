import { NextResponse } from "next/server";
import { submitPartnership } from "@/lib/partnership-service";
import { partnershipSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Geçersiz istek." },
      { status: 400 },
    );
  }

  const parsed = partnershipSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Lütfen formdaki bilgileri kontrol et.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const result = await submitPartnership(parsed.data);

  if (!result.ok) {
    const status = result.code === "config" ? 503 : 500;
    return NextResponse.json({ ok: false, message: result.message }, { status });
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Teşekkürler! Başvurun bize ulaştı, en kısa sürede döneceğiz.",
    },
    { status: 201 },
  );
}
