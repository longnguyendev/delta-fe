import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

/**
 * Card dự án — dùng chung cho lưới danh sách và khối "dự án liên quan".
 * Ảnh phủ kín khung (object-cover) vì thumbnail thật là ảnh chụp công trình với
 * tỉ lệ bất kỳ; khung cố định giữ cho lưới không so le.
 *
 * `updating` là chuỗi thay thế khi trường tương ứng chưa có dữ liệu bên Strapi.
 */

/**
 * `sizes` mặc định ứng với lưới 3 cột ở trang danh sách dự án. Không có nó thì
 * trình duyệt lấy `100vw` và tải bản 1920px cho một card ~363px — nặng gấp mười
 * lần mức cần thiết. Khối "dự án liên quan" xếp 2 cột nên truyền giá trị riêng.
 *
 * Mốc 1180px là lúc `Container` chạm `max-w-[1180px]`; từ đó bề rộng card cố
 * định (1132px nội dung trừ gap 22px, chia 3 hoặc 2) chứ không tăng theo vw nữa.
 */
const SIZES_THREE_UP =
  "(min-width: 1180px) 363px, (min-width: 960px) 34vw, (min-width: 768px) 47vw, 100vw";
export const SIZES_TWO_UP =
  "(min-width: 1180px) 555px, (min-width: 768px) 50vw, 100vw";

export function ProjectCard({
  project,
  href,
  linkLabel,
  updating,
  sizes = SIZES_THREE_UP,
}: {
  project: Project;
  href: string;
  linkLabel: string;
  updating: string;
  sizes?: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-line bg-container transition-colors duration-150 hover:border-text-secondary">
      <div className="aspect-[300/190] overflow-hidden border-b border-line bg-surface">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes={sizes}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[300ms] ease-brand group-hover:scale-105"
          />
        ) : (
          <p className="flex h-full w-full items-center justify-center text-[13px] text-text-secondary">
            {updating}
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col p-[22px]">
        <span className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
          <span
            aria-hidden="true"
            className="h-[7px] w-[7px] shrink-0 bg-accent-2"
          />
          {project.tag ?? updating}
        </span>
        <h3 className="mt-2.5 text-[16.5px]">{project.title}</h3>
        <p className="mt-2.5 text-[14px] text-text-secondary">
          {project.description ?? updating}
        </p>
        <Link
          href={href}
          className="group/link mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-[18px] text-[13.5px] font-semibold text-fg underline-offset-[3px] hover:underline"
        >
          {linkLabel}
          <span
            aria-hidden="true"
            className="text-accent-2 transition-transform duration-150 ease-brand group-hover/link:translate-x-[3px]"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
