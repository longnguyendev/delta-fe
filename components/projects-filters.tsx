import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Project, ProjectCategoryRef } from "@/lib/data/projects";
import { Container } from "./ui";
import { ProjectCard } from "./project-card";

/**
 * Dãy chip lọc theo hạng mục, chạy ở server.
 *
 * Chip là thẻ `<Link>` chứ không phải `<button>`: hạng mục đang chọn nằm trong
 * URL (`?q=<slug>`) và việc lọc do Strapi làm, nên mỗi chip phải là một địa chỉ
 * thật — chia sẻ được, mở tab mới được, back/forward của trình duyệt hoạt động
 * đúng. Bản cũ lọc bằng `useState` nên chỉ đổi được trong phiên đang xem.
 *
 * Hệ quả: danh sách hạng mục phải hỏi riêng (`getProjectCategories`), không suy
 * ra từ `projects` như trước — khi đang lọc, `projects` chỉ còn đúng hạng mục
 * đang chọn nên các chip khác sẽ biến mất khỏi giao diện.
 */

/** Địa chỉ của một chip. `slug` rỗng là "tất cả" — trả về URL trần, không kèm `?q=`. */
function hrefFor(lang: string, slug: string | null): string {
  const base = `/${lang}/projects`;

  return slug ? `${base}?q=${encodeURIComponent(slug)}` : base;
}

export function ProjectsFilters({
  projects,
  categories,
  activeSlug,
  total,
  filters,
  card,
  updating,
  lang,
}: {
  /** Dự án của đúng hạng mục đang chọn — Strapi đã lọc sẵn. */
  projects: Project[];
  categories: ProjectCategoryRef[];
  /** Slug trên URL, `null` khi xem tất cả. */
  activeSlug: string | null;
  /** Tổng số dự án của mọi hạng mục — mẫu số của dòng đếm. */
  total: number;
  filters: Dictionary["projectsPage"]["filters"];
  card: Dictionary["projectsPage"]["card"];
  updating: string;
  lang: string;
}) {
  /**
   * `slug: null` là chip "Tất cả". Dự án chưa gán hạng mục cũng có
   * `meta.category === null`, nhưng đó là chuyện của dữ liệu chứ không phải của
   * bộ lọc — hai thứ trùng hình dạng mà khác ý nghĩa.
   */
  const chips: { slug: string | null; value: string }[] = [
    { slug: null, value: filters.all },
    ...categories.map((category) => ({
      slug: category.slug,
      value: category.value,
    })),
  ];

  return (
    <>
      <div className="border-b border-line bg-container py-[22px]">
        <Container>
          {chips.length > 1 ? (
            <div
              role="group"
              aria-label={filters.label}
              className="flex flex-wrap items-center gap-2.5"
            >
              {chips.map((chip) => {
                /**
                 * Slug lạ trên URL (hạng mục vừa bị xoá, hoặc link cũ) thì không
                 * chip nào sáng — đúng với thực tế đang xem, và danh sách rỗng ở
                 * dưới đã nói rõ vì sao.
                 */
                const current = chip.slug === activeSlug;

                return (
                  <Link
                    key={chip.slug ?? "all"}
                    href={hrefFor(lang, chip.slug)}
                    aria-current={current ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-md border px-4 text-[13.5px] font-semibold transition-colors duration-150 ease-brand ${
                      current
                        ? "border-fg bg-fg text-white"
                        : "border-line bg-surface text-text-secondary hover:border-text-secondary hover:bg-container hover:text-fg"
                    }`}
                  >
                    {chip.value}
                  </Link>
                );
              })}
            </div>
          ) : null}
          <p
            role="status"
            className={`text-[13px] text-text-secondary ${chips.length > 1 ? "mt-3.5" : ""}`}
          >
            {filters.showing}{" "}
            <b className="font-semibold text-fg">{projects.length}</b>{" "}
            {filters.of} {total} {filters.unit}.
          </p>
        </Container>
      </div>

      <section className="border-b border-line bg-surface py-14 md:py-[88px]">
        <Container>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 min-[60rem]:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  href={`/${lang}/projects/${project.slug}`}
                  linkLabel={card.viewDetail}
                  updating={updating}
                />
              ))}
            </div>
          ) : (
            <p className="text-[14.5px] text-text-secondary">{filters.empty}</p>
          )}
        </Container>
      </section>
    </>
  );
}
