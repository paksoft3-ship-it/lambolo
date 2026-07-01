import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  SESSION_TTL_MS,
  adminConfigured,
  createSession,
  passwordMatches,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!adminConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Yönetim paneli yapılandırılmadı. Sunucuda ADMIN_PASSWORD tanımlayın.",
      },
      { status: 503 },
    );
  }

  let body: { password?: string };
  try {
    body = (await request.json()) as { password?: string };
  } catch {
    return NextResponse.json({ ok: false, message: "Geçersiz istek." }, { status: 400 });
  }

  if (!body.password || !passwordMatches(body.password)) {
    return NextResponse.json({ ok: false, message: "Hatalı şifre." }, { status: 401 });
  }

  const token = await createSession();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  });
  return res;
}
