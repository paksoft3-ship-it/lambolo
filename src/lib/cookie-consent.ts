/**
 * Cookie-consent shared types + helpers (KVKK / GDPR style).
 * Framework-agnostic; the UI lives in components/cookies/CookieConsent.tsx.
 */

export const CONSENT_COOKIE = "lambolo_cookie_consent";
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 180; // 180 days
export const CONSENT_VERSION = 1;

/** Fired on window to (re)open the preferences panel from anywhere. */
export const OPEN_SETTINGS_EVENT = "lambolo:cookie-settings";
/** Fired on window whenever consent changes, so analytics can react. */
export const CONSENT_UPDATED_EVENT = "lambolo:consent-updated";

export type ConsentCategories = {
  necessary: true; // always on
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  v: number;
  categories: ConsentCategories;
  ts: string;
};

export const ACCEPT_ALL: ConsentCategories = {
  necessary: true,
  analytics: true,
  marketing: true,
};

export const REJECT_ALL: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function readConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;
  try {
    const state = JSON.parse(
      decodeURIComponent(match.split("=").slice(1).join("=")),
    ) as ConsentState;
    if (state.v !== CONSENT_VERSION) return null; // re-ask on policy change
    return state;
  } catch {
    return null;
  }
}

export function writeConsent(categories: ConsentCategories): ConsentState {
  const state: ConsentState = {
    v: CONSENT_VERSION,
    categories,
    ts: new Date().toISOString(),
  };
  const value = encodeURIComponent(JSON.stringify(state));
  const secure = typeof location !== "undefined" && location.protocol === "https:";
  document.cookie =
    `${CONSENT_COOKIE}=${value}; path=/; max-age=${CONSENT_MAX_AGE}; SameSite=Lax` +
    (secure ? "; Secure" : "");
  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATED_EVENT, { detail: state }),
  );
  return state;
}
