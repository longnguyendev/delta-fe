import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container, SectionHead } from "./ui";

/** Icons are language-independent — zipped with `t.pillars.items` by index. */
const PILLAR_ICONS = [
  <path
    key="check"
    d="M5 12l4 4 10-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="plus"
    d="M12 3v18M3 12h18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <g key="search">
    <circle
      cx="11"
      cy="11"
      r="6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 20l-4-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>,
];

export async function Pillars() {
  const t = await getDictionary();

  return (
    <section
      id="solutions"
      className="border-y border-line bg-container py-14 md:py-[88px]"
    >
      <Container>
        <SectionHead
          kicker={t.pillars.kicker}
          title={t.pillars.title}
          lead={t.pillars.lead}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {t.pillars.items.map((pillar, index) => (
            <article
              key={pillar.title}
              className="flex flex-col rounded-md border border-line bg-container p-8"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary-bg text-primary">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  {PILLAR_ICONS[index]}
                </svg>
              </div>
              <h3 className="text-[17px]">{pillar.title}</h3>
              <p className="mt-2 text-text-secondary">{pillar.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
