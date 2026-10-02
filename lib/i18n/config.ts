/**
 * Locale constants shared by `proxy.ts` and the dictionaries.
 * Kept free of `next/root-params` so the Proxy bundle can import it.
 */
export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/**
 * Remembers the visitor's language choice so a returning visitor lands on the
 * language they picked instead of whatever `Accept-Language` reports.
 *
 * Only the Proxy reads it — the URL stays the source of truth for what a given
 * link renders, so shared and bookmarked links keep working either way.
 */
export const localeCookie = "NEXT_LOCALE";

export const localeCookieOptions = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax",
  // Nothing in the browser needs to read it, so keep it out of JS reach.
  httpOnly: true,
  // Plain http://localhost in dev would silently drop a `secure` cookie.
  secure: process.env.NODE_ENV === "production",
} as const;
