import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "./ui";

/** Quiet proof strip hugging the hero — sectors, not fabricated brands. */
export async function TrustStrip() {
  const t = await getDictionary();

  return (
    <section className="py-10 md:py-14">
      <Container>
        <p className="text-center text-[13px] uppercase tracking-[0.16em] text-text-quaternary">
          {t.trust.line}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {t.trust.sectors.map((sector) => (
            <span
              key={sector}
              className="font-head text-lg font-bold tracking-[0.02em] text-text-quaternary"
            >
              {sector}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
