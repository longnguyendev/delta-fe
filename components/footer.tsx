import Image from "next/image";
import Link from "next/link";
import { lang } from "next/root-params";
import { company } from "@/constants";
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

  /**
   * Thông tin pháp nhân — nhãn đổi theo ngôn ngữ, giá trị lấy từ
   * `@/constants/company` nên địa chỉ và tên pháp nhân giữ nguyên tiếng Việt ở
   * cả hai locale.
   */
  const info = [
    { label: t.footer.info.headOffice, value: company.address.headOffice },
    { label: t.footer.info.workshop, value: company.address.workshop },
    {
      label: t.footer.info.email,
      value: company.email.address,
      href: company.email.href,
    },
    { label: t.footer.info.taxCode, value: company.taxCode },
    { label: t.footer.info.workingHours, value: company.workingHours.display },
  ];

  return (
    <footer className="bg-fg py-12 text-sm md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            {/* Width, not `h-12`: the unlayered `img { height: auto }` in
                globals.css outranks utilities, so the height follows the ratio. */}
            <Image
              src="/logos/delta-energy-lockup-light.svg"
              alt="Delta Energy"
              width={214}
              height={48}
              className="w-[214px]"
            />
            <p className="mt-3 max-w-[36ch] text-[13px] leading-relaxed text-footer-text">
              {t.footer.tagline}
            </p>
            {/* Nhãn xếp trên giá trị: địa chỉ dài cần trọn bề rộng cột, và cách
                này không phụ thuộc độ dài nhãn của từng ngôn ngữ. */}
            <dl className="mt-6 flex flex-col gap-3 text-[13px] leading-relaxed">
              {info.map((row) => (
                <div key={row.label}>
                  <dt className="text-footer-muted">{row.label}</dt>
                  <dd className="text-footer-text">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="transition-colors duration-150 hover:text-footer-muted"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
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
