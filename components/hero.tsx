import Image from "next/image";
import { ButtonLink, Container } from "./ui";

const STATS = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "150+", label: "Dự án hoàn thành" },
  { value: "40+", label: "Đối tác chiến lược" },
];

export function Hero() {
  return (
    <section className="pt-[clamp(56px,9vw,108px)] pb-16 md:pb-20">
      <Container className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <div>
          <span className="inline-flex h-8 items-center rounded-sm border border-primary-border bg-primary-bg px-3 text-sm font-semibold leading-none text-accent-accessible">
            Giải pháp kỹ thuật công nghiệp
          </span>
          <h1 className="mt-6 max-w-[18ch] text-[clamp(32px,4.6vw,50px)] leading-[1.12] tracking-[-0.01em]">
            Đối tác kỹ thuật cho{" "}
            <span className="text-accent-2">vận hành công nghiệp bền vững</span>
          </h1>
          <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-text-secondary">
            Chúng tôi cung cấp thiết bị chính hãng, giải pháp kỹ thuật và dịch
            vụ hiện trường cho nhà máy, công trình công nghiệp — từ tư vấn giải
            pháp, cung cấp thiết bị đến lắp đặt và bảo trì vận hành.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#lien-he" variant="primary" size="lg">
              Nhận báo giá
            </ButtonLink>
            <ButtonLink href="#du-an" variant="secondary" size="lg">
              Xem hồ sơ năng lực
            </ButtonLink>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-t border-line pt-3">
                <dt className="font-head text-[26px] font-extrabold leading-none text-accent-2 md:text-[28px]">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-[13px] text-text-secondary">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="overflow-hidden rounded-md border border-line bg-surface">
          <Image
            src="/imagery/hero-blueprint-band.svg"
            alt="Sơ đồ hệ thống kỹ thuật trên nền lưới bản vẽ 40px"
            width={1280}
            height={400}
            priority
            className="h-auto w-full"
          />
        </figure>
      </Container>
    </section>
  );
}
