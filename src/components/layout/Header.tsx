"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { HEADER_CTA, NAV_LINKS } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-[70px] w-full border-b border-soft-border bg-white/90 backdrop-blur-md shadow-[0_8px_24px_rgba(16,52,106,0.06)] lg:h-20">
      <div className="container-page flex h-full items-center justify-between gap-4">
        <Logo width={170} priority className="h-9 w-auto lg:h-10" />

        {/* Desktop navigation */}
        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-[15px] font-medium text-navy/80 transition-colors hover:text-brand-pink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={HEADER_CTA.href} size="md" className="hidden md:inline-flex">
            {HEADER_CTA.label}
            <ArrowRight className="h-4 w-4" />
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-soft-border text-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/40 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
        >
          <button
            type="button"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-[70px] z-40 bg-navy/30 backdrop-blur-sm"
          />
          <nav
            aria-label="Mobil menü bağlantıları"
            className="absolute inset-x-0 top-[70px] z-50 mx-3 mt-2 rounded-2xl border border-soft-border bg-white p-4 shadow-soft-lg"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] items-center rounded-xl px-3 font-display text-base font-medium text-navy transition-colors hover:bg-soft-blue hover:text-brand-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              href={HEADER_CTA.href}
              size="lg"
              onClick={() => setOpen(false)}
              className="mt-3 w-full"
            >
              {HEADER_CTA.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
