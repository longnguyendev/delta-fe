import { ButtonLink, Container, SectionHead } from "./ui";

const CHANNELS = [
  {
    title: "Báo giá qua hotline",
    body: "Trao đổi trực tiếp với kỹ thuật viên về nhu cầu của Quý khách.",
    cta: "Gọi 1900 1234",
    href: "tel:19001234",
    highlighted: false,
  },
  {
    title: "Tư vấn qua Zalo",
    body: "Gửi mô tả và ảnh hiện trạng qua Zalo, chúng tôi phản hồi sớm nhất.",
    cta: "Nhắn Zalo",
    href: "#lien-he",
    highlighted: true,
  },
  {
    title: "Gửi yêu cầu báo giá",
    body: "Điền biểu mẫu yêu cầu, chúng tôi gửi báo giá chi tiết trong ngày làm việc.",
    cta: "Gửi yêu cầu",
    href: "#lien-he",
    highlighted: false,
  },
];

export function Contact() {
  return (
    <section id="lien-he" className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker="Liên hệ"
          title="Nhận báo giá trong ngày làm việc"
          lead="Ba cách liên hệ — chọn cách thuận tiện nhất với Quý khách."
        />
        <div className="mx-auto grid max-w-[1000px] gap-5 md:grid-cols-3">
          {CHANNELS.map((channel) => (
            <article
              key={channel.title}
              className={`flex flex-col rounded-md bg-container p-8 ${
                channel.highlighted
                  ? "border-2 border-primary"
                  : "border border-line"
              }`}
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-lg font-semibold text-fg">
                  {channel.title}
                </span>
                {channel.highlighted ? (
                  <span className="inline-flex h-8 items-center rounded-sm border border-primary-border bg-primary-bg px-3 text-sm leading-none text-accent-accessible">
                    Phản hồi nhanh nhất
                  </span>
                ) : null}
              </div>
              <p className="mb-8 text-sm text-text-tertiary">{channel.body}</p>
              <div className="mt-auto">
                <ButtonLink
                  href={channel.href}
                  variant="secondary"
                  className="w-full"
                >
                  {channel.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-text-tertiary">
          Trang hiện chưa hỗ trợ đặt mua trực tuyến. Quý khách vui lòng liên hệ
          hotline hoặc Zalo để nhận báo giá.
        </p>
      </Container>
    </section>
  );
}
