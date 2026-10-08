import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container, SectionHead } from "./ui";

/**
 * Step visuals are language-independent — zipped with `t.process.items`.
 * Vẽ theo luật imagery của design system: khối mực #1F2937 ở nhiều mức mờ,
 * nét 4px, và đúng MỘT điểm lime cho mỗi hình. (Bản cũ dùng
 * --brand-color-border-secondary #F2F2F3 làm màu tô trên nền bg-layout #F6F6F7
 * — chênh lệch 1.04:1 nên cả ba khung trông như trống.)
 */
const INK = "#1F2937";

const STEP_VISUALS = [
  // 1 · Khảo sát & tư vấn — đồng hồ áp suất trên tuyến ống
  <>
    <rect x="24" y="86" width="76" height="10" fill={INK} fillOpacity="0.16" />
    <rect x="24" y="96" width="76" height="6" fill={INK} fillOpacity="0.34" />
    <rect x="58" y="68" width="8" height="20" fill={INK} fillOpacity="0.45" />
    <rect x="50" y="64" width="24" height="6" fill={INK} fillOpacity="0.3" />
    <circle cx="62" cy="40" r="30" fill="none" stroke={INK} strokeOpacity="0.55" strokeWidth="4" />
    <path d="M62 40 L62 14 A26 26 0 0 1 88 40 Z" fill="var(--brand-color-primary)" />
    <path d="M62 40 L84 27" fill="none" stroke={INK} strokeOpacity="0.8" strokeWidth="4" />
    <circle cx="62" cy="40" r="4.5" fill={INK} fillOpacity="0.85" />
  </>,
  // 2 · Báo giá & cung cấp — tủ điều khiển
  <>
    <rect x="28" y="92" width="68" height="8" fill={INK} fillOpacity="0.18" />
    <rect x="34" y="12" width="56" height="80" fill={INK} fillOpacity="0.1" />
    <rect x="34" y="12" width="56" height="80" fill="none" stroke={INK} strokeOpacity="0.5" strokeWidth="4" />
    <rect x="44" y="22" width="36" height="20" rx="2" fill="var(--brand-color-primary)" />
    <circle cx="48" cy="54" r="3.2" fill={INK} fillOpacity="0.5" />
    <circle cx="62" cy="54" r="3.2" fill={INK} fillOpacity="0.5" />
    <circle cx="76" cy="54" r="3.2" fill={INK} fillOpacity="0.5" />
    <path d="M44 70 H80 M44 78 H80" fill="none" stroke={INK} strokeOpacity="0.28" strokeWidth="4" />
    <rect x="84" y="44" width="4" height="24" fill={INK} fillOpacity="0.6" />
  </>,
  // 3 · Lắp đặt & bàn giao — van điều khiển trên tuyến ống đã đấu nối
  <>
    <rect x="8" y="65" width="38" height="16" fill={INK} fillOpacity="0.16" />
    <rect x="8" y="65" width="38" height="5" fill={INK} fillOpacity="0.34" />
    <rect x="78" y="65" width="38" height="16" fill={INK} fillOpacity="0.16" />
    <rect x="78" y="65" width="38" height="5" fill={INK} fillOpacity="0.34" />
    <rect x="46" y="61" width="8" height="24" fill={INK} fillOpacity="0.4" />
    <rect x="70" y="61" width="8" height="24" fill={INK} fillOpacity="0.4" />
    <path d="M54 57 L62 73 L54 89 Z M70 57 L62 73 L70 89 Z" fill={INK} fillOpacity="0.55" />
    <rect x="59" y="37" width="6" height="20" fill={INK} fillOpacity="0.45" />
    <rect x="46" y="17" width="32" height="20" rx="3" fill="var(--brand-color-primary)" />
  </>,
];

export async function HowItWorks() {
  const t = await getDictionary();

  return (
    <section id="process" className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker={t.process.kicker}
          title={t.process.title}
          lead={t.process.lead}
        />
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {t.process.items.map((step, index) => (
            <div key={step.title} className="flex flex-col gap-5">
              {/*
                Đệm theo % chứ không phải 24px cố định: khung co giãn theo
                bề rộng cột, nên đệm cố định sẽ ăn mất tỉ lệ của hình khi
                khung nhỏ lại (lưới 3 cột ở tablet) hoặc khi trình duyệt zoom.
                7% của 342px = 24px — đúng bằng đệm thiết kế ở khổ chuẩn.
              */}
              <div className="aspect-[124/108] rounded-md border border-line bg-layout p-[7%]">
                <svg
                  viewBox="0 0 124 108"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  {STEP_VISUALS[index]}
                </svg>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-3">
                  {/*
                    `min-h`/`min-w` chứ không phải `h`/`w`: ở cỡ chữ phóng
                    to, chữ số to hơn vòng tròn 26px và tràn ra ngoài. Cho
                    phép hộp lớn lên thì huy hiệu chuyển thành viên thuốc
                    thay vì cắt chữ — ở khổ chuẩn nó vẫn là hình tròn 26px.
                  */}
                  <span className="inline-flex min-h-[26px] min-w-[26px] items-center justify-center rounded-full bg-primary px-1.5 py-0.5 text-sm font-semibold leading-none text-on-primary">
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
