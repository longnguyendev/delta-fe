import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  DetailContext,
  DetailHero,
  DetailRelated,
} from "@/components/project-detail-sections";
import { CtaDarkBand } from "@/components/projects-sections";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale } from "@/lib/i18n/config";
import { getProject, getProjects, pickRelated } from "@/lib/server/projects";

/**
 * Dựng sẵn các slug đang có trên Strapi; slug thêm sau vẫn render được ngay nhờ
 * `dynamicParams` mặc định, không phải build lại.
 */
export async function generateStaticParams() {
  const projects = await getProjects(defaultLocale);

  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const locale = await lang();
  const project = await getProject(locale, slug);

  if (!project) return {};

  return {
    title: `${project.title} — Delta Energy`,
    description: project.description ?? undefined,
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/[lang]/projects/[slug]">,
) {
  const { slug } = await props.params;
  const [locale, t] = await Promise.all([lang(), getDictionary()]);
  const project = await getProject(locale, slug);

  if (!project) notFound();

  const related = pickRelated(project, await getProjects(locale));

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <main>
        <DetailHero
          project={project}
          t={t.projectDetail}
          pages={t.projectsPage}
          updating={t.common.updating}
          lang={locale}
        />
        <DetailContext
          project={project}
          t={t.projectDetail}
          updating={t.common.updating}
        />
        <DetailRelated
          projects={related}
          t={t.projectDetail}
          updating={t.common.updating}
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
