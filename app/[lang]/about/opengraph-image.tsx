import { en } from "@/lib/i18n/en";
import { vi } from "@/lib/i18n/vi";
import { OG_SIZE, renderOgCard } from "@/lib/server/og-card";

/** Thẻ chia sẻ cho trang Giới thiệu. */
export const alt = "Delta Energy — giới thiệu công ty";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "vi";
  const t = locale === "en" ? en : vi;

  /*
   * Tiêu đề đã sẵn hai phần (`titlePre` + `titleAccent`) nên dựng thẳng thành
   * hai `HeadingPart`, không cần `splitHeading`. `titleAccent` chính là đoạn
   * lime duy nhất của thẻ.
   */
  return renderOgCard({
    eyebrow: t.aboutPage.hero.eyebrow,
    heading: [
      { text: t.aboutPage.hero.titlePre },
      { text: t.aboutPage.hero.titleAccent, accent: true },
    ],
    footerNote: t.footer.values,
  });
}
