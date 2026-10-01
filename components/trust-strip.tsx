import { Container } from "./ui";

const SECTORS = [
  "Năng lượng",
  "Sản xuất",
  "Thực phẩm & Đồ uống",
  "Hóa chất",
  "Kho vận & Logistics",
];

/** Quiet proof strip hugging the hero — sectors, not fabricated brands. */
export function TrustStrip() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <p className="text-center text-[13px] uppercase tracking-[0.16em] text-text-quaternary">
          Được tin tưởng bởi 40+ đối tác chiến lược
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {SECTORS.map((sector) => (
            <span
              key={sector}
              className="font-head text-lg font-bold tracking-[0.02em] text-text-quaternary"
            >
              {sector}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
