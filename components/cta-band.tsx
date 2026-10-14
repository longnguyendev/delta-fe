import { company } from "@/constants";
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
            {/*
              `h2`, không phải `h3`: khối này đứng ngay sau `HowItWorks` (cũng
              `h2`) chứ không nằm trong một mục `h2` nào, nên `h3` tạo bước nhảy
              cấp tiêu đề. Cỡ chữ đặt thẳng bằng class nên giao diện không đổi.
            */}
            <h2 className="text-pretty text-[clamp(20px,2.4vw,26px)] tracking-[-0.01em]">
              {t.ctaBand.title}
            </h2>
            <p className="mt-1 text-text-secondary">{t.ctaBand.lead}</p>
          </div>
          <ButtonLink href={company.phone.href} variant="secondary" size="lg">
            {t.ctaBand.cta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
