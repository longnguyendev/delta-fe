import type { MetadataRoute } from "next";

import { getServices } from "@/lib/data/services";
import { locales } from "@/lib/i18n/config";
import { absoluteUrl, getAlternateLanguages } from "@/lib/server/page-meta";
import { getProjects } from "@/lib/server/projects";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

/** Một đường dẫn tĩnh (không phụ thuộc dữ liệu Strapi) kèm mức ưu tiên. */
type StaticPath = {
  pathname: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const STATIC_PATHS: StaticPath[] = [
  { pathname: "", changeFrequency: "monthly", priority: 1 },
  { pathname: "/services", changeFrequency: "monthly", priority: 0.9 },
  { pathname: "/projects", changeFrequency: "monthly", priority: 0.8 },
  ...getServices().map((service) => ({
    pathname: `/services/${service.slug}`,
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.7,
  })),
];

/**
 * Mỗi URL một entry, và mỗi entry mang đủ bộ `xhtml:link hreflang` (vi / en /
 * x-default) — đó là cách sitemap nói với Google rằng hai bản ngôn ngữ là bản
 * dịch của nhau chứ không phải nội dung trùng.
 *
 * Danh sách dự án đọc từ Strapi; Strapi chết thì bỏ qua phần động và vẫn phát
 * ra sitemap tĩnh, thay vì để cả file lỗi.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectPaths: StaticPath[] = [];

  try {
    const slugs = new Set<string>();

    for (const locale of locales) {
      for (const project of await getProjects(locale)) {
        slugs.add(project.slug);
      }
    }

    for (const slug of slugs) {
      projectPaths.push({
        pathname: `/projects/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  } catch {
    // Không có dự án nào trong sitemap lần này — phần còn lại vẫn hợp lệ.
  }

  return [...STATIC_PATHS, ...projectPaths].flatMap((entry) =>
    locales.map((locale) => ({
      url: absoluteUrl(locale, entry.pathname),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: { languages: getAlternateLanguages(entry.pathname) },
    })),
  );
}
