import { en } from "@/lib/i18n/en";
import { vi } from "@/lib/i18n/vi";
import { OG_SIZE, renderOgCard, splitHeading } from "@/lib/server/og-card";

/**
 * Thẻ chia sẻ cho từng trang dịch vụ. Tiêu đề lấy từ `servicePageMeta` — bảng
 * này có cả hai ngôn ngữ, khác với entity trong `lib/data/services.ts` (chỉ VI).
 */
export const alt = "Delta Energy — nhóm dịch vụ gia công kết cấu thép";
export const size = OG_SIZE;
export const contentType = "image/png";

/** Đoạn tô lime theo từng nhóm dịch vụ, mỗi ngôn ngữ một kiểu. */
const ACCENT: Record<string, { vi: string; en: string }> = {
  "ket-cau-thep": { vi: "kết cấu thép", en: "structure" },
  "cau-kien-kim-loai": { vi: "cấu kiện kim loại", en: "Metal component" },
  "ket-cau-phu-tro": { vi: "kết cấu thép phụ trợ", en: "auxiliary steel" },
  "han-lap-rap": { vi: "hoàn thiện", en: "finishing" },
};

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = lang === "en" ? "en" : "vi";
  const t = locale === "en" ? en : vi;

  const title =
    t.servicePageMeta[slug as keyof typeof t.servicePageMeta]?.title;
  const accent = ACCENT[slug]?.[locale];

  return renderOgCard({
    eyebrow: t.serviceDetail.hero.eyebrow,
    heading: title
      ? splitHeading(title, accent ?? "")
      : [{ text: "Delta Energy" }],
    footerNote: t.footer.values,
  });
}
