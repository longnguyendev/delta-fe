import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Project } from "@/lib/data/projects";
import type { Service } from "@/lib/data/services";
import { getServiceNumber } from "@/lib/data/services";
import { ButtonLink, Container, Kicker, SectionHead } from "./ui";
import { BLUEPRINT_GRID, Crumbs } from "./projects-sections";
import { ProjectCard } from "./project-card";
import { ServiceCard } from "./services-sections";

/** Hero trang chi tiết dịch vụ — breadcrumb 3 cấp, dải meta 5 ô, hai hành động. */
export function ServiceDetailHero({
  service,
  t,
  pages,
  lang,
}: {
  service: Service;
  t: Dictionary["serviceDetail"];
  pages: Dictionary["servicesPage"];
  lang: string;
}) {
  const { meta } = service.detail;

  const facts = [
    { value: meta.group, label: t.metaLabels.group },
    { value: meta.scope, label: t.metaLabels.scope },
    { value: meta.equipment, label: t.metaLabels.equipment },
    { value: meta.acceptance, label: t.metaLabels.acceptance },
    { value: meta.handover, label: t.metaLabels.handover },
  ];

  return (
    <section className="border-b border-line" style={BLUEPRINT_GRID}>
      <Container className="pb-12 pt-14 md:pb-[72px] md:pt-[76px]">
        <Crumbs
          t={pages.crumbs}
          lang={lang}
          current={service.name}
          listHref={`/${lang}/services`}
        />
        <Kicker>
          {t.hero.eyebrow} {getServiceNumber(service)}
        </Kicker>
        <h1 className="mt-2.5 text-pretty text-[clamp(32px,4.6vw,50px)] leading-[1.12] tracking-[-0.01em] md:max-w-[20ch]">
          {service.name}
        </h1>
        <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-text-secondary">
          {service.description}
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
          <ButtonLink href={`/${lang}/services`} variant="secondary" size="lg">
            {t.hero.allServices}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/** Phạm vi công việc — split 0.95fr / 1.05fr, tiêu đề trái và văn xuôi phải. */
export function ServiceDetailContext({
  service,
  t,
}: {
  service: Service;
  t: Dictionary["serviceDetail"];
}) {
  return (
    <section className="py-14 md:py-[88px]">
      <Container className="grid grid-cols-1 items-start gap-9 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
        <div>
          <Kicker>{t.context.eyebrow}</Kicker>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)] leading-[1.2] tracking-[-0.015em]">
            {service.detail.contextTitle}
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {service.detail.context.map((paragraph) => (
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

/** Bốn hạng mục — band `surface`, lưới 2 cột đánh số. */
export function ServiceDetailScope({
  service,
  t,
}: {
  service: Service;
  t: Dictionary["serviceDetail"];
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
          {service.detail.scope.map((item, index) => (
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

/** Thiết bị & hệ thống đảm nhận — sơ đồ bên trái, danh mục hạng mục bên phải. */
export function ServiceDetailSystem({
  service,
  t,
}: {
  service: Service;
  t: Dictionary["serviceDetail"];
}) {
  const { diagram, kit, systemTitle } = service.detail;

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
          <Kicker>{t.system.eyebrow}</Kicker>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)] leading-[1.2] tracking-[-0.015em]">
            {systemTitle}
          </h2>
          <ul className="mt-6 border-t border-line">
            {kit.map((item) => (
              <li
                key={item.label}
                className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1 border-b border-line py-3.5 text-[14.5px] text-text-secondary"
              >
                {/*
                  Không dùng `flex-none`: nhãn thành cột cứng, ở cỡ chữ phóng
                  to nó rộng hơn cả màn hình và kéo hàng tràn ngang. Để mặc
                  định co được + cho hàng xuống dòng thì nhãn và mô tả tự
                  tách dòng khi hết chỗ; ở khổ chuẩn `min-w` giữ nguyên cột
                  118px nên hình dạng không đổi.
                */}
                <b className="min-w-[118px] font-head text-[13px] font-extrabold text-fg">
                  {item.label}
                </b>
                <span>{item.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/** Quy trình — band `surface`, bốn giai đoạn xếp dọc. */
export function ServiceDetailTimeline({
  service,
  t,
}: {
  service: Service;
  t: Dictionary["serviceDetail"];
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
          {service.detail.timeline.map((stage) => (
            <div
              key={stage.stage}
              className="grid grid-cols-1 gap-2 border-b border-line py-[26px] md:grid-cols-[150px_1fr] md:gap-7"
            >
              <div className="pt-[3px] text-[13px] text-text-secondary">
                <b className="mb-1 block font-head text-[14px] font-extrabold text-fg">
                  {stage.stage}
                </b>
                {stage.caption}
              </div>
              <div>
                <h3 className="text-[15.5px]">{stage.title}</h3>
                <p className="mt-1.5 max-w-[56ch] text-[14px] text-text-secondary">
                  {stage.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Hạng mục cùng nhóm dịch vụ — 2 card, dùng lại `ProjectCard`. */
export function ServiceDetailProjects({
  projects,
  t,
  lang,
}: {
  projects: Project[];
  t: Dictionary["serviceDetail"];
  lang: string;
}) {
  if (projects.length === 0) return null;

  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.projects.eyebrow}
          title={t.projects.title}
        />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              href={`/${lang}/projects/${project.slug}`}
              linkLabel={t.projects.linkLabel}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Các nhóm dịch vụ khác — band `surface`, thẻ rút gọn, giữ số canonical. */
export function ServiceOtherServices({
  services,
  t,
  lang,
}: {
  services: Service[];
  t: Dictionary["serviceDetail"];
  lang: string;
}) {
  return (
    <section className="border-y border-line bg-surface py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.others.eyebrow}
          title={t.others.title}
        />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              number={getServiceNumber(service)}
              href={`/${lang}/services/${service.slug}`}
              linkLabel={t.others.viewDetail}
              showScope={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
