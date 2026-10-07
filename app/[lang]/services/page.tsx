import type { Metadata } from "next";
import { lang } from "next/root-params";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CtaDarkBand } from "@/components/projects-sections";
import {
  ServicesCommitments,
  ServicesHero,
  ServicesList,
  ServicesProducts,
} from "@/components/services-sections";
import { getProducts, getServices } from "@/lib/data/services";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();

  return {
    title: t.servicesPage.meta.title,
    description: t.servicesPage.meta.description,
  };
}

export default async function ServicesPage() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <main>
        <ServicesHero t={t.servicesPage} lang={locale} />
        <ServicesList services={getServices()} t={t.servicesPage} lang={locale} />
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
