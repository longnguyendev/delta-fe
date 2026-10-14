import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { lang } from "next/root-params";
import { BASE_URL, company } from "@/constants";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { JsonLd } from "@/components/json-ld";
import { ReactQueryProvider } from "@/lib/client";
import { organizationJsonLd } from "@/lib/server/organization";
import { openGraphBase } from "@/lib/server/page-meta";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

/** Only the supported locales exist — anything else is a 404. */
export const dynamicParams = false;

/**
 * `metadataBase` nhận chuỗi chứ không phải instance `URL`: layout này nằm trong
 * phạm vi Cache Components, nơi giá trị metadata phải serialize được.
 *
 * `title.template` cộng hậu tố thương hiệu cho mọi trang con — vì vậy title của
 * từng trang KHÔNG được tự viết "— Delta Energy" nữa, sẽ thành lặp hai lần.
 */
export async function generateMetadata(): Promise<Metadata> {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return {
    metadataBase: new URL(BASE_URL),
    title: { default: t.meta.title, template: "%s — Delta Energy" },
    description: t.meta.description,
    applicationName: company.shortName,
    openGraph: openGraphBase(locale),
    twitter: { card: "summary_large_image" },
  };
}

/**
 * `themeColor` đã bị deprecate trong `Metadata` — khai báo qua `generateViewport`.
 * Hai giá trị theo `prefers-color-scheme` khớp nền thật của site (trắng ở chế độ
 * sáng, mực `--fg` ở chế độ tối).
 */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2937" },
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await lang();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* JSON-LD công ty — dữ liệu ở `lib/server/organization.ts`, cùng nguồn với footer. */}
        <JsonLd data={organizationJsonLd} />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
