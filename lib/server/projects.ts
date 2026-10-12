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
  ProjectCategoriesDocument,
  type ProjectCategoriesQuery,
  ProjectsCountDocument,
  type ProjectsCountQuery,
  ProjectsDetailDocument,
  type ProjectsDetailQuery,
  type ProjectsDetailQueryVariables,
} from "@/generates";
import type {
  Project,
  ProjectCategoryRef,
  ProjectImage,
} from "@/lib/data/projects";
import { getFileUrl } from "@/lib/client/getImageUrl";
import { strapiRequest } from "./strapi";

/** Một bản ghi dự án như Strapi trả về — mảng của Strapi có thể chứa `null`. */
type ProjectEntry = NonNullable<ProjectsDetailQuery["projects"][number]>;

/** Bản dịch có cùng tập trường với bản gốc, trừ chính `localizations`. */
type ProjectNode = Omit<ProjectEntry, "localizations">;

/** Một bản ghi hạng mục, kèm `localizations` để chọn bản dịch. */
type CategoryEntry = NonNullable<
  ProjectCategoriesQuery["projectCategories"][number]
>;

/** Hạng mục sau khi bỏ `localizations` — dạng dùng để hiển thị và lọc. */
type CategoryNode = Pick<CategoryEntry, "value" | "slug" | "locale">;

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

/** Cùng cách với `localize`, cho hạng mục. */
function localizeCategory(entry: CategoryEntry, locale: string): CategoryNode {
  return entry.localizations.find((item) => item?.locale === locale) ?? entry;
}

/**
 * Hạng mục hiển thị: `null` khi dự án chưa gán hạng mục, hoặc hạng mục chưa có
 * tên. `slug` để riêng và cũng có thể `null` — xem `ProjectCategoryRef`.
 */
function toCategory(
  category: { value?: string | null; slug?: string | null } | null | undefined,
): ProjectCategoryRef | null {
  const value = text(category?.value);

  return value ? { value, slug: text(category?.slug) } : null;
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
      category: toCategory(node.project_category),
      location,
      sector,
      status: text(node.project_status?.value),
      handover: formatDate(node.delivery_date),
    },
    content: text(node.content),
  };
}

/**
 * Các bản ghi dự án theo ngôn ngữ mặc định, mới nhất trước.
 *
 * Lọc theo `project_category.slug` chứ không theo `value`: slug là khoá ổn định,
 * còn tên hạng mục sửa lúc nào cũng được. Việc lọc do Strapi làm nên trang chỉ
 * tải về đúng hạng mục đang xem.
 */
async function fetchEntries(
  categorySlug?: string | null,
  pageSize = PAGE_SIZE,
): Promise<ProjectEntry[]> {
  const entries: ProjectEntry[] = [];
  const filters: ProjectsDetailQueryVariables["filters"] = categorySlug
    ? { project_category: { slug: { eq: categorySlug } } }
    : undefined;

  for (let page = 1; ; page += 1) {
    const data = await strapiRequest<
      ProjectsDetailQuery,
      ProjectsDetailQueryVariables
    >(ProjectsDetailDocument, {
      filters,
      sort: ["createdAt:desc"],
      pagination: { page, pageSize },
    });

    entries.push(
      ...data.projects.filter((entry): entry is ProjectEntry => entry !== null),
    );

    if (data.projects.length < pageSize) return entries;
  }
}

/**
 * Dự án đã publish, mới nhất trước. `categorySlug` lọc theo hạng mục; bỏ trống
 * thì lấy tất cả.
 */
export async function getProjects(
  locale: string,
  categorySlug?: string | null,
): Promise<Project[]> {
  const entries = await fetchEntries(categorySlug);

  return entries.map((entry) => toProject(localize(entry, locale)));
}

/**
 * Hạng mục dùng cho dãy chip lọc, sắp theo tên hiển thị.
 *
 * Bỏ những hạng mục chưa đặt `slug`: không có slug thì không lọc được, dựng chip
 * cho chúng chỉ tạo ra nút dẫn tới danh sách rỗng.
 */
export async function getProjectCategories(
  locale: string,
): Promise<ProjectCategoryRef[]> {
  const data = await strapiRequest<ProjectCategoriesQuery>(
    ProjectCategoriesDocument,
  );

  return data.projectCategories
    .filter((entry): entry is CategoryEntry => entry !== null)
    .map((entry) => toCategory(localizeCategory(entry, locale)))
    .filter((category): category is ProjectCategoryRef => category?.slug != null);
}

/** Tổng số dự án, không kể đang lọc — cho dòng "N trên M dự án". */
export async function getProjectsTotal(): Promise<number> {
  const data = await strapiRequest<ProjectsCountQuery>(ProjectsCountDocument);

  return data.projects_connection?.pageInfo.total ?? 0;
}

/**
 * Dự án mới nhất của toàn bộ danh mục — nội dung cho khối "Dự án tiêu biểu".
 *
 * Hỏi riêng thay vì lấy `projects[0]` ở trang: khi khách bấm chip hạng mục,
 * `getProjects` chỉ còn trả về đúng hạng mục đó, nên phần tử đầu sẽ đổi theo chip
 * và tiêu đề "Dự án tiêu biểu" thành sai nghĩa. `pageSize: 1` nên đây là truy vấn
 * rẻ nhất trang.
 */
export async function getFeaturedProject(
  locale: string,
): Promise<Project | null> {
  const [entry] = await fetchEntries(null, 1);

  return entry ? toProject(localize(entry, locale)) : null;
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
 * Hai dự án cùng hạng mục hay không — so bằng `slug` khi cả hai đều có, vì đó
 * mới là định danh thật; `value` chỉ là phương án dự phòng cho hạng mục chưa
 * đặt slug, và chỉ dùng khi cả hai bên cùng thiếu.
 */
function sameCategory(
  a: ProjectCategoryRef | null,
  b: ProjectCategoryRef | null,
): boolean {
  if (!a || !b) return false;
  if (a.slug !== null && b.slug !== null) return a.slug === b.slug;

  return a.value === b.value;
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

  const byCategory = others.filter((item) =>
    sameCategory(item.meta.category, project.meta.category),
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
