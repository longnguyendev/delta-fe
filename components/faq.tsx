import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container, SectionHead } from "./ui";

export async function Faq() {
  const t = await getDictionary();

  return (
    <section
      id="faq"
      className="border-y border-line bg-container py-14 md:py-[88px]"
    >
      <Container className="max-w-[780px]">
        <SectionHead kicker={t.faq.kicker} title={t.faq.title} />
        <div>
          {t.faq.items.map((faq, index) => (
            <details
              key={faq.q}
              open={index === 0}
              className="group border-b border-line"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-5 py-5 text-lg font-semibold text-fg">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl font-normal leading-none text-primary transition-transform duration-[180ms] ease-brand group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="max-w-[70ch] pb-5 text-text-secondary">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
