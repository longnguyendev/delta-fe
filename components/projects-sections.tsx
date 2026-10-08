import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Project } from "@/lib/data/projects";
import { ButtonLink, Container, Kicker, SectionHead } from "./ui";

/**
 * Nền lưới bản vẽ 40px cho các mặt phẳng hero — cùng công thức với
 * `imagery/hero-blueprint-band.svg` (CLAUDE.md §5).
 */
export const BLUEPRINT_GRID = {
  backgroundImage: [
    "repeating-linear-gradient(0deg, transparent, transparent 39px, var(--color-line) 40px)",
    "repeating-linear-gradient(90deg, transparent, transparent 39px, var(--color-line) 40px)",
  ].join(", "),
  backgroundSize: "40px 40px, 40px 40px",
} as const;

/** Breadcrumb — `Trang chủ / <danh sách> [/ <tên>]`. */
export function Crumbs({
  t,
  lang,
  current,
  listHref,
}: {
  t: Dictionary["projectsPage"]["crumbs"] | Dictionary["servicesPage"]["crumbs"];
  lang: string;
  /** Tiêu đề mục — chỉ truyền ở trang chi tiết. */
  current?: string;
  /** Trang danh sách của mục — mặc định là danh sách dự án. */
  listHref?: string;
}) {
  return (
    <nav
      aria-label={t.label}
      className="mb-2 flex flex-wrap items-center gap-2 text-[13px] text-text-secondary"
    >
      <Link
        href={`/${lang}`}
        className="inline-flex min-h-11 items-center text-text-secondary underline-offset-[3px] transition-colors duration-150 hover:text-fg hover:underline"
      >
        {t.home}
      </Link>
      <span aria-hidden="true">/</span>
      {current ? (
        <>
          <Link
            href={listHref ?? `/${lang}/projects`}
            className="inline-flex min-h-11 items-center text-text-secondary underline-offset-[3px] transition-colors duration-150 hover:text-fg hover:underline"
          >
            {t.current}
          </Link>
          <span aria-hidden="true">/</span>
          <span>{current}</span>
        </>
      ) : (
        <span>{t.current}</span>
      )}
    </nav>
  );
}

/** Hero trang danh sách — nền lưới bản vẽ, breadcrumb, hàng số liệu. */
export function ProjectsHero({
  t,
  lang,
}: {
  t: Dictionary["projectsPage"];
  lang: string;
}) {
  return (
    <section className="border-b border-line" style={BLUEPRINT_GRID}>
      <Container className="pb-12 pt-14 md:pb-[72px] md:pt-[76px]">
        <Crumbs t={t.crumbs} lang={lang} />
        <Kicker>{t.hero.eyebrow}</Kicker>
        <h1 className="mt-2.5 max-w-[65vw] text-pretty text-[clamp(32px,4.6vw,50px)] leading-[1.12] tracking-[-0.01em] md:max-w-[20ch]">
          {t.hero.title}
        </h1>
        <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-text-secondary">
          {t.hero.lead}
        </p>
        <dl className="mt-10 grid grid-cols-3 gap-x-5 gap-y-6 border-t border-line pt-6 md:gap-x-10">
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-head text-[26px] font-extrabold leading-none text-accent-2 md:text-[28px]">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-[13px] text-text-secondary">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/**
 * Khối dự án tiêu biểu — split 1.05fr / 0.95fr theo thiết kế.
 * Một hành động duy nhất (CLAUDE.md §7).
 */
export function ProjectsFeatured({
  project,
  t,
  lang,
}: {
  project: Project;
  t: Dictionary["projectsPage"];
  lang: string;
}) {
  const { meta } = project.detail;

  const facts = [
    { value: meta.handover, label: t.featured.metaLabels.handover },
    { value: meta.location, label: t.featured.metaLabels.location },
    { value: meta.scope, label: t.featured.metaLabels.serviceGroup },
  ];

  return (
    <section className="py-14 md:py-[88px]">
      <Container className="grid items-center gap-9 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <figure className="rounded-md border border-line bg-surface p-5">
          <Image
            src={project.detail.diagram.src}
            alt={project.detail.diagram.alt}
            width={project.detail.diagram.width}
            height={project.detail.diagram.height}
            loading="lazy"
            className="h-auto w-full"
          />
          <figcaption className="mt-3.5 border-t border-line pt-3.5 text-[12.5px] text-text-secondary">
            {project.detail.diagram.caption}
          </figcaption>
        </figure>

        <div>
          <Kicker>{t.featured.eyebrow}</Kicker>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)] leading-[1.2] tracking-[-0.015em]">
            {project.title}
          </h2>
          <p className="mt-4 max-w-[560px] text-[17px] text-text-secondary">
            {project.description}
          </p>
          <dl className="mt-7 flex flex-wrap gap-x-[34px] gap-y-4 border-t border-line pt-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-head text-[19px] font-extrabold text-fg">
                  {fact.value}
                </dt>
                <dd className="mt-1 text-[12.5px] text-text-secondary">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <ButtonLink
              href={`/${lang}/projects/${project.slug}`}
              variant="primary"
              size="lg"
            >
              {t.featured.ctaPrimary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Bốn nhóm dịch vụ — band `surface` với lưới 4 bước. */
export function ProjectsLifecycle({ t }: { t: Dictionary["projectsPage"] }) {
  return (
    <section className="border-y border-line bg-surface py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.lifecycle.eyebrow}
          title={t.lifecycle.title}
          lead={t.lifecycle.lead}
        />
        <div className="grid gap-[22px] md:grid-cols-2 min-[60rem]:grid-cols-4">
          {t.lifecycle.items.map((item, index) => (
            <div
              key={item.title}
              className="rounded-md border border-line bg-container p-6"
            >
              <span className="block font-head text-[26px] font-extrabold leading-none text-accent-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[16px]">{item.title}</h3>
              <p className="mt-2.5 text-[14px] text-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Band CTA nền ink — dùng chung cho cả hai trang. */
export function CtaDarkBand({
  t,
  contactHref,
}: {
  t:
    | Dictionary["projectsPage"]["cta"]
    | Dictionary["projectDetail"]["cta"]
    | Dictionary["servicesPage"]["cta"]
    | Dictionary["serviceDetail"]["cta"];
  contactHref: string;
}) {
  return (
    <section className="bg-fg py-14 md:py-[88px]">
      <Container className="grid items-center gap-7 md:grid-cols-[1fr_auto] md:gap-11">
        <div>
          <h2 className="text-white">{t.title}</h2>
          <p className="mt-3 max-w-[560px] text-[15.5px] text-footer-text">
            {t.lead}
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <ButtonLink href={contactHref} variant="primary" size="lg">
            {t.quote}
          </ButtonLink>
          <a
            href="tel:19001234"
            className="inline-flex h-[50px] items-center justify-center rounded-md border-[1.5px] border-line px-[26px] text-[15px] font-semibold leading-none text-white transition-colors duration-150 ease-brand hover:border-white hover:bg-white hover:text-fg"
          >
            {t.call}
          </a>
        </div>
      </Container>
    </section>
  );
}
