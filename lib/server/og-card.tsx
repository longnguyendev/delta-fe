import { ImageResponse } from "next/og";

import { getOgFonts, getOgMark } from "./og-fonts";

/**
 * Thẻ Open Graph 1200×630 cho mọi trang — cùng một bố cục, chỉ đổi chữ.
 *
 * Ràng buộc của `ImageResponse` (satori):
 * - **Chỉ flexbox**, không có CSS grid, không có `gap` trên lưới.
 * - Phải khai `display: flex` ở mọi khối có nhiều con — mặc định của satori là
 *   `flex` nhưng khai tường minh để không phụ thuộc mặc định.
 * - Không hỗ trợ `repeating-linear-gradient`, nên lưới blueprint được vẽ bằng
 *   các div 1px tuyệt đối thay vì `background-image`.
 *
 * Luật design system: nền trắng, mực #1F2937, phụ #4B5563, đường kẻ #E5E7EB,
 * và đúng MỘT điểm lime #7CB342 — đoạn nhấn trong tiêu đề.
 */

export const OG_SIZE = { width: 1200, height: 630 } as const;

const INK = "#1F2937";
const MUTED = "#4B5563";
const LINE = "#E5E7EB";
const LIME = "#7CB342";

/** Lưới bản vẽ 40px — vẽ bằng div vì satori không có gradient lặp. */
const GRID_STEP = 40;
const GRID_ROWS = Array.from(
  { length: Math.floor((OG_SIZE.height - GRID_STEP) / GRID_STEP) },
  (_, i) => (i + 1) * GRID_STEP,
);
const GRID_COLS = Array.from(
  { length: Math.floor((OG_SIZE.width - GRID_STEP) / GRID_STEP) },
  (_, i) => (i + 1) * GRID_STEP,
);

/**
 * Một đoạn tiêu đề. `accent: true` tô lime — caller phải đảm bảo chỉ có ĐÚNG
 * MỘT đoạn như vậy trong cả thẻ.
 */
export type HeadingPart = { text: string; accent?: boolean };

export type OgCardProps = {
  eyebrow: string;
  heading: HeadingPart[];
  /**
   * Chữ ở góc phải dòng chân. Bắt buộc truyền vì nó theo ngôn ngữ của trang —
   * viết cứng ở đây thì thẻ tiếng Anh cũng đội dòng chữ tiếng Việt.
   */
  footerNote: string;
};

/**
 * Cắt tiêu đề tại đoạn cần tô lime. `accent` là chuỗi con của `title`; không
 * tìm thấy thì trả về tiêu đề nguyên mực — thà mất điểm nhấn còn hơn tô sai chỗ.
 */
export function splitHeading(title: string, accent: string): HeadingPart[] {
  const at = title.indexOf(accent);

  if (at < 0) return [{ text: title }];

  return [
    { text: title.slice(0, at) },
    { text: accent, accent: true },
    { text: title.slice(at + accent.length) },
  ].filter((part) => part.text.length > 0);
}

function Grid() {
  return (
    <>
      {GRID_ROWS.map((top) => (
        <div
          key={`r${top}`}
          style={{
            position: "absolute",
            left: 0,
            top,
            width: OG_SIZE.width,
            height: 1,
            background: LINE,
          }}
        />
      ))}
      {GRID_COLS.map((left) => (
        <div
          key={`c${left}`}
          style={{
            position: "absolute",
            left,
            top: 0,
            width: 1,
            height: OG_SIZE.height,
            background: LINE,
          }}
        />
      ))}
    </>
  );
}

export async function renderOgCard({
  eyebrow,
  heading,
  footerNote,
}: OgCardProps) {
  const [fonts, mark] = await Promise.all([getOgFonts(), getOgMark()]);

  /*
   * Tách tiêu đề thành từng TỪ rồi cho xuống dòng tự do. Nếu để cả đoạn nhấn
   * là một phần tử flex thì nó không ngắt được và tràn ngang khi tiêu đề dài;
   * tô màu theo từ cho kết quả nhìn y hệt nhưng xuống dòng đúng.
   */
  const words = heading.flatMap((part) =>
    part.text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, accent: part.accent === true })),
  );

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#FFFFFF",
        padding: "56px 72px 48px",
        fontFamily: "Inter",
        position: "relative",
      }}
    >
      <Grid />

      {/* Khối trên: mark + tên thương hiệu */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: 24,
          borderBottom: `1px solid ${LINE}`,
          position: "relative",
        }}
      >
        {/*
            Thẻ `<img>` thường, không phải `next/image`: đây là ảnh vẽ bởi
            satori bên trong `ImageResponse`, không đi qua bộ tối ưu ảnh của
            Next và không có `width`/`height` dạng số nguyên để truyền vào.
          */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {mark ? <img src={mark} width={32} height={32} alt="" /> : null}
        <div
          style={{
            display: "flex",
            marginLeft: mark ? 16 : 0,
            fontFamily: "Montserrat",
            fontWeight: 800,
            fontSize: 26,
            letterSpacing: "-0.01em",
            color: INK,
          }}
        >
          DELTA ENERGY
        </div>
      </div>

      {/* Khối giữa: eyebrow + tiêu đề */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "0.06em",
            color: MUTED,
            marginBottom: 20,
          }}
        >
          {eyebrow.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontFamily: "Montserrat",
            fontWeight: 800,
            fontSize: 58,
            lineHeight: 1.14,
            letterSpacing: "-0.015em",
          }}
        >
          {words.map((item, index) => (
            <div
              key={`${item.word}-${index}`}
              style={{
                display: "flex",
                color: item.accent ? LIME : INK,
                marginRight: 18,
              }}
            >
              {item.word}
            </div>
          ))}
        </div>
      </div>

      {/* Khối dưới: chân thẻ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${LINE}`,
          paddingTop: 20,
          position: "relative",
          fontSize: 22,
          fontWeight: 500,
          color: MUTED,
        }}
      >
        <div style={{ display: "flex" }}>delta-enc.com.vn</div>
        <div style={{ display: "flex" }}>{footerNote}</div>
      </div>
    </div>,
    { ...OG_SIZE, fonts },
  );
}
