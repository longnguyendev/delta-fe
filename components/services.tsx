import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container, Kicker, SectionHead } from "./ui";

/** Artwork is language-independent — zipped with `t.services.items` by index. */
const SERVICE_MEDIA = [
  {
    img: "/imagery/project-pump-pipeline.svg",
    width: 300,
    height: 190,
  },
  {
    img: "/imagery/hero-system-diagram.svg",
    width: 480,
    height: 400,
  },
  {
    img: "/imagery/project-electrical-upgrade.svg",
    width: 300,
    height: 190,
  },
  {
    img: "/imagery/project-maintenance-rig.svg",
    width: 300,
    height: 190,
  },
];

export async function Services() {
  const t = await getDictionary();

  return (
    <section
      id="services"
      className="border-y border-line bg-container py-14 md:py-[88px]"
    >
      <Container>
        <SectionHead
          kicker={t.services.kicker}
          title={t.services.title}
          lead={t.services.lead}
        />
        <div className="flex flex-col gap-12 md:gap-24">
          {t.services.items.map((service, index) => {
            const media = SERVICE_MEDIA[index];

            const visual = (
              <figure className="flex items-center justify-center rounded-md border border-line bg-surface p-8 md:p-10">
                <Image
                  src={media.img}
                  alt={service.alt}
                  width={media.width}
                  height={media.height}
                  className="h-auto w-full"
                />
              </figure>
            );

            const copy = (
              <div>
                <Kicker>{service.kicker}</Kicker>
                <h3 className="mt-2.5 text-[clamp(22px,2.6vw,30px)] tracking-[-0.015em]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-[17px] text-text-secondary">
                  {service.body}
                </p>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex text-[15px] font-semibold text-link transition-colors duration-150 hover:text-link-hover"
                >
                  {t.services.readMore}
                </Link>
              </div>
            );

            return (
              <div
                key={service.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                {index % 2 === 0 ? (
                  <>
                    {copy}
                    {visual}
                  </>
                ) : (
                  <>
                    <div className="order-first md:order-none">{visual}</div>
                    {copy}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
