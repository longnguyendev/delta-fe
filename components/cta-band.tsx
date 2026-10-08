import { getDictionary } from "@/lib/i18n/dictionaries";
import { ButtonLink, Container } from "./ui";

/** Recurring CTA — calm; the loud one is reserved for the final section. */
export async function CtaBand() {
  const t = await getDictionary();

  return (
    <section className="pb-14 md:pb-[88px]">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-md border border-primary-border bg-primary-bg px-6 py-6 md:px-12">
          <div>
            <h3 className="max-w-[60vw] text-pretty text-[clamp(20px,2.4vw,26px)] tracking-[-0.01em] md:max-w-none">
              {t.ctaBand.title}
            </h3>
            <p className="mt-1 text-text-secondary">{t.ctaBand.lead}</p>
          </div>
          <ButtonLink href="tel:19001234" variant="secondary" size="lg">
            {t.ctaBand.cta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
