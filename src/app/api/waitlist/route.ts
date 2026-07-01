import { NextResponse } from "next/server";
import { submitWaitlist } from "@/lib/waitlist-service";
import { waitlistSchema } from "@/lib/validation";

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

  const parsed = waitlistSchema.safeParse(body);
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

  const result = await submitWaitlist(parsed.data);

  if (!result.ok) {
    const status = result.code === "config" ? 503 : result.code === "duplicate" ? 200 : 500;
    return NextResponse.json(
      { ok: result.code === "duplicate", message: result.message },
      { status },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Harika! Lambolo'nun ilk haberlerini sana göndereceğiz.",
    },
    { status: 201 },
  );
}
