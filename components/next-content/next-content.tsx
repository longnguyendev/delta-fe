import { createElement, type ComponentProps, type ReactNode } from "react";
import parse, {
  domToReact,
  Element,
  type DOMNode,
  type HTMLReactParserOptions,
} from "html-react-parser";
import Image from "next/image";

import "./styles.css";

import { sanitizeRichText } from "@/helpers/sanitizeRichText";
import { getFileUrl } from "@/lib/client/getImageUrl";

/**
 * Nội dung CKEditor của dự án (trường `content` bên Strapi), render bằng
 * `html-react-parser` với lớp Tailwind gắn cho từng thẻ.
 *
 * HTML đi qua `sanitizeRichText` trước: nó bỏ toàn bộ `style` inline và class mà
 * CKEditor dán kèm, chỉ giữ thẻ ngữ nghĩa cùng `href`/`src` đã kiểm scheme. Nhờ
 * vậy lớp ở đây là nguồn duy nhất quyết định diện mạo, và không có attribute lạ
 * nào lọt tới DOM. Không dùng `dangerouslySetInnerHTML` ở bất kỳ đâu.
 *
 * `parse` chạy trong Server Component — không thêm "use client" cho file này.
 */

/**
 * Lớp cho từng thẻ còn lại sau khi làm sạch. Màu và cỡ chữ lấy đúng token của
 * hệ thống thiết kế; heading không đặt màu vì `@layer base` đã cho chúng `--fg`.
 */
const TAG_CLASS: Record<string, string | undefined> = {
  p: "",
  br: "",
  strong: "font-semibold text-fg",
  b: "font-semibold text-fg",
  em: "italic",
  i: "italic",
  u: "underline",
  s: "line-through",
  ul: "list-disc pl-5 [&>li+li]:mt-1.5",
  ol: "list-decimal pl-5 [&>li+li]:mt-1.5",
  li: "pl-1",
  h2: "font-head text-[clamp(22px,2.4vw,26px)] font-extrabold leading-[1.2]",
  h3: "font-head text-[19px] font-extrabold leading-[1.25]",
  h4: "font-head text-[17px] font-extrabold leading-[1.3]",
  blockquote: "border-l-2 border-line pl-4",
  a: "text-link underline underline-offset-[3px] transition-colors duration-150 ease-brand hover:text-link-active",
  code: "rounded-xs bg-surface px-1 py-px font-mono text-[0.9em] text-fg",
  pre: "overflow-x-auto rounded-md border border-line bg-surface p-4 font-mono text-[13.5px] leading-[1.55]",
  hr: "border-0 border-t border-line",
  // `figure` bọc ảnh và bọc bảng; phần căn lề và cuộn ngang nằm ở styles.css vì
  // chúng phụ thuộc class do CKEditor đặt.
  figure: "",
  figcaption: "mt-2 text-[13.5px] text-text-secondary",
  table: "w-full border-collapse text-left text-[14.5px]",
  thead: "",
  tbody: "",
  tr: "border-b border-line last:border-b-0",
  th: "border-b border-line py-2.5 pr-4 align-top font-head text-[12.5px] font-bold uppercase tracking-[0.04em] text-fg",
  td: "border-b border-line py-2.5 pr-4 align-top",
};

/**
 * Thẻ trơ còn lại trong `TAG_CLASS`. Ảnh và ô tick có nhánh riêng ở dưới.
 *
 * Phải tách ra vì React từ chối `children` trên thẻ self-closing — kể cả một
 * mảng rỗng. `<br>` lại là thứ CKEditor sinh ra liên tục, nên bỏ qua chỗ này là
 * cả trang chi tiết đổ lỗi 500 ngay khi nội dung có một lần xuống dòng.
 */
const VOID_TAGS = new Set(["br", "hr"]);

/** Ảnh trong nội dung — `next/image` khi có đủ width/height, còn lại thẻ thường. */
function ContentImage({ attribs }: { attribs: Record<string, string> }) {
  const { src } = attribs;

  if (!src) return null;

  // Strapi có thể trả đường dẫn nội bộ (`/uploads/…`) — ghép với gốc API.
  const resolved = src.startsWith("/") ? getFileUrl(src) : src;
  const alt = attribs.alt ?? "";
  const width = Number(attribs.width);
  const height = Number(attribs.height);
  const className = "h-auto max-w-full rounded-md border border-line";

  if (width > 0 && height > 0) {
    return (
      <Image
        src={resolved}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  // Ảnh dán từ nơi khác thường mất width/height, mà `next/image` bắt buộc phải
  // có — đành dùng thẻ thường, vẫn lazy-load và không tràn khổ.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolved}
      alt={alt}
      loading="lazy"
      className={`w-full ${className}`}
    />
  );
}

const options: HTMLReactParserOptions = {
  replace(domNode: DOMNode) {
    if (!(domNode instanceof Element)) return undefined;

    const { name, attribs, children } = domNode;

    if (name === "img") return <ContentImage attribs={attribs} />;

    // Ô tick của `todoList`. Sanitizer chỉ cho đúng
    // `<input type="checkbox" disabled [checked]>`, nhưng `disabled` và `checked`
    // là attribute trơ nên `attribs` trả chuỗi rỗng — phải đổi sang boolean, nếu
    // không React coi `""` là false và ô tick thành ra sáng được.
    if (name === "input") {
      return (
        <input type="checkbox" disabled defaultChecked={"checked" in attribs} />
      );
    }

    /*
     * CKEditor cho phép chọn "Heading 1", mà trang chi tiết đã có `<h1>` ở hero
     * — thêm một `<h1>` nữa trong nội dung là hai tiêu đề chính trên cùng một
     * trang. Hạ xuống `h2` (đúng cấp tiếp theo) và dùng luôn lớp của `h2`.
     */
    const tagName = name === "h1" ? "h2" : name;
    const className = TAG_CLASS[tagName];

    // Thẻ ngoài bảng để nguyên — `parse` tự dựng lại, không kèm lớp nào.
    if (className === undefined) return undefined;

    // Class mà sanitizer giữ lại (căn lề ảnh, bọc bảng, `todo-list`) ghép sau lớp
    // Tailwind. Phần diễn giải chúng nằm ở `styles.css`: chúng có trong DB nên
    // Tailwind không sinh utility cho chúng được.
    const classes = [className, attribs.class].filter(Boolean).join(" ");

    return createElement(
      tagName,
      {
        ...(name === "a" && attribs.href
          ? { href: attribs.href, rel: "noopener noreferrer" }
          : {}),
        // `colspan`/`rowspan` phải sang camelCase thì React mới hiểu.
        ...(name === "th" || name === "td"
          ? {
              colSpan: attribs.colspan ? Number(attribs.colspan) : undefined,
              rowSpan: attribs.rowspan ? Number(attribs.rowspan) : undefined,
            }
          : {}),
        ...(classes ? { className: classes } : {}),
      },
      // Thẻ trơ không được nhận `children` — kể cả mảng rỗng.
      VOID_TAGS.has(name)
        ? undefined
        : domToReact(children as DOMNode[], options),
    );
  },
};

type NextContentProps = Omit<ComponentProps<"div">, "children"> & {
  /** HTML thô từ trường `content`; `null`/rỗng thì hiện `fallback`. */
  htmlRaw: string | null | undefined;
  /** Hiện khi nội dung rỗng — thường là khối "đang cập nhật". */
  fallback?: ReactNode;
};

export function NextContent({
  htmlRaw,
  fallback = null,
  className = "",
  ...rest
}: NextContentProps) {
  const html = sanitizeRichText(htmlRaw);

  if (!html) return fallback;

  return (
    <div
      className={`next-content text-[16px] leading-[1.6] text-text-secondary [&>*+*]:mt-4 ${className}`}
      {...rest}
    >
      {parse(html, options)}
    </div>
  );
}
