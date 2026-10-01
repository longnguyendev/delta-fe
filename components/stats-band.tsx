import { Container } from "./ui";

const STATS = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "150+", label: "Dự án hoàn thành" },
  { value: "40+", label: "Đối tác chiến lược" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
];

/** Proof band — lime fill carries ink text, never white (CLAUDE.md §4). */
export function StatsBand() {
  return (
    <section className="bg-primary py-12 md:py-16">
      <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-head text-[clamp(30px,3.6vw,46px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-on-primary">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-on-primary/80">{stat.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}
