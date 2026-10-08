import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Project } from "@/lib/data/projects";
import { ButtonLink, Container, Kicker, SectionHead } from "./ui";
import { BLUEPRINT_GRID, Crumbs } from "./projects-sections";
import { ProjectCard } from "./project-card";

/** Hero case study — breadcrumb 3 cấp, dải meta 5 ô, hai hành động. */
export function DetailHero({
  project,
  t,
  pages,
  lang,
}: {
  project: Project;
  t: Dictionary["projectDetail"];
  pages: Dictionary["projectsPage"];
  lang: string;
}) {
  const { meta } = project.detail;

  const facts = [
    { value: meta.scope, label: t.metaLabels.scope },
    { value: meta.location, label: t.metaLabels.location },
    { value: meta.sector, label: t.metaLabels.sector },
    { value: meta.status, label: t.metaLabels.status },
    { value: meta.handover, label: t.metaLabels.handover },
  ];

  return (
    <section
      className="border-b border-line"
      style={BLUEPRINT_GRID}
    >
      <Container className="pb-12 pt-14 md:pb-[72px] md:pt-[76px]">
        <Crumbs
          t={pages.crumbs}
          lang={lang}
          current={project.title}
          listHref={`/${lang}/projects`}
        />
        <Kicker>{project.tag}</Kicker>
        <h1 className="mt-2.5 text-pretty text-[clamp(32px,4.6vw,50px)] leading-[1.12] tracking-[-0.01em] md:max-w-[20ch]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-text-secondary">
          {project.description}
        </p>

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
                {fact.value}
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

/** Bối cảnh — split 0.95fr / 1.05fr, tiêu đề trái và văn xuôi phải. */
export function DetailContext({
  project,
  t,
}: {
  project: Project;
  t: Dictionary["projectDetail"];
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
        <div className="flex flex-col gap-4">
          {project.detail.context.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="max-w-[60ch] text-text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Phạm vi công việc — band `surface`, lưới 2 cột đánh số. */
export function DetailScope({
  project,
  t,
}: {
  project: Project;
  t: Dictionary["projectDetail"];
}) {
  return (
    <section className="border-y border-line bg-surface py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.scope.eyebrow}
          title={t.scope.title}
          lead={t.scope.lead}
        />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {project.detail.scope.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-[18px] rounded-md border border-line bg-container px-6 py-[26px]"
            >
              <span className="min-w-[26px] pt-[3px] font-head text-[19px] font-extrabold leading-none text-accent-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[15.5px]">{item.title}</h3>
                <p className="mt-2 text-[14px] text-text-secondary">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Giải pháp kỹ thuật — sơ đồ bên trái, văn xuôi bên phải. */
export function DetailSolution({
  project,
  t,
}: {
  project: Project;
  t: Dictionary["projectDetail"];
}) {
  const { diagram, solution } = project.detail;

  return (
    <section className="py-14 md:py-[88px]">
      <Container className="grid grid-cols-1 items-start gap-9 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
        <figure>
          <Image
            src={diagram.src}
            alt={diagram.alt}
            width={diagram.width}
            height={diagram.height}
            loading="lazy"
            className="h-auto w-full rounded-md border border-line bg-surface"
          />
          <figcaption className="mt-3.5 border-t border-line pt-3.5 text-[12.5px] text-text-secondary">
            {diagram.caption}
          </figcaption>
        </figure>
        <div>
          <Kicker>{t.solution.eyebrow}</Kicker>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)] leading-[1.2] tracking-[-0.015em]">
            {t.solution.title}
          </h2>
          <div className="mt-[18px] flex flex-col gap-4">
            {solution.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-[60ch] text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Tiến độ — các mốc xếp dọc, mốc bàn giao mang gạch lime. */
export function DetailTimeline({
  project,
  t,
}: {
  project: Project;
  t: Dictionary["projectDetail"];
}) {
  return (
    <section className="border-y border-line bg-surface py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.timeline.eyebrow}
          title={t.timeline.title}
          lead={t.timeline.lead}
        />
        <div className="border-t border-line">
          {project.detail.timeline.map((milestone) => (
            <div
              key={milestone.stage}
              className="grid grid-cols-1 gap-2 border-b border-line py-[26px] md:grid-cols-[150px_1fr] md:gap-7"
            >
              <div className="pt-[3px] text-[13px] text-text-secondary">
                {milestone.done ? (
                  <span
                    aria-hidden="true"
                    className="mb-2.5 block h-[3px] w-5 bg-accent-2"
                  />
                ) : null}
                <b className="mb-1 block font-head text-[14px] font-extrabold text-fg">
                  {milestone.stage}
                </b>
                {milestone.caption}
              </div>
              <div>
                <h3 className="text-[15.5px]">{milestone.title}</h3>
                <p className="mt-1.5 max-w-[56ch] text-[14px] text-text-secondary">
                  {milestone.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Kết quả bàn giao — 3 ô, mỗi ô một gạch lime. */
export function DetailOutcomes({
  project,
  t,
}: {
  project: Project;
  t: Dictionary["projectDetail"];
}) {
  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.outcomes.eyebrow}
          title={t.outcomes.title}
          lead={t.outcomes.lead}
        />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {project.detail.outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="rounded-md border border-line bg-container px-6 py-[26px]"
            >
              <span
                aria-hidden="true"
                className="mb-[18px] block h-[3px] w-[26px] bg-accent-2"
              />
              <h3 className="text-[15.5px]">{outcome.title}</h3>
              <p className="mt-2.5 text-[14px] text-text-secondary">
                {outcome.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Dự án liên quan — 2 card, dùng lại `ProjectCard`. */
export function DetailRelated({
  projects,
  t,
  lang,
}: {
  projects: Project[];
  t: Dictionary["projectDetail"];
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
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
