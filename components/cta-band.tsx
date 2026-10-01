import { ButtonLink, Container } from "./ui";

/** Recurring CTA — calm; the loud one is reserved for the final section. */
export function CtaBand() {
  return (
    <section className="pb-14 md:pb-[88px]">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-md border border-primary-border bg-primary-bg px-6 py-6 md:px-12">
          <div>
            <h3 className="text-[clamp(20px,2.4vw,26px)] tracking-[-0.01em]">
              Cần tư vấn ngay cho hệ thống của Quý khách?
            </h3>
            <p className="mt-1 text-text-secondary">
              Gọi hotline 1900 1234 — chúng tôi phản hồi trong giờ làm việc.
            </p>
          </div>
          <ButtonLink href="tel:19001234" variant="secondary" size="lg">
            Gọi tư vấn ngay
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
