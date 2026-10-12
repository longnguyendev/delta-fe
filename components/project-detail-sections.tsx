import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Project } from "@/lib/data/projects";
import {
  ButtonLink,
  Container,
  Kicker,
  SectionHead,
  UpdatingNotice,
} from "./ui";
import { BLUEPRINT_GRID, Crumbs } from "./projects-sections";
import { ProjectCard, SIZES_TWO_UP } from "./project-card";
import { NextContent } from "./next-content/next-content";

/**
 * `updating` là chuỗi thay thế cho mọi trường chưa có giá trị bên Strapi — hero
 * không được để ô trống, vì một ô trống đọc ra là lỗi hiển thị.
 *
 * Phần thân của trang chỉ có một khối nội dung: trường `content` bên Strapi,
 * render qua `NextContent`. Các mục Phạm vi công việc / Giải pháp kỹ thuật /
 * Tiến độ / Kết quả bàn giao đã bỏ — content-type Project không có trường nào
 * cho chúng, nên chúng chỉ hiện được trạng thái rỗng.
 */

/** Hero case study — breadcrumb 3 cấp, ảnh công trình, dải meta 5 ô, hai hành động. */
export function DetailHero({
  project,
  t,
  pages,
  updating,
  lang,
}: {
  project: Project;
  t: Dictionary["projectDetail"];
  pages: Dictionary["projectsPage"];
  updating: string;
  lang: string;
}) {
  const { meta } = project;

  const facts = [
    { value: meta.category?.value, label: t.metaLabels.category },
    { value: meta.location, label: t.metaLabels.location },
    { value: meta.sector, label: t.metaLabels.sector },
    { value: meta.status, label: t.metaLabels.status },
    { value: meta.handover, label: t.metaLabels.handover },
  ];

  return (
    <section className="border-b border-line" style={BLUEPRINT_GRID}>
      <Container className="pb-12 pt-14 md:pb-[72px] md:pt-[76px]">
        <Crumbs
          t={pages.crumbs}
          lang={lang}
          current={project.title}
          listHref={`/${lang}/projects`}
        />
        <Kicker>{project.tag ?? updating}</Kicker>
        <h1 className="mt-2.5 text-pretty text-[clamp(32px,4.6vw,50px)] leading-[1.12] tracking-[-0.01em] md:max-w-[20ch]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-text-secondary">
          {project.description ?? updating}
        </p>

        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            // Ảnh chạy hết khổ `Container`: 1132px nội dung khi đã chạm
            // `max-w-[1180px]`, dưới đó thì bằng viewport trừ 48px đệm.
            sizes="(min-width: 1180px) 1132px, 100vw"
            priority
            className="mt-9 aspect-[16/9] h-auto w-full rounded-md border border-line object-cover"
          />
        ) : null}

        <dl className="mt-11 grid grid-cols-1 overflow-hidden rounded-md border border-line bg-container min-[32.5rem]:grid-cols-2 min-[60rem]:grid-cols-5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-line px-[22px] py-5 last:border-b-0 min-[32.5rem]:even:border-r min-[60rem]:border-b-0 min-[60rem]:border-r min-[60rem]:last:border-r-0"
            >
              <dt className="mb-1.5 text-[11.5px] uppercase tracking-[0.06em] text-text-secondary">
                {fact.label}
              </dt>
              <dd className="text-[14.5px] font-semibold leading-[1.4] text-fg">
                {fact.value ?? updating}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <ButtonLink href={`/${lang}#contact`} variant="primary" size="lg">
            {t.hero.ctaQuote}
          </ButtonLink>
          <ButtonLink href={`/${lang}/projects`} variant="secondary" size="lg">
            {t.hero.allProjects}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/**
 * Tổng quan — split 0.95fr / 1.05fr, tiêu đề trái và nội dung CKEditor bên phải.
 * Đây là phần thân duy nhất của trang chi tiết.
 */
export function DetailContext({
  project,
  t,
  updating,
}: {
  project: Project;
  t: Dictionary["projectDetail"];
  updating: string;
}) {
  return (
    <section className="py-14 md:py-[88px]">
      <Container className="grid grid-cols-1 items-start gap-9 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
        <div>
          <Kicker>{t.context.eyebrow}</Kicker>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)] leading-[1.2] tracking-[-0.015em]">
            {t.context.title}
          </h2>
        </div>
        <NextContent
          htmlRaw={project.content}
          fallback={<UpdatingNotice>{updating}</UpdatingNotice>}
        />
      </Container>
    </section>
  );
}

/** Dự án liên quan — 2 card, dùng lại `ProjectCard`. */
export function DetailRelated({
  projects,
  t,
  updating,
  lang,
}: {
  projects: Project[];
  t: Dictionary["projectDetail"];
  updating: string;
  lang: string;
}) {
  if (projects.length === 0) return null;

  return (
    <section className="border-y border-line bg-surface py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.related.eyebrow}
          title={t.related.title}
        />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              href={`/${lang}/projects/${project.slug}`}
              linkLabel={t.related.linkLabel}
              updating={updating}
              sizes={SIZES_TWO_UP}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
