import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  DetailContext,
  DetailHero,
  DetailOutcomes,
  DetailRelated,
  DetailScope,
  DetailSolution,
  DetailTimeline,
} from "@/components/project-detail-sections";
import { CtaDarkBand } from "@/components/projects-sections";
import { getProject, getProjects, getRelatedProjects } from "@/lib/data/projects";
import { getDictionary } from "@/lib/i18n/dictionaries";

/** Chỉ 6 slug trong dữ liệu mock tồn tại — slug khác là 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Delta Energy`,
    description: project.description,
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/[lang]/projects/[slug]">,
) {
  const { slug } = await props.params;
  const [locale, t] = await Promise.all([lang(), getDictionary()]);
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <main>
        <DetailHero
          project={project}
          t={t.projectDetail}
          pages={t.projectsPage}
          lang={locale}
        />
        <DetailContext project={project} t={t.projectDetail} />
        <DetailScope project={project} t={t.projectDetail} />
        <DetailSolution project={project} t={t.projectDetail} />
        <DetailTimeline project={project} t={t.projectDetail} />
        <DetailOutcomes project={project} t={t.projectDetail} />
        <DetailRelated
          projects={getRelatedProjects(project)}
          t={t.projectDetail}
          lang={locale}
        />
        <CtaDarkBand
          t={t.projectDetail.cta}
          contactHref={`/${locale}#contact`}
        />
      </main>
      <Footer />
    </div>
  );
}
