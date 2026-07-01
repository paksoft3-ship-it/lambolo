"use client";

import { OPEN_SETTINGS_EVENT } from "@/lib/cookie-consent";

/** Inline text button that opens the cookie preferences panel. */
export function CookieSettingsLink({
  className = "",
  children = "Çerez Tercihleri",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className={className || "font-semibold text-brand-blue underline"}
    >
      {children}
    </button>
  );
}
