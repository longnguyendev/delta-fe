"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Project, ProjectCategory } from "@/lib/data/projects";
import { Container } from "./ui";
import { ProjectCard } from "./project-card";

/**
 * Thứ tự chip lọc — khai báo tại đây (thay vì import mảng từ `lib/data`) để
 * module dữ liệu mock không lọt vào client bundle.
 */
const CATEGORY_ORDER: ProjectCategory[] = [
  "tu-van",
  "thiet-bi",
  "lap-dat",
  "bao-tri",
];

type FilterValue = ProjectCategory | "all";

export function ProjectsFilters({
  projects,
  filters,
  card,
  lang,
}: {
  projects: Project[];
  filters: Dictionary["projectsPage"]["filters"];
  card: Dictionary["projectsPage"]["card"];
  lang: string;
}) {
  const [active, setActive] = useState<FilterValue>("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="border-b border-line bg-container py-[22px]">
        <Container>
          <div
            role="group"
            aria-label={filters.label}
            className="flex flex-wrap items-center gap-2.5"
          >
            {(["all", ...CATEGORY_ORDER] as FilterValue[]).map((value) => {
              const pressed = value === active;

              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => setActive(value)}
                  className={`inline-flex min-h-11 items-center rounded-md border px-4 text-[13.5px] font-semibold transition-colors duration-150 ease-brand ${
                    pressed
                      ? "border-fg bg-fg text-white"
                      : "border-line bg-surface text-text-secondary hover:border-text-secondary hover:bg-container hover:text-fg"
                  }`}
                >
                  {value === "all" ? filters.all : filters.categories[value]}
                </button>
              );
            })}
          </div>
          <p role="status" className="mt-3.5 text-[13px] text-text-secondary">
            {filters.showing} <b className="font-semibold text-fg">{visible.length}</b>{" "}
            {filters.of} {projects.length} {filters.unit}.
          </p>
        </Container>
      </div>

      <section className="border-b border-line bg-surface py-14 md:py-[88px]">
        <Container>
          <div className="grid gap-[22px] md:grid-cols-2 min-[60rem]:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                href={`/${lang}/projects/${project.slug}`}
                linkLabel={card.viewDetail}
              />
            ))}
          </div>
          {visible.length === 0 ? (
            <p className="mt-6 text-[14.5px] text-text-secondary">
              {filters.empty}
            </p>
          ) : null}
        </Container>
      </section>
    </>
  );
}
