import { lang } from "next/root-params";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ContactForm } from "./contact-form";
import { ButtonLink, Container, SectionHead } from "./ui";

/** Destinations are language-independent — zipped with `t.contact.items`. */
const CHANNEL_TARGETS = [
  { href: "tel:19001234", highlighted: false },
  { href: "#contact", highlighted: true },
  { href: "#contact-form", highlighted: false },
];

export async function Contact() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return (
    <section id="contact" className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker={t.contact.kicker}
          title={t.contact.title}
          lead={t.contact.lead}
        />
        <div className="mx-auto grid grid-cols-1 max-w-[1000px] gap-5 md:grid-cols-3">
          {t.contact.items.map((channel, index) => (
            <article
              key={channel.title}
              className={`flex flex-col rounded-md bg-container p-8 ${
                CHANNEL_TARGETS[index].highlighted
                  ? "border-2 border-primary"
                  : "border border-line"
              }`}
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-lg font-semibold text-fg">
                  {channel.title}
                </span>
                {CHANNEL_TARGETS[index].highlighted ? (
                  <span className="inline-flex h-8 items-center rounded-sm border border-primary-border bg-primary-bg px-3 text-sm leading-none text-accent-accessible">
                    {t.contact.badge}
                  </span>
                ) : null}
              </div>
              <p className="mb-8 text-sm text-text-tertiary">{channel.body}</p>
              <div className="mt-auto">
                <ButtonLink
                  href={CHANNEL_TARGETS[index].href}
                  variant="secondary"
                  className="w-full"
                >
                  {channel.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <ContactForm t={t.contactForm} lang={locale} />
        <p className="mt-6 text-center text-sm text-text-tertiary">
          {t.contact.footnote}
        </p>
      </Container>
    </section>
  );
}
