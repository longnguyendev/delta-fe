import { join } from "node:path";
import { readFile } from "node:fs/promises";

/**
 * Font cho ảnh Open Graph sinh bằng `ImageResponse`.
 *
 * Hai vấn đề phải xử lý cùng lúc:
 *
 * 1. **Tiếng Việt.** Font mặc định của satori (Noto Sans latin) không có dấu
 *    tiếng Việt — tiêu đề sẽ ra ô vuông. Phải nạp font riêng.
 * 2. **Định dạng.** `ImageResponse` chỉ đọc được `ttf`/`otf`/`woff`, KHÔNG đọc
 *    `woff2`. Google Fonts trả `woff2` chia theo `unicode-range` cho trình duyệt
 *    hiện đại, nên phải giả User-Agent cũ (Chrome 27): bản trả về là một file
 *    `.woff` nguyên khối, đủ cả latin lẫn vietnamese.
 *
 * Không nhúng font vào bundle (giới hạn 500KB của `ImageResponse`) mà tải lúc
 * build — route ảnh OG được sinh tĩnh nên việc tải chỉ xảy ra một lần. Mọi lỗi
 * mạng đều bị nuốt và trả về mảng rỗng: ảnh vẫn ra với font hệ thống, chữ có
 * thể mất dấu nhưng build không vỡ.
 */

/** Chrome 27 — trình duyệt cuối cùng Google Fonts còn trả `.woff` nguyên khối. */
const LEGACY_UA =
  "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36";

export type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 500 | 700 | 800;
  style: "normal";
};

/** Ba mặt chữ dùng trong thẻ: tiêu đề, nhãn eyebrow, dòng chân. */
const FACES: { family: "Montserrat" | "Inter"; weight: 500 | 700 | 800 }[] = [
  { family: "Montserrat", weight: 800 },
  { family: "Montserrat", weight: 700 },
  { family: "Inter", weight: 500 },
];

async function loadFace(
  family: string,
  weight: number,
): Promise<OgFont | null> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
    { headers: { "User-Agent": LEGACY_UA } },
  ).then((response) => response.text());

  const url = css.match(/url\((https:\/\/[^)]+)\)/)?.[1];
  if (!url) return null;

  const data = await fetch(url).then((response) => response.arrayBuffer());

  return {
    name: family,
    data,
    weight: weight as OgFont["weight"],
    style: "normal",
  };
}

let fontsPromise: Promise<OgFont[]> | null = null;

/** Nạp một lần cho cả tiến trình — bốn route ảnh OG dùng chung module này. */
export function getOgFonts(): Promise<OgFont[]> {
  fontsPromise ??= Promise.all(
    FACES.map((face) => loadFace(face.family, face.weight).catch(() => null)),
  )
    .then((fonts) => fonts.filter((font): font is OgFont => font !== null))
    .catch(() => []);

  return fontsPromise;
}

let markPromise: Promise<string | null> | null = null;

/**
 * Logo mark nhúng thẳng vào ảnh dưới dạng data URI. Đọc từ `public/` nên chạy
 * được cả lúc build lẫn trong bundle standalone (ở đó `public/` được copy kèm).
 */
export function getOgMark(): Promise<string | null> {
  markPromise ??= readFile(
    join(process.cwd(), "public/logos/delta-energy-mark.svg"),
  )
    .then((svg) => `data:image/svg+xml;base64,${svg.toString("base64")}`)
    .catch(() => null);

  return markPromise;
}
