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
              {/*
                `list-none` + ẩn `::-webkit-details-marker`: dấu tam giác gốc
                của <summary> vẫn được Chrome xếp như một flex item, chồng
                lên câu hỏi khi chữ phóng to. Đã có dấu "+" tự vẽ bên phải.
              */}
              <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-5 py-5 text-lg font-semibold text-fg [&::-webkit-details-marker]:hidden">
                {/*
                  `min-w-0`: flex item mặc định lấy min-content làm sàn chiều
                  rộng, và Chrome không hạ sàn đó xuống theo `overflow-wrap`
                  — câu hỏi dài ở cỡ chữ phóng to sẽ đẩy cả summary (rồi cả
                  trang) rộng ra. Cho phép co rồi thì `anywhere` ở body mới
                  bẻ được từ.
                */}
                <span className="min-w-0">{faq.q}</span>
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
