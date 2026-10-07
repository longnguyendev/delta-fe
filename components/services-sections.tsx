import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Product, Service } from "@/lib/data/services";
import { Container, Kicker, SectionHead } from "./ui";
import { BLUEPRINT_GRID, Crumbs } from "./projects-sections";

/** Hero trang danh sách dịch vụ — nền lưới bản vẽ, breadcrumb, hàng số liệu. */
export function ServicesHero({
  t,
  lang,
}: {
  t: Dictionary["servicesPage"];
  lang: string;
}) {
  return (
    <section className="border-b border-line" style={BLUEPRINT_GRID}>
      <Container className="pb-12 pt-14 md:pb-[72px] md:pt-[76px]">
        <Crumbs t={t.crumbs} lang={lang} listHref={`/${lang}/services`} />
        <Kicker>{t.hero.eyebrow}</Kicker>
        <h1 className="mt-2.5 max-w-[20ch] text-[clamp(32px,4.6vw,50px)] leading-[1.12] tracking-[-0.01em]">
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
 * Thẻ dịch vụ — dùng cho lưới trang danh sách và mục "dịch vụ khác" ở trang chi tiết.
 * `showScope` chỉ bật ở trang danh sách, đúng như thiết kế.
 */
export function ServiceCard({
  service,
  number,
  href,
  linkLabel,
  showScope = true,
}: {
  service: Service;
  /** Số canonical 01–04. */
  number: string;
  href: string;
  linkLabel: string;
  showScope?: boolean;
}) {
  return (
    <article className="flex flex-col rounded-md border border-line bg-container px-[30px] py-8 transition-colors duration-150 hover:border-text-secondary">
      <span className="font-head text-[34px] font-extrabold leading-none tracking-[-0.02em] text-accent-2">
        {number}
      </span>
      <span
        aria-hidden="true"
        className="mb-[22px] mt-1.5 block h-[3px] w-[34px] bg-accent-2"
      />
      <h3 className="text-[19px]">{service.name}</h3>
      <p className="mt-3 text-[14.5px] text-text-secondary">
        {service.description}
      </p>
      {showScope ? (
        <ul className="mt-[18px] border-t border-line">
          {service.scope.map((item) => (
            <li
              key={item}
              className="relative border-b border-line py-[11px] pl-[18px] text-[13.5px] text-text-secondary"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-[19px] h-[7px] w-[7px] bg-accent-2"
              />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        href={href}
        className="group/link mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-[18px] text-[13.5px] font-semibold text-fg underline-offset-[3px] hover:underline"
      >
        {linkLabel}
        <span
          aria-hidden="true"
          className="text-accent-2 transition-transform duration-150 ease-brand group-hover/link:translate-x-[3px]"
        >
          →
        </span>
      </Link>
    </article>
  );
}

/** Bốn nhóm dịch vụ — lưới 2 cột, mỗi thẻ mang số canonical 01–04. */
export function ServicesList({
  services,
  t,
  lang,
}: {
  services: Service[];
  t: Dictionary["servicesPage"];
  lang: string;
}) {
  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.list.eyebrow}
          title={t.list.title}
          lead={t.list.lead}
        />
        <div className="grid gap-[22px] md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              number={String(index + 1).padStart(2, "0")}
              href={`/${lang}/services/${service.slug}`}
              linkLabel={t.list.viewDetail}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Band `surface` — strip sản phẩm theo nhóm dịch vụ, mỗi thẻ một hành động báo giá. */
export function ServicesProducts({
  products,
  t,
  lang,
}: {
  products: Product[];
  t: Dictionary["servicesPage"];
  lang: string;
}) {
  return (
    <section className="border-y border-line bg-surface py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.products.eyebrow}
          title={t.products.title}
          lead={t.products.lead}
        />
        <div className="grid gap-[22px] md:grid-cols-2 min-[60rem]:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.src}
              className="group flex flex-col overflow-hidden rounded-md border border-line bg-container transition-colors duration-150 hover:border-text-secondary"
            >
              <div className="aspect-[200/150] overflow-hidden border-b border-line bg-surface">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-[300ms] ease-brand group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-[18px] pb-5 pt-[18px]">
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
                  {product.category}
                </span>
                <h3 className="mb-[14px] mt-1.5 text-[15.5px]">
                  {product.name}
                </h3>
                <Link
                  href={`/${lang}#contact`}
                  className="group/link mt-auto inline-flex min-h-11 items-center gap-2 self-start text-[13.5px] font-semibold text-fg underline-offset-[3px] hover:underline"
                >
                  {t.products.quote}
                  <span
                    aria-hidden="true"
                    className="text-accent-2 transition-transform duration-150 ease-brand group-hover/link:translate-x-[3px]"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Ba cam kết dịch vụ — mỗi ô một gạch lime, không dùng hộp lồng nhau. */
export function ServicesCommitments({ t }: { t: Dictionary["servicesPage"] }) {
  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.commitments.eyebrow}
          title={t.commitments.title}
        />
        <div className="grid gap-[22px] md:grid-cols-3">
          {t.commitments.items.map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-line bg-container px-[26px] py-7"
            >
              <span
                aria-hidden="true"
                className="mb-[18px] block h-[3px] w-[26px] bg-accent-2"
              />
              <h3 className="text-[15.5px]">{item.title}</h3>
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
