import { en } from "@/lib/i18n/en";
import { vi } from "@/lib/i18n/vi";
import { OG_SIZE, renderOgCard, splitHeading } from "@/lib/server/og-card";

/** Thẻ chia sẻ cho trang danh sách dịch vụ. */
export const alt = "Delta Energy — dịch vụ gia công kết cấu thép";
export const size = OG_SIZE;
export const contentType = "image/png";

/** Đoạn được tô lime trong tiêu đề — phải là chuỗi con của `hero.title`. */
const ACCENT = { vi: "kết cấu thép", en: "fabrication" } as const;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "vi";
  const t = locale === "en" ? en : vi;

  return renderOgCard({
    eyebrow: t.servicesPage.hero.eyebrow,
    heading: splitHeading(t.servicesPage.hero.title, ACCENT[locale]),
    footerNote: t.footer.values,
  });
}
