import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { lang } from "next/root-params";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ReactQueryProvider } from "@/lib/client";
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
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
