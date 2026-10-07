import type { Metadata } from "next";
import { lang } from "next/root-params";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectsFilters } from "@/components/projects-filters";
import {
  CtaDarkBand,
  ProjectsFeatured,
  ProjectsHero,
  ProjectsLifecycle,
} from "@/components/projects-sections";
import { getProjects } from "@/lib/data/projects";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();

  return {
    title: t.projectsPage.meta.title,
    description: t.projectsPage.meta.description,
  };
}

export default async function ProjectsPage() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);
  const projects = getProjects();
  const [featured] = projects;

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <main>
        <ProjectsHero t={t.projectsPage} lang={locale} />
        <ProjectsFilters
          projects={projects}
          filters={t.projectsPage.filters}
          card={t.projectsPage.card}
          lang={locale}
        />
        <ProjectsFeatured project={featured} t={t.projectsPage} lang={locale} />
        <ProjectsLifecycle t={t.projectsPage} />
        <CtaDarkBand
          t={t.projectsPage.cta}
          contactHref={`/${locale}#contact`}
        />
      </main>
      <Footer />
    </div>
  );
}
