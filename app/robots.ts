import type { MetadataRoute } from "next";

import { BASE_URL } from "@/constants";

/**
 * Toàn bộ site được phép thu thập — không có khu vực riêng tư nào. Trang 404
 * tự chặn bằng `robots: { index: false }` trong metadata, không cần liệt kê ở đây.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
