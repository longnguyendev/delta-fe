import type { Dictionary } from "@/lib/i18n/vi";
import { Container, Kicker, SectionHead } from "./ui";
import { BLUEPRINT_GRID, Crumbs } from "./projects-sections";

/**
 * Các khối của trang Giới thiệu. Bố cục bám đúng các mẫu đã có: hero lưới bản
 * vẽ như `ServicesHero`, lưới thẻ như `ServicesCommitments`, lưới đánh số như
 * `ProjectsLifecycle` — chỉ khác nội dung.
 */

/** Hero — nền lưới bản vẽ, breadcrumb, tiêu đề hai phần và dòng dẫn. */
export function AboutHero({
  t,
  lang,
}: {
  t: Dictionary["aboutPage"];
  lang: string;
}) {
  return (
    <section className="border-b border-line" style={BLUEPRINT_GRID}>
      <Container className="pb-12 pt-14 md:pb-[72px] md:pt-[76px]">
        {/* Không có `listHref`: Giới thiệu là trang đơn, không có trang danh sách. */}
        <Crumbs t={t.crumbs} lang={lang} />
        <Kicker>{t.hero.eyebrow}</Kicker>
        <h1 className="mt-2.5 text-pretty text-[clamp(32px,4.6vw,50px)] leading-[1.12] tracking-[-0.01em] md:max-w-[20ch]">
          {t.hero.titlePre}
          <span className="text-accent-2">{t.hero.titleAccent}</span>
        </h1>
        <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-text-secondary">
          {t.hero.lead}
        </p>
      </Container>
    </section>
  );
}

/**
 * Thông tin công ty — tỷ lệ chia 0.9fr/1.1fr của khối About (CLAUDE.md §2):
 * bên trái là câu chuyện thành lập, bên phải là khối số liệu.
 */
export function AboutFormation({ t }: { t: Dictionary["aboutPage"] }) {
  return (
    <section className="border-y border-line bg-surface py-14 md:py-[88px]">
      <Container className="grid grid-cols-1 gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        <div>
          <Kicker>{t.formation.eyebrow}</Kicker>
          <h2 className="mt-2.5 text-pretty text-[clamp(26px,3.4vw,36px)] tracking-[-0.015em]">
            {t.formation.title}
          </h2>
          <p className="mt-4 text-[17px] text-text-secondary">
            {t.formation.body}
          </p>
        </div>
        {/*
         * Hàng số liệu theo CLAUDE.md §3: các số Montserrat 800 ngăn nhau bằng
         * một đường kẻ phía trên, KHÔNG đóng hộp. Ngày thành lập đã đứng ở
         * tiêu đề và câu dẫn bên trái nên không lặp lại thành một ô ở đây —
         * "18/10/2025" là chuỗi dài, nhét vào ô là bị bẻ giữa con số.
         */}
        <dl className="grid grid-cols-3 gap-x-5 gap-y-6 self-start border-t border-line pt-6 md:gap-x-8">
          {t.formation.metrics.map((metric) => (
            <div key={metric.label} className="wrap-anywhere">
              <dt className="font-head text-[26px] font-extrabold leading-none text-accent-2 md:text-[28px]">
                {metric.value}
              </dt>
              <dd className="mt-1.5 text-[13px] text-text-secondary">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/** Phương châm hoạt động — ba thẻ, mỗi thẻ một gạch lime như `ServicesCommitments`. */
export function AboutPrinciples({ t }: { t: Dictionary["aboutPage"] }) {
  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.principles.eyebrow}
          title={t.principles.title}
          lead={t.principles.lead}
        />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {t.principles.items.map((item) => (
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

/** Định hướng phát triển — lưới 4 ô đánh số như `ProjectsLifecycle`. */
export function AboutDirections({ t }: { t: Dictionary["aboutPage"] }) {
  return (
    <section className="border-y border-line bg-surface py-14 md:py-[88px]">
      <Container>
        <SectionHead
          align="start"
          kicker={t.directions.eyebrow}
          title={t.directions.title}
          lead={t.directions.lead}
        />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 min-[60rem]:grid-cols-4">
          {t.directions.items.map((item, index) => (
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

/**
 * Mục tiêu phía trước — lời kết của trang. Không đặt CTA ở đây: band CTA ngay
 * dưới là hành động duy nhất của khung nhìn cuối (CLAUDE.md §7).
 */
export function AboutFuture({ t }: { t: Dictionary["aboutPage"] }) {
  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker={t.future.eyebrow}
          title={t.future.title}
          lead={t.future.lead}
        />
      </Container>
    </section>
  );
}
