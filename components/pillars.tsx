import { Container, SectionHead } from "./ui";

const PILLARS = [
  {
    icon: (
      <path
        d="M5 12l4 4 10-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    title: "Đối tác trọn vòng đời",
    body: "Tư vấn giải pháp → cung cấp thiết bị → lắp đặt → bảo trì vận hành, do một đội kỹ thuật chịu trách nhiệm xuyên suốt.",
  },
  {
    icon: (
      <path
        d="M12 3v18M3 12h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    title: "Bằng chứng thay lời nói",
    body: "10+ năm kinh nghiệm, 150+ dự án hoàn thành, 40+ đối tác chiến lược — con số được công bố rõ ràng ngay trên trang.",
  },
  {
    icon: (
      <>
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
      </>
    ),
    title: "Vận hành liên tục là cam kết",
    body: "Giảm thiểu thời gian ngừng máy, vận hành liên tục 24/7, an toàn và hiệu quả cho từng công trình.",
  },
];

export function Pillars() {
  return (
    <section
      id="giai-phap"
      className="border-y border-line bg-container py-14 md:py-[88px]"
    >
      <Container>
        <SectionHead
          kicker="Vì sao chọn Delta Energy"
          title="Cách chúng tôi giải quyết bài toán vận hành"
          lead="Ba trụ cột định hình cách Delta Energy làm việc với từng khách hàng."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col rounded-md border border-line bg-container p-8"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary-bg text-primary">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  {pillar.icon}
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
