import Image from "next/image";
import Link from "next/link";
import { lang } from "next/root-params";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container, SectionHead } from "./ui";

/** Artwork is language-independent — zipped with `t.projects.items` by index. */
const PROJECT_MEDIA = [
  {
    img: "/imagery/project-electrical-upgrade.svg",
    width: 300,
    height: 190,
  },
  {
    img: "/imagery/project-pump-pipeline.svg",
    width: 300,
    height: 190,
  },
  {
    img: "/imagery/project-maintenance-rig.svg",
    width: 300,
    height: 190,
  },
];

export async function Projects() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return (
    <section id="projects" className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker={t.projects.kicker}
          title={t.projects.title}
          lead={t.projects.lead}
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.projects.items.map((project, index) => {
            const media = PROJECT_MEDIA[index];

            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-md border border-line bg-container"
              >
                <div className="overflow-hidden border-b border-line">
                  <Image
                    src={media.img}
                    alt={project.alt}
                    width={media.width}
                    height={media.height}
                    className="h-auto w-full transition-transform duration-[300ms] ease-brand group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-head text-[12px] font-bold uppercase tracking-[0.06em] text-accent-accessible">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 text-[17px]">{project.title}</h3>
                  <p className="mt-1 text-text-secondary">{project.body}</p>
                  <Link
                    href={`/${locale}/projects`}
                    className="mt-2 inline-flex min-h-11 items-center text-[15px] font-semibold text-link transition-colors duration-150 hover:text-link-hover"
                  >
                    {t.projects.readMore}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
