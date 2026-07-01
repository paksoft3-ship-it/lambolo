import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, verifySession } from "@/lib/admin-auth";

/**
 * Guard the admin panel and its APIs. Login endpoints stay public so an
 * unauthenticated user can actually sign in.
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isPublic =
    pathname === "/admin/login" || pathname === "/api/admin/login";
  if (isPublic) return NextResponse.next();

  const token = req.cookies.get(ADMIN_COOKIE)?.value;
  const authed = await verifySession(token);
  if (authed) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      { ok: false, message: "Yetkisiz erişim." },
      { status: 401 },
    );
  }

  const url = req.nextUrl.clone();
  url.pathname = "/admin/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
