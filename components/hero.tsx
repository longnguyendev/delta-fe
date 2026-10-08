import Image from "next/image";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ButtonLink, Container } from "./ui";

export async function Hero() {
  const t = await getDictionary();

  return (
    <section className="pt-[clamp(56px,9vw,108px)] pb-16 md:pb-20">
      <Container className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <div>
          <span className="inline-flex h-8 items-center rounded-sm border border-primary-border bg-primary-bg px-3 text-sm font-semibold leading-none text-accent-accessible">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-pretty text-[clamp(32px,4.6vw,50px)] leading-[1.12] tracking-[-0.01em] md:max-w-[18ch]">
            {t.hero.h1Pre}
            <span className="text-accent-2">{t.hero.h1Accent}</span>
          </h1>
          <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-text-secondary">
            {t.hero.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#contact" variant="primary" size="lg">
              {t.hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink href="#projects" variant="secondary" size="lg">
              {t.hero.ctaSecondary}
            </ButtonLink>
          </div>
          {/*
            `wrap-anywhere` trên từng ô: "150+" không có chỗ ngắt, nên ở cỡ
            chữ phóng to nó tạo sàn chiều rộng và đẩy trang tràn ngang.
          */}
          <dl className="mt-10 grid grid-cols-3 gap-x-5 gap-y-6 md:gap-x-10">
            {t.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-line pt-3 wrap-anywhere"
              >
                <dt className="font-head text-[26px] font-extrabold leading-none text-accent-2 md:text-[28px]">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-[13px] text-text-secondary">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="overflow-hidden rounded-md border border-line bg-surface">
          <Image
            src="/imagery/hero-blueprint-band.svg"
            alt={t.hero.imgAlt}
            width={1280}
            height={400}
            priority
            className="h-auto w-full"
          />
        </figure>
      </Container>
    </section>
  );
}
