"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { locales } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/vi";
import { ButtonLink, Container } from "./ui";

type HeaderProps = {
  t: Dictionary["nav"];
  lang: string;
};

/** Swaps the locale segment of the current path, keeping the rest of the URL. */
function LanguageSwitcher({
  current,
  t,
}: {
  current: string;
  t: Dictionary["nav"];
}) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).filter(Boolean).join("/");
  const suffix = rest ? `/${rest}` : "";

  return (
    <div role="group" aria-label={t.languageLabel} className="flex items-center">
      {locales.map((locale) => {
        const active = locale === current;

        return (
          <Link
            key={locale}
            href={`/${locale}${suffix}`}
            hrefLang={locale}
            lang={locale}
            title={t.languageNames[locale]}
            aria-label={`${locale.toUpperCase()} — ${t.languageNames[locale]}`}
            aria-current={active ? "page" : undefined}
            className={`inline-flex h-11 min-w-11 items-center justify-center rounded-md px-2 text-sm font-semibold uppercase transition-colors duration-150 ${
              active ? "text-fg" : "text-text-quaternary hover:text-link-hover"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}

/** Sticky 76px header; under 900px the nav becomes an off-canvas drawer. */
export function Header({ t, lang }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === `/${lang}`;

  /**
   * Nav items are home-page anchors (`#services`) plus real routes (`/projects`).
   * On the home page the anchors stay in-page; anywhere else they — and the
   * logo — need the locale prefix, or the browser looks for the anchor here.
   */
  function resolveHref(href: string) {
    if (href.startsWith("#")) return onHome ? href : `/${lang}${href}`;
    if (href.startsWith("/")) return `/${lang}${href}`;

    return href;
  }

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-container">
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Link
          href={resolveHref("#top")}
          aria-label={t.home}
          className="shrink-0"
        >
          <Image
            src="/logos/delta-energy-lockup.svg"
            alt="Delta Energy"
            width={214}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav
          aria-label={t.label}
          className="hidden items-center gap-7 min-[56.25rem]:flex"
        >
          {t.items.map((item) => (
            <Link
              key={item.href}
              href={resolveHref(item.href)}
              className="text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden min-[56.25rem]:block">
            <LanguageSwitcher current={lang} t={t} />
          </div>
          {/* Wrapper carries the breakpoint — `ButtonLink` always sets `inline-flex`. */}
          <div className="hidden min-[68.75rem]:block">
            <ButtonLink href="tel:19001234" variant="ghost">
              {t.call}
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.openMenu}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-fg min-[56.25rem]:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.drawerLabel}
          className="fixed inset-0 z-50 min-[56.25rem]:hidden"
        >
          <button
            type="button"
            aria-label={t.closeMenu}
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-fg/40"
          />
          <div className="absolute right-0 top-0 flex h-full w-[280px] flex-col border-l border-line bg-container p-6">
            <div className="mb-2 flex items-center justify-between">
              <Image
                src="/logos/delta-energy-lockup.svg"
                alt="Delta Energy"
                width={214}
                height={48}
                className="h-9 w-auto"
              />
              <button
                type="button"
                aria-label={t.closeMenu}
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-fg"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav aria-label={t.label} className="flex flex-col">
              {t.items.map((item) => (
                <Link
                  key={item.href}
                  href={resolveHref(item.href)}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-base font-medium text-text-secondary transition-colors duration-150 hover:text-text"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-6">
              <LanguageSwitcher current={lang} t={t} />
              <ButtonLink
                href="tel:19001234"
                variant="secondary"
                className="w-full"
              >
                {t.call}
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
