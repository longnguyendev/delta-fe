import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "./ui";

/** The page's strongest accent — one lime surface, ink text, one action. */
export async function FinalCta() {
  const t = await getDictionary();

  return (
    <section className="pb-14 md:pb-[104px]">
      <Container>
        <div className="relative overflow-hidden rounded-md bg-primary px-6 py-12 text-center md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-[100px] -right-[90px] h-80 w-80 rounded-full bg-primary-hover opacity-50"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-[120px] -left-[80px] h-[260px] w-[260px] rounded-full bg-primary-active opacity-45"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-[20ch] text-[clamp(28px,4vw,46px)] leading-[1.08] tracking-[-0.02em] text-on-primary">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[540px] text-lg text-on-primary/90">
              {t.finalCta.lead}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="tel:19001234"
                className="inline-flex h-[50px] items-center justify-center rounded-md bg-white px-[26px] text-[15px] font-semibold leading-none text-fg transition-colors duration-150 hover:bg-surface"
              >
                {t.finalCta.call}
              </a>
              <a
                href="#contact"
                className="inline-flex h-[50px] items-center justify-center px-4 text-[15px] font-semibold leading-none text-on-primary"
              >
                {t.finalCta.zalo}
              </a>
            </div>
            <p className="mt-6 text-sm text-on-primary/75">{t.finalCta.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
