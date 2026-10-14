/**
 * Thẻ script JSON-LD.
 *
 * Theo hướng dẫn của Next: render một thẻ `<script>` thật với
 * `dangerouslySetInnerHTML` (để làm children thì React escape mất nội dung), và
 * escape ký tự mở thẻ trong payload (`<` → `<`) để chuỗi dữ liệu không thể
 * đóng thẻ sớm rồi chèn markup lạ vào trang.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
