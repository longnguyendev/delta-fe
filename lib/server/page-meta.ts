import type { Metadata } from "next";

import { BASE_URL, company } from "@/constants";
import { defaultLocale, locales } from "@/lib/i18n/config";

/**
 * Phần metadata phụ thuộc đường dẫn: URL tuyệt đối, canonical, hreflang và khối
 * Open Graph. Gom một chỗ vì cả ba đều dựng từ cùng cặp (ngôn ngữ, đường dẫn) —
 * tách ra thì sớm muộn cũng có trang lệch một trong hai.
 */

/**
 * URL tuyệt đối của một đường dẫn trong một ngôn ngữ.
 *
 * Structured data lẫn canonical đều yêu cầu URL đầy đủ, không nhận đường dẫn
 * tương đối như trên giao diện.
 */
export const absoluteUrl = (locale: string, pathname = "") =>
  `${BASE_URL}/${locale}${pathname}`;

/**
 * Bản đồ hreflang cho một đường dẫn — dùng chung cho `alternates.languages` của
 * metadata và `alternates.languages` của từng entry trong sitemap.
 *
 * `x-default` trỏ về bản ngôn ngữ mặc định: thẻ này dành cho người dùng có ngôn
 * ngữ không nằm trong `locales`, thiếu nó thì Google tự chọn đại một bản.
 */
export const getAlternateLanguages = (
  pathname = "",
): Record<string, string> => ({
  ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(l, pathname)])),
  "x-default": absoluteUrl(defaultLocale, pathname),
});

/**
 * Khối Open Graph nền, chưa có `url`.
 *
 * Layout dùng bản này cho những trang không tự khai Open Graph (trang 404).
 */
export const openGraphBase = (
  locale: string,
): NonNullable<Metadata["openGraph"]> => ({
  type: "website",
  siteName: company.shortName,
  locale: locale === "en" ? "en_US" : "vi_VN",
});

/**
 * Canonical + hreflang + Open Graph của một trang.
 *
 * `pathname` là phần sau mã ngôn ngữ: `""` cho trang chủ, `"/services"` cho
 * trang dịch vụ…
 *
 * Phải gọi ở TỪNG trang: cả `alternates` lẫn `openGraph` đều được **thay thế**
 * (không trộn với) giá trị của layout, nên trang nào quên là trang đó mất
 * canonical — và mất luôn `siteName`/`locale`/`type` nếu chỉ khai `url` suông.
 */
export const getPageMeta = (locale: string, pathname = ""): Metadata => ({
  alternates: {
    canonical: absoluteUrl(locale, pathname),
    languages: getAlternateLanguages(pathname),
  },
  openGraph: {
    ...openGraphBase(locale),
    url: absoluteUrl(locale, pathname),
  },
});
