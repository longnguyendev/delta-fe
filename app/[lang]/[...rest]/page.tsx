import { notFound } from "next/navigation";

/**
 * Bắt mọi đường dẫn không khớp route nào bên trong một ngôn ngữ hợp lệ.
 *
 * Vì sao cần file này: `not-found.tsx` chỉ chạy khi có ai đó gọi `notFound()`.
 * Với URL không khớp route nào cả, Next tự dựng trang 404 mặc định — và ở dự án
 * này layout gốc nằm ở `app/[lang]/layout.tsx` (segment động cấp cao nhất), nên
 * Next không ghép được trang 404 đó vào layout nào; kết quả là 404 tiếng Anh
 * trơ trọi, không header, không footer.
 *
 * Cách chữa: cho URL lạ khớp vào một catch-all nằm *trong* `[lang]`. Lúc đó
 * `notFound()` được gọi từ chính segment `[lang]`, nên `[lang]/not-found.tsx`
 * tiếp nhận — bản dịch đúng ngôn ngữ, đủ header/footer, và vẫn là HTTP 404.
 *
 * Mọi request đều đã đi qua `proxy.ts` trước đó, và proxy luôn chèn tiền tố
 * ngôn ngữ, nên nhánh này phủ hết các URL sai. (URL có dấu chấm do matcher của
 * proxy bỏ qua sẽ rơi về 404 mặc định của Next — vẫn 404, vẫn `noindex`.)
 *
 * Cố ý không có `generateStaticParams`: không có đường dẫn cụ thể nào để dựng
 * trước, và trả về `[]` sẽ khiến Next coi segment này là "dựng khi có request".
 */
export default function CatchAllPage() {
  notFound();
}
