/**
 * Đọc dự án từ Strapi và chuyển sang kiểu hiển thị trong `lib/data/projects.ts`.
 *
 * Mọi trường văn bản đều đi qua `text()` để chuỗi rỗng trở thành `null`: Strapi
 * trả `""` cho ô đã tạo nhưng chưa nhập, và nơi hiển thị cần phân biệt "chưa có
 * dữ liệu" với "có dữ liệu".
 *
 * Riêng `content` giữ nguyên HTML thô — `NextContent` làm sạch lúc render.
 */

import {
  ProjectsDetailDocument,
  type ProjectsDetailQuery,
  type ProjectsDetailQueryVariables,
} from "@/generates";
import type { Project, ProjectImage } from "@/lib/data/projects";
import { getFileUrl } from "@/lib/client/getImageUrl";
import { strapiRequest } from "./strapi";

/** Một bản ghi dự án như Strapi trả về — mảng của Strapi có thể chứa `null`. */
type ProjectEntry = NonNullable<ProjectsDetailQuery["projects"][number]>;

/** Bản dịch có cùng tập trường với bản gốc, trừ chính `localizations`. */
type ProjectNode = Omit<ProjectEntry, "localizations">;

/** Strapi mặc định chỉ trả 25 bản ghi mỗi trang — xin hẳn 100 cho đỡ vòng. */
const PAGE_SIZE = 100;

/** Số dự án liên quan tối đa ở cuối trang chi tiết. */
const RELATED_LIMIT = 2;

/** Chuỗi đã trim, `null` nếu rỗng. */
function text(value?: string | null): string | null {
  const trimmed = value?.trim();

  return trimmed ? trimmed : null;
}

/** `2026-10-05` → `05/10/2026`; `null` nếu thiếu hoặc sai định dạng. */
function formatDate(value?: string | null): string | null {
  const [year, month, day] = value?.slice(0, 10).split("-") ?? [];

  if (!year || !month || !day) return null;

  return `${day}/${month}/${year}`;
}

/** Ảnh đại diện — `null` khi dự án chưa gắn thumbnail. */
function toImage(
  file: ProjectNode["thumbnail"] | null | undefined,
  fallbackAlt: string,
): ProjectImage | null {
  if (!file?.url) return null;

  return {
    src: getFileUrl(file.url),
    width: file.width ?? 1200,
    height: file.height ?? 675,
    alt: text(file.alternativeText) ?? fallbackAlt,
  };
}

/**
 * Bản ghi theo ngôn ngữ đang xem, rơi về bản gốc khi chưa có bản dịch.
 *
 * Truy vấn không kèm `locale` nên Strapi trả ngôn ngữ mặc định kèm
 * `localizations`. Nhờ vậy `/en` vẫn có nội dung thay vì trang trắng, và tự
 * chuyển sang bản dịch ngay khi quản trị viên thêm vào.
 */
function localize(entry: ProjectEntry, locale: string): ProjectNode {
  const translated = entry.localizations.find(
    (item) => item?.locale === locale,
  );

  return translated ?? entry;
}

function toProject(node: ProjectNode): Project {
  const title = node.title.trim();
  const sector = text(node.sector?.value);
  const location = text(node.location);

  return {
    slug: node.slug,
    title,
    description: text(node.description),
    tag: [sector, location].filter(Boolean).join(" — ") || null,
    image: toImage(node.thumbnail, title),
    meta: {
      category: text(node.project_category?.value),
      location,
      sector,
      status: text(node.project_status?.value),
      handover: formatDate(node.delivery_date),
    },
    content: text(node.content),
  };
}

/** Các bản ghi dự án theo ngôn ngữ mặc định, mới nhất trước. */
async function fetchEntries(): Promise<ProjectEntry[]> {
  const entries: ProjectEntry[] = [];

  for (let page = 1; ; page += 1) {
    const data = await strapiRequest<
      ProjectsDetailQuery,
      ProjectsDetailQueryVariables
    >(ProjectsDetailDocument, {
      sort: ["createdAt:desc"],
      pagination: { page, pageSize: PAGE_SIZE },
    });

    entries.push(
      ...data.projects.filter((entry): entry is ProjectEntry => entry !== null),
    );

    if (data.projects.length < PAGE_SIZE) return entries;
  }
}

/** Toàn bộ dự án đã publish, mới nhất trước. */
export async function getProjects(locale: string): Promise<Project[]> {
  const entries = await fetchEntries();

  return entries.map((entry) => toProject(localize(entry, locale)));
}

/** Một dự án theo slug, `null` nếu không tồn tại. */
export async function getProject(
  locale: string,
  slug: string,
): Promise<Project | null> {
  const data = await strapiRequest<
    ProjectsDetailQuery,
    ProjectsDetailQueryVariables
  >(ProjectsDetailDocument, {
    filters: { slug: { eq: slug } },
    pagination: { pageSize: 1 },
  });

  const [entry] = data.projects;

  return entry ? toProject(localize(entry, locale)) : null;
}

/**
 * Dự án liên quan: cùng hạng mục trước, rồi cùng lĩnh vực, sau đó là các dự án
 * còn lại. `all` đã sắp mới nhất trước nên phần "còn lại" tự nhiên là mới nhất.
 */
export function pickRelated(
  project: Project,
  all: Project[],
  limit = RELATED_LIMIT,
): Project[] {
  const others = all.filter((item) => item.slug !== project.slug);

  const byCategory = others.filter(
    (item) =>
      project.meta.category !== null &&
      item.meta.category === project.meta.category,
  );
  const bySector = others.filter(
    (item) =>
      project.meta.sector !== null && item.meta.sector === project.meta.sector,
  );

  const seen = new Set<string>();
  const related: Project[] = [];

  for (const item of [...byCategory, ...bySector, ...others]) {
    if (seen.has(item.slug)) continue;

    seen.add(item.slug);
    related.push(item);

    if (related.length === limit) break;
  }

  return related;
}
