import { Container, SectionHead } from "./ui";

const STEPS = [
  {
    visual: (
      <>
        <rect x="14" y="40" width="92" height="9" rx="4.5" fill="var(--brand-color-border-secondary)" />
        <rect x="14" y="58" width="58" height="9" rx="4.5" fill="var(--brand-color-border-secondary)" />
        <rect x="14" y="80" width="40" height="14" rx="7" fill="var(--brand-color-primary)" />
      </>
    ),
    title: "Khảo sát & tư vấn",
    body: "Kỹ thuật viên khảo sát hiện trạng, lắng nghe yêu cầu vận hành và đề xuất giải pháp phù hợp.",
  },
  {
    visual: (
      <>
        <rect x="14" y="38" width="44" height="38" rx="6" fill="none" stroke="var(--brand-color-border-secondary)" strokeWidth="2" />
        <rect x="66" y="38" width="44" height="38" rx="6" fill="none" stroke="var(--brand-color-primary)" strokeWidth="2" />
        <rect x="14" y="84" width="96" height="9" rx="4.5" fill="var(--brand-color-border-secondary)" />
      </>
    ),
    title: "Báo giá & cung cấp",
    body: "Báo giá minh bạch, thiết bị chính hãng, tiến độ giao hàng rõ ràng.",
  },
  {
    visual: (
      <>
        <path d="M16 70l20 16 28-44" fill="none" stroke="var(--brand-color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="72" y="44" width="38" height="9" rx="4.5" fill="var(--brand-color-border-secondary)" />
        <rect x="72" y="64" width="26" height="9" rx="4.5" fill="var(--brand-color-border-secondary)" />
      </>
    ),
    title: "Lắp đặt & bàn giao",
    body: "Lắp đặt, chạy thử và bàn giao vận hành; hỗ trợ kỹ thuật sau bàn giao.",
  },
];

export function HowItWorks() {
  return (
    <section id="quy-trinh" className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker="Quy trình làm việc"
          title="Vận hành ổn định chỉ sau ba bước"
          lead="Không gián đoạn sản xuất. Không dự án kéo dài hàng tháng."
        />
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex flex-col gap-5">
              <div className="aspect-[124/108] rounded-md border border-line bg-layout p-6">
                <svg
                  viewBox="0 0 124 108"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  {step.visual}
                </svg>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-primary text-sm font-semibold leading-none text-on-primary">
                    {index + 1}
                  </span>
                  <h3 className="text-xl">{step.title}</h3>
                </div>
                <p className="max-w-[34ch] text-text-secondary">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
