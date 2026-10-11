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
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getProjects } from "@/lib/server/projects";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();

  return {
    title: t.projectsPage.meta.title,
    description: t.projectsPage.meta.description,
  };
}

export default async function ProjectsPage() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);
  const projects = await getProjects(locale);
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
          updating={t.common.updating}
          lang={locale}
        />
        {featured ? (
          <ProjectsFeatured
            project={featured}
            t={t.projectsPage}
            updating={t.common.updating}
            lang={locale}
          />
        ) : null}
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
