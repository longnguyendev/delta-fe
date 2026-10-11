/**
 * Chuẩn hoá HTML từ CKEditor trước khi `NextContent` render.
 *
 * Nội dung do quản trị viên Strapi soạn nhưng phần lớn được dán từ nơi khác nên
 * mang theo `style` inline (font, màu nền, cỡ chữ, `max-width`…) — đúng những
 * thứ sẽ phá vỡ hệ thống thiết kế. Hàm này giữ lại các thẻ ngữ nghĩa cùng vài
 * attribute đã kiểm, bỏ hết phần còn lại và escape phần chữ.
 *
 * Cách làm — quét tag, escape mọi đoạn text xen giữa — khiến output chỉ có thể
 * chứa thẻ nằm trong allowlist với đúng những attribute dựng ở đây, nên không
 * còn chỗ cho `on*` hay `javascript:`. Đây là lý do không cần tới một parser đầy
 * đủ.
 *
 * Phạm vi hỗ trợ bám theo toolbar của preset `defaultHtml`
 * (`@_sh/strapi-plugin-ckeditor`). Cố ý KHÔNG hỗ trợ, kèm lý do:
 *
 * · `mediaEmbed` — sinh `<iframe>`; nhúng khung của bên thứ ba vào trang là rủi
 *   ro không đánh đổi được.
 * · `htmlEmbed`, `SourceEditing` — HTML thô do người soạn gõ, chính là thứ hàm
 *   này tồn tại để lọc.
 * · `fontSize`, `fontFamily`, `fontColor`, `alignment`, `indent` — đều biểu diễn
 *   bằng `style` inline, mà thang chữ và lề đã do hệ thống thiết kế quy định.
 * · `highlight` (`.marker-*`, `.pen-*`) và `fontSize` dạng class (`.text-big`…)
 *   — đưa màu và cỡ chữ ngoài bộ token vào trang.
 * · `pageBreak` — chỉ có nghĩa khi in, không có tác dụng trên web.
 */

/** Thẻ được giữ lại — những gì preset `defaultHtml` sinh ra và trang cần hiển thị. */
const ALLOWED_TAGS = new Set([
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "ul",
  "ol",
  "li",
  "h2",
  "h3",
  "h4",
  "blockquote",
  "code",
  "pre",
  "hr",
  "figure",
  "figcaption",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
]);

/** Thẻ trơ — không có thẻ đóng, nên `</br>` hay `</hr>` phải bỏ chứ không phát ra. */
const VOID_TAGS = new Set(["br", "hr", "img", "input"]);

/** Ô bảng được giữ `colspan`/`rowspan` — hai attribute này đổi cấu trúc bảng. */
const CELL_TAGS = new Set(["th", "td"]);

/**
 * Class được giữ, theo đúng thẻ mang nó.
 *
 * Danh sách đóng và khớp chính xác từng chuỗi: CKEditor biểu diễn căn lề ảnh,
 * ảnh có chú thích và danh sách việc bằng class chứ không bằng thẻ, nên không có
 * cách nào khác để giữ chúng. Vì class nằm trong DB nên Tailwind không sinh
 * utility cho chúng — `components/next-content/styles.css` lo phần đó.
 */
const CLASSES_BY_TAG: Record<string, Set<string>> = {
  figure: new Set([
    "image",
    "image_resized",
    "image-style-align-left",
    "image-style-align-right",
    "image-style-align-center",
    "image-style-side",
    "table",
  ]),
  ul: new Set(["todo-list"]),
};

/** Thẻ bị bỏ cùng toàn bộ nội dung — phần chữ bên trong không phải văn bản. */
const DROP_WITH_CONTENT = [
  "script",
  "style",
  "iframe",
  "object",
  "embed",
  "noscript",
  "template",
  "svg",
  "math",
  "form",
];

/** Chỉ những scheme này mới được lên `href`; `javascript:` và `data:` bị loại. */
const SAFE_HREF = /^(?:https?:\/\/|mailto:|tel:|\/|#)/i;

/** Ảnh chỉ trỏ tới http(s) hoặc đường dẫn nội bộ — `data:` bị loại. */
const SAFE_SRC = /^(?:https?:\/\/|\/)/i;

/** Dấu hiệu cho biết output có nội dung, kể cả khi không có chữ nào. */
const HAS_CONTENT = /<(?:img|hr|table|pre|input)\b/;

const TAG_RE = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^'">])*)>/g;

/** Escape `<`, `>` và `&` — nhưng để nguyên các entity đã có sẵn (`&amp;`, `&#39;`). */
function escapeText(value: string): string {
  return value
    .replace(/&(?![a-zA-Z][a-zA-Z0-9]*;|#\d+;|#x[0-9a-fA-F]+;)/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Một attribute dạng chuỗi, `null` nếu thiếu hoặc rỗng. `name` luôn là chữ do
 * hàm trong file này truyền vào, không phải dữ liệu người dùng.
 */
function readAttribute(attributes: string, name: string): string | null {
  const match = new RegExp(
    `${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'>]+))`,
    "i",
  ).exec(attributes);
  const value = (match?.[1] ?? match?.[2] ?? match?.[3] ?? "").trim();

  return value === "" ? null : value;
}

/** `href` đầu tiên trong chuỗi attribute, hoặc `null` nếu thiếu/không an toàn. */
function readHref(attributes: string): string | null {
  const href = readAttribute(attributes, "href");

  return href && SAFE_HREF.test(href) ? href : null;
}

/** Chuỗi ` class="…"` chỉ gồm những class có trong allowlist của chính thẻ đó. */
function readClasses(attributes: string, tag: string): string {
  const allowed = CLASSES_BY_TAG[tag];

  if (!allowed) return "";

  const raw = readAttribute(attributes, "class");
  const kept = raw?.split(/\s+/).filter((name) => allowed.has(name)) ?? [];

  return kept.length ? ` class="${escapeAttribute(kept.join(" "))}"` : "";
}

/** `colspan`/`rowspan` khi đúng là số từ 2 tới 3 chữ số. */
function cellAttributes(attributes: string): string {
  return ["colspan", "rowspan"]
    .map((name) => {
      const value = readAttribute(attributes, name);

      return value && /^\d{1,3}$/.test(value) && Number(value) > 1
        ? ` ${name}="${value}"`
        : "";
    })
    .join("");
}

/**
 * `<img>` dựng lại từ đầu, chỉ giữ `src` đã kiểm scheme, `alt`, và cặp
 * width/height khi đúng là số — `NextContent` cần hai số đó để dùng `next/image`.
 */
function buildImageTag(attributes: string): string {
  const src = readAttribute(attributes, "src");

  if (!src || !SAFE_SRC.test(src)) return "";

  const alt = readAttribute(attributes, "alt");
  const width = readAttribute(attributes, "width");
  const height = readAttribute(attributes, "height");

  return [
    `<img src="${escapeAttribute(src)}"`,
    alt ? ` alt="${escapeAttribute(alt)}"` : "",
    width && /^\d+$/.test(width) ? ` width="${width}"` : "",
    height && /^\d+$/.test(height) ? ` height="${height}"` : "",
    ">",
  ].join("");
}

/**
 * Ô đánh dấu của `todoList` dựng lại từ đầu: chỉ `type="checkbox"`, luôn `disabled`
 * và không nhận gì khác. `<input>` trong nội dung là thứ đáng ngại, nhưng ở dạng
 * này nó hoàn toàn trơ — không nằm trong form, không focus được, không tương tác
 * được, nên chỉ còn là một dấu tick để `styles.css` tô màu.
 */
function buildTodoInput(attributes: string): string {
  if (readAttribute(attributes, "type")?.toLowerCase() !== "checkbox") return "";

  const checked = /(?:^|\s)checked(?:\s|=|$)/i.test(attributes);

  return `<input type="checkbox" disabled${checked ? " checked" : ""}>`;
}

/**
 * Bỏ các thẻ nguy hiểm cùng nội dung bên trong. Thẻ mở không có thẻ đóng bị cắt
 * tới hết chuỗi — phần còn lại sẽ được escape ở bước sau nên không thể thoát ra.
 */
function dropDangerousBlocks(html: string): string {
  return DROP_WITH_CONTENT.reduce((acc, tag) => {
    const paired = new RegExp(
      `<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}\\s*>`,
      "gi",
    );

    return acc
      .replace(paired, "")
      .replace(new RegExp(`<\\/?${tag}\\b[^>]*>[\\s\\S]*$`, "gi"), "");
  }, html);
}

/**
 * Trả về HTML đã làm sạch, hoặc `null` khi nội dung rỗng — để nơi gọi hiển thị
 * trạng thái "đang cập nhật" thay vì một khối trống.
 */
export function sanitizeRichText(
  html: string | null | undefined,
): string | null {
  if (typeof html !== "string" || html.trim() === "") return null;

  const input = dropDangerousBlocks(html);

  let output = "";
  let cursor = 0;
  let match: RegExpExecArray | null;

  TAG_RE.lastIndex = 0;

  while ((match = TAG_RE.exec(input)) !== null) {
    output += escapeText(input.slice(cursor, match.index));
    cursor = match.index + match[0].length;

    const closing = match[1] === "/";
    const name = match[2].toLowerCase();

    // Ba thẻ dưới đây dựng lại từ đầu chứ không đi qua allowlist thường, vì
    // chúng cần attribute — thứ mà các thẻ còn lại không được phép có.
    if (name === "img") {
      if (!closing) output += buildImageTag(match[3]);
      continue;
    }

    if (name === "input") {
      if (!closing) output += buildTodoInput(match[3]);
      continue;
    }

    // `<a>` luôn được giữ để cặp thẻ đóng/mở không lệch; href không an toàn thì
    // bỏ href, còn lại thành một anchor trơ (chỉ là chữ).
    if (name === "a") {
      if (closing) {
        output += "</a>";
      } else {
        const href = readHref(match[3]);
        output += href
          ? `<a href="${escapeAttribute(href)}" rel="noopener noreferrer">`
          : "<a>";
      }
      continue;
    }

    if (ALLOWED_TAGS.has(name)) {
      if (closing) {
        // Thẻ trơ không có thẻ đóng; `</br>` của trình soạn thảo bị bỏ qua thay
        // vì phát ra, nếu không trình duyệt sẽ hiểu thành một lần xuống dòng nữa.
        if (!VOID_TAGS.has(name)) output += `</${name}>`;
      } else {
        output += `<${name}${readClasses(match[3], name)}${
          CELL_TAGS.has(name) ? cellAttributes(match[3]) : ""
        }>`;
      }
    }
    // Thẻ ngoài allowlist: bỏ tag, giữ phần chữ — vòng lặp sau escape nó.
  }

  output += escapeText(input.slice(cursor));

  // Còn thẻ nhưng không còn chữ (ví dụ `<p></p>`) tính là rỗng, để nơi gọi hiện
  // trạng thái "đang cập nhật" thay vì một khối trống. Ảnh, bảng và đường kẻ là
  // nội dung dù không có chữ nào.
  const stripped = output.replace(/<[^>]*>/g, "");
  const hasText = /[^<>\s]/.test(stripped);

  return hasText || HAS_CONTENT.test(output) ? output.trim() : null;
}
