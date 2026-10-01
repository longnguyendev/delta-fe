import { Container, SectionHead } from "./ui";

const FAQS = [
  {
    q: "Delta Energy cung cấp những dịch vụ nào?",
    a: "Chúng tôi cung cấp thiết bị công nghiệp chính hãng, giải pháp kỹ thuật theo yêu cầu, lắp đặt & nâng cấp hệ thống và bảo trì vận hành định kỳ cho nhà máy, công trình công nghiệp.",
  },
  {
    q: "Quy trình nhận báo giá mất bao lâu?",
    a: "Sau khi nhận yêu cầu, chúng tôi phản hồi trong ngày làm việc và gửi báo giá chi tiết sau khi khảo sát hiện trạng (nếu cần).",
  },
  {
    q: "Thiết bị có chính hãng không?",
    a: "Toàn bộ thiết bị do Delta Energy cung cấp đều có nguồn gốc rõ ràng, kèm chứng từ và bảo hành theo quy định nhà sản xuất.",
  },
  {
    q: "Có hỗ trợ bảo trì định kỳ không?",
    a: "Có. Chúng tôi xây dựng lịch bảo trì theo khuyến nghị của nhà sản xuất và điều kiện vận hành thực tế, giúp giảm thiểu thời gian ngừng máy.",
  },
  {
    q: "Làm thế nào để liên hệ?",
    a: "Quý khách có thể gọi hotline 1900 1234, nhắn Zalo hoặc gửi yêu cầu báo giá qua biểu mẫu trên trang. Lưu ý: trang hiện chưa hỗ trợ đặt mua trực tuyến.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="border-y border-line bg-container py-14 md:py-[88px]"
    >
      <Container className="max-w-[780px]">
        <SectionHead
          kicker="Trước khi liên hệ"
          title="Câu hỏi thường gặp từ khách hàng"
        />
        <div>
          {FAQS.map((faq, index) => (
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
