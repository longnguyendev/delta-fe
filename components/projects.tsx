import Image from "next/image";
import Link from "next/link";
import { Container, SectionHead } from "./ui";

const PROJECTS = [
  {
    img: "/imagery/project-electrical-upgrade.svg",
    alt: "Minh họa dự án nâng cấp hệ thống điện điều khiển",
    width: 300,
    height: 190,
    tag: "Điện công nghiệp",
    title: "Nâng cấp hệ thống điện điều khiển",
    body: "Thay thế tủ điều khiển cũ, đấu nối và chạy thử toàn bộ hệ thống điện cho dây chuyền sản xuất.",
  },
  {
    img: "/imagery/project-pump-pipeline.svg",
    alt: "Minh họa dự án cung cấp cụm bơm và đường ống",
    width: 300,
    height: 190,
    tag: "Thiết bị công nghiệp",
    title: "Cung cấp cụm bơm & đường ống",
    body: "Cung cấp và lắp đặt cụm bơm cùng hệ thống đường ống cho nhà máy chế biến.",
  },
  {
    img: "/imagery/project-maintenance-rig.svg",
    alt: "Minh họa dự án bảo trì định kỳ giàn máy",
    width: 300,
    height: 190,
    tag: "Bảo trì vận hành",
    title: "Bảo trì định kỳ giàn máy",
    body: "Lập lịch và thực hiện bảo trì định kỳ giàn máy theo khuyến nghị của nhà sản xuất.",
  },
];

export function Projects() {
  return (
    <section id="du-an" className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker="Hồ sơ năng lực"
          title="Những dự án đã bàn giao trên thực tế"
          lead="Kết quả thực tế từ các công trình chúng tôi đã thực hiện — bằng con số, không bằng tính từ."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-md border border-line bg-container"
            >
              <div className="overflow-hidden border-b border-line">
                <Image
                  src={project.img}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  className="h-auto w-full transition-transform duration-[300ms] ease-brand group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-head text-[12px] font-bold uppercase tracking-[0.06em] text-accent-accessible">
                  {project.tag}
                </span>
                <h3 className="mt-2 text-[17px]">{project.title}</h3>
                <p className="mt-1 text-text-secondary">{project.body}</p>
                <Link
                  href="#lien-he"
                  className="mt-4 inline-flex text-[15px] font-semibold text-link transition-colors duration-150 hover:text-link-hover"
                >
                  Đọc thêm →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
