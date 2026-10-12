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
import {
  getFeaturedProject,
  getProjectCategories,
  getProjects,
  getProjectsTotal,
} from "@/lib/server/projects";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();

  return {
    title: t.projectsPage.meta.title,
    description: t.projectsPage.meta.description,
  };
}

/**
 * `?q=` là slug hạng mục đang lọc.
 *
 * Query string lặp lại (`?q=a&q=b`) về đây dưới dạng mảng nên lấy phần tử đầu,
 * và chuỗi rỗng tính như không lọc — `?q=` trần phải ra danh sách đầy đủ chứ
 * không phải trang rỗng.
 */
function readCategorySlug(value: string | string[] | undefined): string | null {
  const raw = (Array.isArray(value) ? value[0] : value)?.trim();

  return raw ? raw : null;
}

export default async function ProjectsPage(
  props: PageProps<"/[lang]/projects">,
) {
  const { q } = await props.searchParams;
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  const activeSlug = readCategorySlug(q);
  /**
   * Slug lạ vẫn được chuyển thẳng xuống Strapi: URL nói gì thì trang phản ánh
   * đúng cái đó, và lưới rỗng kèm `filters.empty` đã nói rõ vì sao — không âm
   * thầm rơi về danh sách đầy đủ.
   */
  const [projects, categories, total, featured] = await Promise.all([
    getProjects(locale, activeSlug),
    getProjectCategories(locale),
    getProjectsTotal(),
    getFeaturedProject(locale),
  ]);

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <main>
        <ProjectsHero t={t.projectsPage} lang={locale} />
        <ProjectsFilters
          projects={projects}
          categories={categories}
          activeSlug={activeSlug}
          total={total}
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
