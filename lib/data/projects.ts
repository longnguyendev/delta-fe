/**
 * Kiểu dữ liệu hiển thị của dự án.
 *
 * Chỉ còn phần định nghĩa kiểu — nội dung thật lấy từ Strapi qua
 * `lib/server/projects.ts`. Tách riêng khỏi tầng fetch để client component
 * (bộ lọc, card) import được mà không kéo theo mã server.
 *
 * Trường `null` là trường chưa có dữ liệu bên Strapi. Nơi hiển thị thay bằng
 * `common.updating` trong dictionary — không tự bịa giá trị mặc định.
 */

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Hạng mục của dự án — quan hệ `project_category`.
 *
 * Tách `slug` khỏi `value` vì hai thứ phục vụ hai việc khác nhau: `value` là
 * chữ hiển thị và đổi được bất cứ lúc nào, còn `slug` là khoá dùng cho bộ lọc
 * và tham số `?q=` trên URL. Lọc theo `value` sẽ hỏng ngay khi quản trị viên sửa
 * tên hạng mục, và gộp nhầm hai hạng mục trùng tên.
 *
 * `slug` nullable đúng như Strapi khai: hạng mục chưa đặt slug vẫn có thật,
 * nhưng không dựng chip lọc cho nó được.
 */
export type ProjectCategoryRef = {
  value: string;
  slug: string | null;
};

/** Năm ô thông tin ở hero trang chi tiết. */
export type ProjectMeta = {
  /** Hạng mục — quan hệ `project_category`. */
  category: ProjectCategoryRef | null;
  location: string | null;
  sector: string | null;
  /** Trạng thái bàn giao — quan hệ `project_status`. */
  status: string | null;
  /** Ngày bàn giao, định dạng `dd/mm/yyyy`. */
  handover: string | null;
};

export type Project = {
  slug: string;
  title: string;
  description: string | null;
  /** Nhãn nhỏ trên tiêu đề — "Lĩnh vực — Địa điểm", `null` khi thiếu cả hai. */
  tag: string | null;
  /** Ảnh đại diện — `null` khi dự án chưa gắn thumbnail. */
  image: ProjectImage | null;
  meta: ProjectMeta;
  /**
   * HTML thô của trường `content` bên Strapi, `null` khi chưa có.
   *
   * Chưa làm sạch ở đây: `NextContent` gọi `sanitizeRichText` ngay trước khi
   * render, nên chỉ có một chỗ chịu trách nhiệm về an toàn của khối HTML này.
   */
  content: string | null;
};
