import { NextResponse, type NextRequest } from "next/server";
import {
  defaultLocale,
  hasLocale,
  localeCookie,
  localeCookieOptions,
  type Locale,
} from "@/lib/i18n/config";

type Preference = { tag: string; quality: number };

/** Minimal Accept-Language parser: `vi-VN,vi;q=0.9,en;q=0.8` → ranked tags. */
function parseAcceptLanguage(header: string): Preference[] {
  return header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const quality = params
        .map((param) => param.trim())
        .find((param) => param.startsWith("q="))
        ?.slice(2);

      return {
        tag: tag.trim().toLowerCase(),
        quality: quality === undefined ? 1 : Number.parseFloat(quality),
      };
    })
    .filter(
      (entry) =>
        entry.tag !== "" &&
        entry.tag !== "*" &&
        Number.isFinite(entry.quality) &&
        entry.quality > 0,
    )
    .sort((a, b) => b.quality - a.quality);
}

function detectLocale(request: NextRequest): Locale {
  // An explicit choice outranks the browser hint, so a returning visitor keeps
  // the language they picked even after changing their browser's preference.
  const saved = request.cookies.get(localeCookie)?.value;

  if (saved !== undefined && hasLocale(saved)) return saved;

  const header = request.headers.get("accept-language") ?? "";

  for (const { tag } of parseAcceptLanguage(header)) {
    const base = tag.split("-")[0];

    if (hasLocale(base)) return base;
  }

  return defaultLocale;
}

/** Prefixes every unprefixed path with the negotiated locale. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];

  if (hasLocale(segment)) {
    const response = NextResponse.next();

    // Landing on a prefixed path *is* the choice — remember it. Guarded so a
    // visitor whose cookie already matches gets no `Set-Cookie` at all, which
    // keeps the cacheable static response clean.
    if (request.cookies.get(localeCookie)?.value !== segment) {
      response.cookies.set(localeCookie, segment, localeCookieOptions);
    }

    return response;
  }

  const url = request.nextUrl.clone();
  const locale = detectLocale(request);

  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);

  // Which locale this redirects to depends on the cookie and the header, so a
  // shared cache must key on both — otherwise one visitor's redirect is served
  // to the next. (The target request stores the cookie itself.)
  response.headers.set("Vary", "Accept-Language, Cookie");

  return response;
}

export const config = {
  // Everything except internal paths and files with an extension.
  matcher: ["/((?!_next|.*\\..*).*)"],
};
