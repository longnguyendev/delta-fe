"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Project } from "@/lib/data/projects";
import { Container } from "./ui";
import { ProjectCard } from "./project-card";

/**
 * Chip lọc dựng từ chính hạng mục đang có trên các dự án, thay vì một danh sách
 * cứng: hạng mục do quản trị viên tạo bên Strapi nên FE không biết trước. Nhờ
 * vậy chip luôn khớp dữ liệu và không bao giờ có chip rỗng.
 */
function categoriesOf(projects: Project[]): string[] {
  const values = projects
    .map((project) => project.meta.category)
    .filter((value): value is string => value !== null);

  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

export function ProjectsFilters({
  projects,
  filters,
  card,
  updating,
  lang,
}: {
  projects: Project[];
  filters: Dictionary["projectsPage"]["filters"];
  card: Dictionary["projectsPage"]["card"];
  updating: string;
  lang: string;
}) {
  /** `null` là "tất cả" — trùng với giá trị của dự án chưa gán hạng mục. */
  const [active, setActive] = useState<string | null>(null);

  const categories = categoriesOf(projects);
  const visible =
    active === null
      ? projects
      : projects.filter((project) => project.meta.category === active);

  return (
    <>
      <div className="border-b border-line bg-container py-[22px]">
        <Container>
          {categories.length > 0 ? (
            <div
              role="group"
              aria-label={filters.label}
              className="flex flex-wrap items-center gap-2.5"
            >
              {[null, ...categories].map((value) => {
                const pressed = value === active;

                return (
                  <button
                    key={value ?? "all"}
                    type="button"
                    aria-pressed={pressed}
                    onClick={() => setActive(value)}
                    className={`inline-flex min-h-11 items-center rounded-md border px-4 text-[13.5px] font-semibold transition-colors duration-150 ease-brand ${
                      pressed
                        ? "border-fg bg-fg text-white"
                        : "border-line bg-surface text-text-secondary hover:border-text-secondary hover:bg-container hover:text-fg"
                    }`}
                  >
                    {value ?? filters.all}
                  </button>
                );
              })}
            </div>
          ) : null}
          <p
            role="status"
            className={`text-[13px] text-text-secondary ${categories.length > 0 ? "mt-3.5" : ""}`}
          >
            {filters.showing}{" "}
            <b className="font-semibold text-fg">{visible.length}</b>{" "}
            {filters.of} {projects.length} {filters.unit}.
          </p>
        </Container>
      </div>

      <section className="border-b border-line bg-surface py-14 md:py-[88px]">
        <Container>
          {visible.length > 0 ? (
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 min-[60rem]:grid-cols-3">
              {visible.map((project) => (
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
