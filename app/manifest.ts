import type { MetadataRoute } from "next";

import { company } from "@/constants";

/**
 * Web app manifest — icon khi lưu trang ra màn hình chính.
 *
 * Hai điểm khác bản mặc định của Next:
 * - `start_url: "/"` chứ không phải `/vi`: `proxy.ts` đã đọc cookie ngôn ngữ và
 *   `Accept-Language` để đưa người dùng về đúng bản, ghim cứng `/vi` sẽ phá
 *   đường đó với khách đang dùng tiếng Anh.
 * - `theme_color` là nền trắng, KHÔNG phải màu lime: thanh tiêu đề của app chạy
 *   standalone vẽ chữ trắng mặc định, mà trắng trên lime chỉ đạt 2.50:1. Nền
 *   trắng giữ đúng tương phản và khớp `themeColor` khai ở layout.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.shortName,
    short_name: company.shortName,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
