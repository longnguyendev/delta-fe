import type { Metadata } from "next";
import { lang } from "next/root-params";
import {
  AboutDirections,
  AboutFormation,
  AboutFuture,
  AboutHero,
  AboutPrinciples,
} from "@/components/about-sections";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { CtaDarkBand } from "@/components/projects-sections";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { aboutPageJsonLd, breadcrumbJsonLd } from "@/lib/server/json-ld";
import { absoluteUrl, getPageMeta } from "@/lib/server/page-meta";

export async function generateMetadata(): Promise<Metadata> {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return {
    title: t.aboutPage.meta.title,
    description: t.aboutPage.meta.description,
    ...getPageMeta(locale, "/about"),
  };
}

export default async function AboutPage() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);
  const crumbs = t.aboutPage.crumbs;

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: crumbs.home, url: absoluteUrl(locale) },
          { name: crumbs.current, url: absoluteUrl(locale, "/about") },
        ])}
      />
      <JsonLd data={aboutPageJsonLd(t.aboutPage.meta.title, locale)} />
      <main>
        <AboutHero t={t.aboutPage} lang={locale} />
        <AboutFormation t={t.aboutPage} />
        <AboutPrinciples t={t.aboutPage} />
        <AboutDirections t={t.aboutPage} />
        <AboutFuture t={t.aboutPage} />
        <CtaDarkBand t={t.aboutPage.cta} contactHref={`/${locale}#contact`} />
      </main>
      <Footer />
    </div>
  );
}
