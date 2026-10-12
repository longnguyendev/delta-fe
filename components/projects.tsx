import Link from "next/link";
import { unstable_rethrow } from "next/navigation";
import { lang } from "next/root-params";
import type { Project } from "@/lib/data/projects";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLatestProjects } from "@/lib/server/projects";
import { ProjectCard } from "./project-card";
import { Container, SectionHead } from "./ui";

/** Ba dự án mới nhất — vừa đúng một hàng của lưới 3 cột. */
const HOME_LIMIT = 3;

/**
 * Khối dự án ở trang chủ — cùng nguồn Strapi với trang `/projects`, chỉ lấy một
 * hàng đầu. Thẻ dùng lại `ProjectCard` nên ảnh, nhãn hạng mục và dòng mô tả hiển
 * thị y hệt trang danh sách; ở đây không còn dữ liệu dự án viết cứng trong
 * dictionary.
 */
export async function Projects() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  /**
   * Trang chủ là mặt tiền của site: Strapi trục trặc thì khối này mất phần thẻ dự
   * án chứ không kéo cả trang lỗi theo. Trang `/projects` thì ngược lại — toàn bộ
   * nội dung đến từ Strapi nên lỗi được ném thẳng ra đó.
   *
   * `unstable_rethrow` phải đứng đầu khối `catch`: `cache: "no-store"` làm Next
   * ném lỗi nội bộ để bỏ dựng tĩnh, và nuốt lỗi đó là tự tay biến trang chủ thành
   * HTML tĩnh — bản dựng ra sẽ không có thẻ dự án nào.
   */
  let projects: Project[] = [];

  try {
    projects = await getLatestProjects(locale, HOME_LIMIT);
  } catch (error) {
    unstable_rethrow(error);

    console.error("Không tải được dự án cho trang chủ", error);
  }

  return (
    <section id="projects" className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker={t.projects.kicker}
          title={t.projects.title}
          lead={t.projects.lead}
        />
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 min-[60rem]:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                href={`/${locale}/projects/${project.slug}`}
                linkLabel={t.projectsPage.card.viewDetail}
                updating={t.common.updating}
              />
            ))}
          </div>
        ) : null}
        <Link
          href={`/${locale}/projects`}
          className="mt-8 inline-flex min-h-11 items-center text-[15px] font-semibold text-link transition-colors duration-150 hover:text-link-hover"
        >
          {t.projects.viewAll}
        </Link>
      </Container>
    </section>
  );
}
