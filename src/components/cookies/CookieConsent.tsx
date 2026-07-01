"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import {
  ACCEPT_ALL,
  OPEN_SETTINGS_EVENT,
  REJECT_ALL,
  readConsent,
  writeConsent,
  type ConsentCategories,
} from "@/lib/cookie-consent";

type View = "hidden" | "banner" | "settings";

export function CookieConsent() {
  const [view, setView] = useState<View>("hidden");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setAnalytics(existing.categories.analytics);
      setMarketing(existing.categories.marketing);
    } else {
      setView("banner");
    }
    const open = () => {
      const cur = readConsent();
      setAnalytics(cur?.categories.analytics ?? false);
      setMarketing(cur?.categories.marketing ?? false);
      setView("settings");
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  function save(categories: ConsentCategories) {
    writeConsent(categories);
    setView("hidden");
  }

  if (view === "hidden") return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6"
      role="dialog"
      aria-live="polite"
      aria-label="Çerez tercihleri"
    >
      <div className="mx-auto max-w-3xl rounded-card border border-soft-border bg-white p-5 shadow-soft-lg sm:p-6">
        <div className="flex items-start gap-3">
          <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-orange sm:flex">
            <Cookie className="h-5 w-5" />
          </span>

          <div className="min-w-0 flex-1">
            {view === "banner" ? (
              <>
                <h2 className="font-display text-base font-bold text-navy">
                  Çerezleri kullanıyoruz 🍪
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  Sitemizin düzgün çalışması için zorunlu çerezleri kullanıyoruz.
                  İzin verirsen, deneyimini geliştirmek için analitik ve pazarlama
                  çerezlerini de kullanmak isteriz. Ayrıntılar için{" "}
                  <Link
                    href="/cerez-politikasi"
                    className="font-semibold text-brand-blue underline"
                  >
                    Çerez Politikası
                  </Link>
                  .
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <button
                    onClick={() => save(ACCEPT_ALL)}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-brand-pink px-5 text-sm font-bold text-white shadow-pink transition-colors hover:bg-brand-pink-dark"
                  >
                    Tümünü Kabul Et
                  </button>
                  <button
                    onClick={() => save(REJECT_ALL)}
                    className="inline-flex h-11 items-center justify-center rounded-full border-[1.5px] border-navy/20 bg-white px-5 text-sm font-bold text-navy transition-colors hover:border-navy/40"
                  >
                    Reddet
                  </button>
                  <button
                    onClick={() => setView("settings")}
                    className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue/10"
                  >
                    Ayarlar
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-base font-bold text-navy">
                    Çerez Tercihleri
                  </h2>
                  <button
                    aria-label="Kapat"
                    onClick={() => setView(readConsent() ? "hidden" : "banner")}
                    className="rounded-lg p-1 text-muted hover:bg-soft-blue"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 space-y-3">
                  <ToggleRow
                    title="Zorunlu Çerezler"
                    desc="Sitenin çalışması için gereklidir, kapatılamaz."
                    checked
                    disabled
                  />
                  <ToggleRow
                    title="Analitik Çerezler"
                    desc="Sitenin nasıl kullanıldığını anlamamıza yardımcı olur."
                    checked={analytics}
                    onChange={setAnalytics}
                  />
                  <ToggleRow
                    title="Pazarlama Çerezler"
                    desc="İlgini çekebilecek içerik ve reklamlar için kullanılır."
                    checked={marketing}
                    onChange={setMarketing}
                  />
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <button
                    onClick={() =>
                      save({ necessary: true, analytics, marketing })
                    }
                    className="inline-flex h-11 items-center justify-center rounded-full bg-brand-blue px-5 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark"
                  >
                    Seçimi Kaydet
                  </button>
                  <button
                    onClick={() => save(ACCEPT_ALL)}
                    className="inline-flex h-11 items-center justify-center rounded-full border-[1.5px] border-navy/20 bg-white px-5 text-sm font-bold text-navy transition-colors hover:border-navy/40"
                  >
                    Tümünü Kabul Et
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label
      className={`flex items-start justify-between gap-4 rounded-xl border border-soft-border p-3 ${
        disabled ? "opacity-70" : "cursor-pointer"
      }`}
    >
      <span>
        <span className="block text-sm font-semibold text-navy">{title}</span>
        <span className="block text-xs text-muted">{desc}</span>
      </span>
      <span className="relative mt-0.5 inline-flex shrink-0">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="h-6 w-11 rounded-full bg-soft-border transition-colors peer-checked:bg-brand-green" />
        <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
      </span>
    </label>
  );
}
