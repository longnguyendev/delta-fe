import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, type Locale } from "./config";
import { en } from "./en";
import { vi, type Dictionary } from "./vi";

const dictionaries: Record<Locale, Dictionary> = { vi, en };

export type { Dictionary, Locale };

/**
 * Resolves the dictionary for the locale in the URL.
 * Reads the `[lang]` root parameter, so any Server Component can call it
 * without prop drilling (Next.js 16 root params — Server Components only).
 */
export async function getDictionary(): Promise<Dictionary> {
  const locale = await lang();

  if (!hasLocale(locale)) notFound();

  return dictionaries[locale];
}

/** The locale from the URL, validated against the supported set. */
export async function getLocale(): Promise<Locale> {
  const locale = await lang();

  if (!hasLocale(locale)) notFound();

  return locale;
}
