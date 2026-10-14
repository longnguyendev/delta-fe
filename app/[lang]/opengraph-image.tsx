import { en } from "@/lib/i18n/en";
import { vi } from "@/lib/i18n/vi";
import { OG_SIZE, renderOgCard } from "@/lib/server/og-card";

/**
 * Thẻ chia sẻ mặc định của cả nhánh ngôn ngữ — mọi segment con không tự khai
 * `opengraph-image` sẽ thừa hưởng ảnh này.
 *
 * Đọc thẳng module dictionary thay vì `getDictionary()`: route này không nằm
 * trong cây `[lang]` về mặt root-params khi sinh ảnh, mà `params` đã cho biết
 * ngôn ngữ rồi.
 */
export const alt = "Delta Energy — đối tác gia công kết cấu thép";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = lang === "en" ? en : vi;

  return renderOgCard({
    eyebrow: t.hero.eyebrow,
    heading: [{ text: t.hero.h1Pre }, { text: t.hero.h1Accent, accent: true }],
    footerNote: t.footer.values,
  });
}
