import { Container, SectionHead } from "./ui";

const PROBLEMS = [
  {
    title: "Ngừng máy ngoài kế hoạch",
    body: "Sự cố nhỏ không được xử lý kịp thời sẽ lan rộng thành ngừng máy ngoài kế hoạch, kéo theo thiệt hại sản lượng và trễ tiến độ giao hàng.",
  },
  {
    title: "Chi phí bảo trì khó dự toán",
    body: "Thiết bị thiếu lịch bảo trì định kỳ dẫn đến hỏng hóc đột xuất, chi phí sửa chữa phát sinh khó kiểm soát.",
  },
  {
    title: "Thiết bị không rõ nguồn gốc",
    body: "Thiết bị không chính hãng tiềm ẩn rủi ro an toàn, giảm tuổi thọ hệ thống và không có hỗ trợ kỹ thuật từ nhà sản xuất.",
  },
];

export function Problem() {
  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <SectionHead
          kicker="Vấn đề vận hành"
          title="Mỗi giờ ngừng máy đều có cái giá của nó"
          lead="Nghe quen không? Càng để lâu, những vấn đề này càng âm thầm bào mòn hiệu suất vận hành của nhà máy."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <article
              key={problem.title}
              className="rounded-md border border-line bg-container p-8"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-error"
                />
                <div>
                  <h3 className="text-[17px]">{problem.title}</h3>
                  <p className="mt-1 text-text-secondary">{problem.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
