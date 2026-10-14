import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
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
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/server/json-ld";
import { absoluteUrl, getPageMeta } from "@/lib/server/page-meta";

/** Chỉ 4 slug trong dữ liệu mock tồn tại — slug khác là 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const [locale, t] = await Promise.all([lang(), getDictionary()]);
  const service = getService(slug);

  if (!service) return {};

  /*
   * Title/description lấy từ dictionary theo slug chứ không lấy từ entity:
   * `lib/data/services.ts` chỉ có tiếng Việt, dùng thẳng thì `/en/services/*`
   * hiện meta tiếng Việt. Hậu tố "— Delta Energy" do `title.template` ở layout
   * thêm vào, không viết ở đây.
   */
  const meta = t.servicePageMeta[service.slug];

  return {
    title: meta.title,
    description: meta.description,
    ...getPageMeta(locale, `/services/${service.slug}`),
  };
}

export default async function ServiceDetailPage(
  props: PageProps<"/[lang]/services/[slug]">,
) {
  const { slug } = await props.params;
  const [locale, t] = await Promise.all([lang(), getDictionary()]);
  const service = getService(slug);

  if (!service) notFound();

  const crumbs = t.servicesPage.crumbs;
  const serviceUrl = absoluteUrl(locale, `/services/${service.slug}`);

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <JsonLd data={serviceJsonLd(service, serviceUrl)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: crumbs.home, url: absoluteUrl(locale) },
          { name: crumbs.current, url: absoluteUrl(locale, "/services") },
          { name: service.name, url: serviceUrl },
        ])}
      />
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
          projects={getServiceProjects()}
          t={t.serviceDetail}
          updating={t.common.updating}
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
