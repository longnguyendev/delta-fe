import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container, SectionHead } from "./ui";

export async function Problem() {
  const t = await getDictionary();

  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker={t.problem.kicker}
          title={t.problem.title}
          lead={t.problem.lead}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {t.problem.items.map((problem) => (
            <article
              key={problem.title}
              className="rounded-md border border-line bg-container p-8"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-error"
                />
                <div>
                  <h3 className="text-[17px]">{problem.title}</h3>
                  <p className="mt-1 text-text-secondary">{problem.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
