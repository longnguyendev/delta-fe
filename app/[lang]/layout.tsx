import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { lang } from "next/root-params";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ReactQueryProvider } from "@/lib/client";
import { organizationJsonLd } from "@/lib/server/organization";
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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();

  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await lang();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/*
          JSON-LD công ty — cùng dữ liệu với footer, xem `lib/server/organization.ts`.
          Theo hướng dẫn JSON-LD của Next: render thẻ script thật với
          `dangerouslySetInnerHTML` (để children thì React escape mất), và escape
          ký tự mở thẻ trong payload để nội dung không thể đóng thẻ sớm.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
