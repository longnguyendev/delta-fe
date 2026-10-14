/**
 * Gốc URL tuyệt đối cho canonical, hreflang, sitemap và JSON-LD.
 *
 * Mặc định là domain thật để production luôn phát ra URL đúng kể cả khi biến
 * môi trường không được nạp. Dev đặt `NEXT_PUBLIC_URL=http://localhost:3000`
 * trong `.env` (không git-tracked) để canonical trỏ về máy cục bộ.
 */
export const BASE_URL =
  process.env.NEXT_PUBLIC_URL || "https://delta-enc.com.vn";
