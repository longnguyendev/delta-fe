import Image from "next/image";
import Link from "next/link";
import { lang } from "next/root-params";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "./ui";

/**
 * The footer renders on every route, so its home-page anchors need the locale
 * prefix — bare `#services` would look for that anchor on `/vi/projects`.
 */
function resolveHref(href: string, locale: string) {
  if (href.startsWith("#")) return `/${locale}${href}`;
  if (href.startsWith("/")) return `/${locale}${href}`;

  return href;
}

/** Dark #1F2937 band — #D7DBDF is the lightest text allowed (CLAUDE.md §4). */
export async function Footer() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return (
    <footer className="bg-fg py-12 text-sm md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logos/delta-energy-lockup-light.svg"
              alt="Delta Energy"
              width={214}
              height={48}
              className="h-12 w-auto"
            />
            <p className="mt-3 max-w-[36ch] text-[13px] leading-relaxed text-footer-text">
              {t.footer.tagline}
            </p>
          </div>
          {t.footer.cols.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-footer-muted">
                {col.heading}
              </div>
              <div className="flex flex-col">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={resolveHref(link.href, locale)}
                    className="inline-flex min-h-11 items-center text-footer-text transition-colors duration-150 hover:text-footer-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-footer-muted">
          <span>{t.footer.legal}</span>
          <span>{t.footer.values}</span>
        </div>
      </Container>
    </footer>
  );
}
