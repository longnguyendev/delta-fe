import { lang } from "next/root-params";
import { Contact } from "@/components/contact";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pillars } from "@/components/pillars";
import { Problem } from "@/components/problem";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { StatsBand } from "@/components/stats-band";
import { TrustStrip } from "@/components/trust-strip";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function Page() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return (
    <div id="top" className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Pillars />
        <HowItWorks />
        <CtaBand />
        <Services />
        <StatsBand />
        <Projects />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
