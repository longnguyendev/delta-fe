import Image from "next/image";
import Link from "next/link";
import { Container, Kicker, SectionHead } from "./ui";

const SERVICES = [
  {
    kicker: "Dịch vụ 01",
    title: "Cung cấp thiết bị công nghiệp chính hãng",
    body: "Thiết bị có nguồn gốc rõ ràng, kèm chứng từ và bảo hành theo quy định nhà sản xuất — máy bơm, van điều khiển, thiết bị đo lường và phụ kiện hệ thống.",
    img: "/imagery/project-pump-pipeline.svg",
    alt: "Minh họa cụm bơm và đường ống công nghiệp",
    width: 300,
    height: 190,
  },
  {
    kicker: "Dịch vụ 02",
    title: "Giải pháp kỹ thuật theo yêu cầu",
    body: "Khảo sát hiện trạng, phân tích yêu cầu vận hành và đề xuất giải pháp kỹ thuật phù hợp với từng công trình công nghiệp.",
    img: "/imagery/hero-system-diagram.svg",
    alt: "Sơ đồ hệ thống kỹ thuật công nghiệp",
    width: 480,
    height: 400,
  },
  {
    kicker: "Dịch vụ 03",
    title: "Lắp đặt & nâng cấp hệ thống",
    body: "Thi công lắp đặt, đấu nối và nâng cấp hệ thống điện, đường ống và thiết bị — có kiểm tra, chạy thử trước khi bàn giao.",
    img: "/imagery/project-electrical-upgrade.svg",
    alt: "Minh họa nâng cấp hệ thống điện điều khiển",
    width: 300,
    height: 190,
  },
  {
    kicker: "Dịch vụ 04",
    title: "Bảo trì & vận hành định kỳ",
    body: "Lịch bảo trì theo khuyến nghị nhà sản xuất và điều kiện vận hành thực tế, giúp giảm thiểu thời gian ngừng máy và kéo dài tuổi thọ thiết bị.",
    img: "/imagery/project-maintenance-rig.svg",
    alt: "Minh họa bảo trì định kỳ giàn máy",
    width: 300,
    height: 190,
  },
];

export function Services() {
  return (
    <section
      id="dich-vu"
      className="border-y border-line bg-container py-14 md:py-[88px]"
    >
      <Container>
        <SectionHead
          kicker="Dịch vụ"
          title="Bốn mảng dịch vụ kỹ thuật cốt lõi"
          lead="Mỗi mảng dịch vụ đều có quy trình riêng — và đều quy về một mục tiêu: vận hành liên tục."
        />
        <div className="flex flex-col gap-12 md:gap-24">
          {SERVICES.map((service, index) => {
            const visual = (
              <figure className="flex items-center justify-center rounded-md border border-line bg-surface p-8 md:p-10">
                <Image
                  src={service.img}
                  alt={service.alt}
                  width={service.width}
                  height={service.height}
                  className="h-auto w-full"
                />
              </figure>
            );
            return (
              <div
                key={service.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <Kicker>{service.kicker}</Kicker>
                      <h3 className="mt-2.5 text-[clamp(22px,2.6vw,30px)] tracking-[-0.015em]">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-[46ch] text-[17px] text-text-secondary">
                        {service.body}
                      </p>
                      <Link
                        href="#lien-he"
                        className="mt-6 inline-flex text-[15px] font-semibold text-link transition-colors duration-150 hover:text-link-hover"
                      >
                        Đọc thêm →
                      </Link>
                    </div>
                    {visual}
                  </>
                ) : (
                  <>
                    <div className="order-first md:order-none">{visual}</div>
                    <div>
                      <Kicker>{service.kicker}</Kicker>
                      <h3 className="mt-2.5 text-[clamp(22px,2.6vw,30px)] tracking-[-0.015em]">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-[46ch] text-[17px] text-text-secondary">
                        {service.body}
                      </p>
                      <Link
                        href="#lien-he"
                        className="mt-6 inline-flex text-[15px] font-semibold text-link transition-colors duration-150 hover:text-link-hover"
                      >
                        Đọc thêm →
                      </Link>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
