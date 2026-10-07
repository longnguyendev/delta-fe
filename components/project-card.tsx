import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

/**
 * Card dự án — dùng chung cho lưới danh sách và khối "dự án liên quan".
 * Ảnh giữ nguyên khung (object-contain) trên nền `surface`, đúng như thiết kế:
 * các minh họa SVG không bị cắt khi tỉ lệ khác 300/190.
 */
export function ProjectCard({
  project,
  href,
  linkLabel,
}: {
  project: Project;
  href: string;
  linkLabel: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-line bg-container transition-colors duration-150 hover:border-text-secondary">
      <div className="aspect-[300/190] overflow-hidden border-b border-line bg-surface">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-[300ms] ease-brand group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-[22px]">
        <span className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
          <span aria-hidden="true" className="h-[7px] w-[7px] shrink-0 bg-accent-2" />
          {project.tag}
        </span>
        <h3 className="mt-2.5 text-[16.5px]">{project.title}</h3>
        <p className="mt-2.5 text-[14px] text-text-secondary">
          {project.description}
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
