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
  // 1 · Tiếp nhận & báo giá — bản vẽ kỹ thuật có đường kích thước
  <>
    <rect x="28" y="16" width="68" height="76" fill={INK} fillOpacity="0.08" />
    <rect
      x="28"
      y="16"
      width="68"
      height="76"
      fill="none"
      stroke={INK}
      strokeOpacity="0.5"
      strokeWidth="4"
    />
    <rect
      x="34"
      y="22"
      width="56"
      height="50"
      fill="none"
      stroke={INK}
      strokeOpacity="0.15"
      strokeWidth="3"
    />
    <rect x="42" y="40" width="40" height="9" fill={INK} fillOpacity="0.3" />
    <rect x="42" y="49" width="40" height="4" fill={INK} fillOpacity="0.18" />
    {/* Đường kích thước + hai dấu giới hạn — một path, một điểm lime. */}
    <path
      d="M42 62 V70 M42 66 H82 M82 62 V70"
      fill="none"
      stroke="var(--brand-color-primary)"
      strokeWidth="4"
    />
    <rect x="28" y="76" width="68" height="16" fill={INK} fillOpacity="0.1" />
    <path
      d="M78 76 V92"
      fill="none"
      stroke={INK}
      strokeOpacity="0.2"
      strokeWidth="3"
    />
  </>,
  // 2 · Vật tư & gia công — thép tấm khoan lỗ, vạch cắt
  <>
    <rect x="24" y="30" width="76" height="56" fill={INK} fillOpacity="0.12" />
    <rect
      x="24"
      y="30"
      width="76"
      height="56"
      fill="none"
      stroke={INK}
      strokeOpacity="0.5"
      strokeWidth="4"
    />
    <circle
      cx="40"
      cy="48"
      r="3.5"
      fill="none"
      stroke={INK}
      strokeOpacity="0.4"
      strokeWidth="3"
    />
    <circle
      cx="62"
      cy="48"
      r="3.5"
      fill="none"
      stroke={INK}
      strokeOpacity="0.4"
      strokeWidth="3"
    />
    <circle
      cx="84"
      cy="48"
      r="3.5"
      fill="none"
      stroke={INK}
      strokeOpacity="0.4"
      strokeWidth="3"
    />
    <path
      d="M30 34 L94 82"
      fill="none"
      stroke="var(--brand-color-primary)"
      strokeWidth="4"
      strokeDasharray="7 7"
    />
    <path
      d="M24 92 H100"
      fill="none"
      stroke={INK}
      strokeOpacity="0.18"
      strokeWidth="3"
    />
  </>,
  // 3 · Kiểm tra & bàn giao — mối hàn góc, tia lửa tại chân mối hàn
  <>
    <rect x="24" y="70" width="56" height="14" fill={INK} fillOpacity="0.55" />
    <rect x="60" y="40" width="14" height="44" fill={INK} fillOpacity="0.55" />
    <path d="M60 84 H74 L60 70 Z" fill={INK} fillOpacity="0.8" />
    <path
      d="M62 70 L60 84"
      fill="none"
      stroke={INK}
      strokeOpacity="0.5"
      strokeWidth="3"
    />
    <path
      d="M64 64 L67 71 L74 74 L67 77 L64 84 L61 77 L54 74 L61 71 Z"
      fill="var(--brand-color-primary)"
    />
    <path
      d="M20 92 H104"
      fill="none"
      stroke={INK}
      strokeOpacity="0.18"
      strokeWidth="3"
    />
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {t.process.items.map((step, index) => (
            <div key={step.title} className="flex flex-col gap-5">
              {/*
                Khung KHÔNG đặt `aspect-ratio`, và svg KHÔNG đặt
                `height="100%"`: hai thứ đó tạo vòng lặp chiều cao
                (chiều cao khung ← chiều cao svg ← 100% chiều cao khung).
                Chrome và WebKit chọn hai điểm dừng khác nhau — đo được
                khung 342×304 ở Chrome nhưng 342×348 ở WebKit, hình bị
                thu nhỏ và chừa hai dải trống. Để svg tự quyết định chiều
                cao theo tỉ lệ viewBox (`h-auto w-full`) thì mọi engine ra
                cùng một kết quả, không còn gì để lặp.

                Đệm vẫn theo % chứ không phải 24px cố định: khung co giãn
                theo bề rộng cột, nên đệm cố định sẽ ăn mất tỉ lệ của hình
                khi lưới chuyển 3 cột ở tablet hoặc khi trình duyệt zoom.
                7% của 342px = 24px — đúng bằng đệm thiết kế ở khổ chuẩn.
              */}
              <div className="rounded-md border border-line bg-layout p-[7%]">
                <svg
                  viewBox="0 0 124 108"
                  className="block h-auto w-full"
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
