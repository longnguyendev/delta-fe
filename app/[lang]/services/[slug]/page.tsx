import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CtaDarkBand } from "@/components/projects-sections";
import {
  ServiceDetailContext,
  ServiceDetailHero,
  ServiceDetailProjects,
  ServiceDetailScope,
  ServiceDetailSystem,
  ServiceDetailTimeline,
  ServiceOtherServices,
} from "@/components/service-detail-sections";
import {
  getOtherServices,
  getService,
  getServiceProjects,
  getServices,
} from "@/lib/data/services";
import { getDictionary } from "@/lib/i18n/dictionaries";

/** Chỉ 4 slug trong dữ liệu mock tồn tại — slug khác là 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: `${service.name} — Delta Energy`,
    description: service.description,
  };
}

export default async function ServiceDetailPage(
  props: PageProps<"/[lang]/services/[slug]">,
) {
  const { slug } = await props.params;
  const [locale, t] = await Promise.all([lang(), getDictionary()]);
  const service = getService(slug);

  if (!service) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <main>
        <ServiceDetailHero
          service={service}
          t={t.serviceDetail}
          pages={t.servicesPage}
          lang={locale}
        />
        <ServiceDetailContext service={service} t={t.serviceDetail} />
        <ServiceDetailScope service={service} t={t.serviceDetail} />
        <ServiceDetailSystem service={service} t={t.serviceDetail} />
        <ServiceDetailTimeline service={service} t={t.serviceDetail} />
        <ServiceDetailProjects
          projects={getServiceProjects(service)}
          t={t.serviceDetail}
          lang={locale}
        />
        <ServiceOtherServices
          services={getOtherServices(service)}
          t={t.serviceDetail}
          lang={locale}
        />
        <CtaDarkBand
          t={t.serviceDetail.cta}
          contactHref={`/${locale}#contact`}
        />
      </main>
      <Footer />
    </div>
  );
}
