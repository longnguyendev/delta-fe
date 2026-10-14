import type { Metadata } from "next";
import { lang } from "next/root-params";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { CtaDarkBand } from "@/components/projects-sections";
import {
  ServicesCommitments,
  ServicesHero,
  ServicesList,
  ServicesProducts,
} from "@/components/services-sections";
import { getProducts, getServices } from "@/lib/data/services";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { breadcrumbJsonLd, productsJsonLd } from "@/lib/server/json-ld";
import { absoluteUrl, getPageMeta } from "@/lib/server/page-meta";

export async function generateMetadata(): Promise<Metadata> {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return {
    title: t.servicesPage.meta.title,
    description: t.servicesPage.meta.description,
    ...getPageMeta(locale, "/services"),
  };
}

export default async function ServicesPage() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);
  const crumbs = t.servicesPage.crumbs;

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: crumbs.home, url: absoluteUrl(locale) },
          { name: crumbs.current, url: absoluteUrl(locale, "/services") },
        ])}
      />
      <JsonLd data={productsJsonLd(getProducts(), locale)} />
      <main>
        <ServicesHero t={t.servicesPage} lang={locale} />
        <ServicesList
          services={getServices()}
          t={t.servicesPage}
          lang={locale}
        />
        <ServicesProducts
          products={getProducts()}
          t={t.servicesPage}
          lang={locale}
        />
        <ServicesCommitments t={t.servicesPage} />
        <CtaDarkBand
          t={t.servicesPage.cta}
          contactHref={`/${locale}#contact`}
        />
      </main>
      <Footer />
    </div>
  );
}
