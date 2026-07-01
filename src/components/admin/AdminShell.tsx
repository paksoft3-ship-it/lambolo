"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, Handshake, LogOut, Menu, X } from "lucide-react";

const NAV = [
  { href: "/admin", label: "Genel Bakış", Icon: LayoutDashboard },
  { href: "/admin/waitlist", label: "Bekleme Listesi", Icon: Users },
  { href: "/admin/partnership", label: "İş Birliği Başvuruları", Icon: Handshake },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  const nav = (
    <nav className="flex flex-col gap-1">
      {NAV.map(({ href, label, Icon }) => {
        const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
              active
                ? "bg-brand-blue text-white"
                : "text-navy/70 hover:bg-brand-blue/10 hover:text-navy"
            }`}
          >
            <Icon className="h-[18px] w-[18px]" />
            {label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-soft-blue">
      {/* Mobile top bar */}
      <header className="flex items-center justify-between border-b border-soft-border bg-white px-4 py-3 lg:hidden">
        <span className="font-display font-bold text-navy">Lambolo Yönetim</span>
        <button
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-navy hover:bg-soft-blue"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      <div className="mx-auto flex max-w-container gap-6 px-4 py-6 lg:px-6">
        {/* Sidebar */}
        <aside
          className={`${
            open ? "block" : "hidden"
          } lg:block lg:w-64 lg:shrink-0`}
        >
          <div className="rounded-card bg-white p-4 shadow-soft lg:sticky lg:top-6">
            <span className="mb-4 hidden px-3 font-display text-lg font-bold text-navy lg:block">
              Lambolo Yönetim
            </span>
            {nav}
            <button
              onClick={logout}
              className="mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-pink transition-colors hover:bg-brand-pink/10"
            >
              <LogOut className="h-[18px] w-[18px]" />
              Çıkış Yap
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
