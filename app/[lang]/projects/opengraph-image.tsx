import { en } from "@/lib/i18n/en";
import { vi } from "@/lib/i18n/vi";
import { OG_SIZE, renderOgCard, splitHeading } from "@/lib/server/og-card";

/**
 * Thẻ chia sẻ cho nhánh dự án — áp cho cả trang danh sách lẫn trang chi tiết,
 * vì tiêu đề dự án đọc từ Strapi (dữ liệu động) nên không dựng thẻ riêng cho
 * từng dự án ở đây.
 */
export const alt = "Delta Energy — dự án đã thực hiện";
export const size = OG_SIZE;
export const contentType = "image/png";

/** Đoạn được tô lime trong tiêu đề — phải là chuỗi con của `hero.title`. */
const ACCENT = { vi: "thực hiện", en: "Delivered" } as const;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "vi";
  const t = locale === "en" ? en : vi;

  return renderOgCard({
    eyebrow: t.projectsPage.hero.eyebrow,
    heading: splitHeading(t.projectsPage.hero.title, ACCENT[locale]),
    footerNote: t.footer.values,
  });
}
