import type { Metadata } from "next";
import { lang } from "next/root-params";
import { Contact } from "@/components/contact";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/json-ld";
import { Pillars } from "@/components/pillars";
import { Problem } from "@/components/problem";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { StatsBand } from "@/components/stats-band";
import { TrustStrip } from "@/components/trust-strip";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { faqPageJsonLd } from "@/lib/server/json-ld";
import { getPageMeta } from "@/lib/server/page-meta";

/**
 * Chỉ khai báo canonical/hreflang/Open Graph: `title` và `description` của
 * trang chủ đã đặt ở layout (kèm `title.default`), trả về trường không đặt thì
 * giá trị của layout vẫn áp dụng.
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await lang();

  return getPageMeta(locale);
}

export default async function Page() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return (
    <div id="top" className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      {/* FAQPage — cùng nội dung với khối `Faq` bên dưới. Trang gốc không cần breadcrumb. */}
      <JsonLd data={faqPageJsonLd(t.faq.items)} />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Projects />
        <Pillars />
        <HowItWorks />
        <CtaBand />
        <Services />
        <StatsBand />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
