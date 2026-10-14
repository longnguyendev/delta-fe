import { company } from "@/constants";
import { getDictionary } from "@/lib/i18n/dictionaries";

/**
 * Hai nút liên hệ nổi ở góc phải dưới (CLAUDE.md §3): vòng tròn 54px, Zalo
 * `#0068FF` và hotline `--accent-2`, cách mép `right:20px; bottom:22px`.
 *
 * Nút chỉ có icon nên nhãn nằm ở `aria-label` + `title`; chữ hiển thị sẽ phá
 * bố cục 54px và lặp lại y nguyên lời của `finalCta` (§7).
 *
 * Hiệu ứng gây chú ý là vòng lan 2.2s vẽ ở `app/globals.css` — hệ thống không
 * cho nút nảy/lò xo/vọt lố (§4), nên đây là dạng "động" duy nhất được phép.
 */

function PhoneIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M21.4 16.6v2.6a1.9 1.9 0 0 1-2.1 1.9 18.7 18.7 0 0 1-8.2-2.9 18.4 18.4 0 0 1-5.7-5.7A18.7 18.7 0 0 1 2.5 4.3 1.9 1.9 0 0 1 4.4 2.2h2.6a1.9 1.9 0 0 1 1.9 1.6 12.1 12.1 0 0 0 .7 2.7 1.9 1.9 0 0 1-.4 2L8 9.7a15.1 15.1 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4 12.1 12.1 0 0 0 2.7.7 1.9 1.9 0 0 1 1.6 1.9Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    /*
     * Bong bóng chat chỉ chiếm ~17/24 đơn vị của viewBox (bóng điện thoại chiếm
     * ~19), nên vẽ ở 24px thì nó nhỏ hơn hẳn. Bù bằng 27px và giảm nét còn 1.6:
     * nét thật = 1.6 × 27/24 = 1.8, đúng bằng nét bóng điện thoại.
     */
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M20.5 11.6a7.9 7.9 0 0 1-8.5 7.9 8.6 8.6 0 0 1-3.5-.8L3.5 20l1.3-4.7a7.9 7.9 0 0 1-.8-3.5 7.9 7.9 0 0 1 7.9-8.5h.5a7.9 7.9 0 0 1 8.1 8.3Z" />
    </svg>
  );
}

type FabProps = {
  href: string;
  label: string;
  /** `zalo` dùng xanh thương hiệu bên thứ ba, `call` dùng `--accent-2`. */
  tone: "zalo" | "call";
  external?: boolean;
};

function Fab({ href, label, tone, external = false }: FabProps) {
  const zalo = tone === "zalo";

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      /*
       * Nền đổi sang sắc đậm hơn khi hover: chữ trắng đi từ 3.98:1 lên ~7:1,
       * tức tương phản TĂNG chứ không giảm (§4). Ô `--brand-primary-palette-8`
       * là bậc 8 của chính dải xanh lá trong `variables.css`.
       */
      className={`relative grid h-[54px] w-[54px] place-items-center rounded-full text-white shadow-[0_6px_18px_rgba(0,0,0,.22)] transition-colors duration-150 ease-brand ${
        zalo
          ? "bg-[var(--fab-zalo)] hover:bg-[var(--fab-zalo-hover)]"
          : "bg-accent-2 hover:bg-[var(--brand-primary-palette-8)]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`fab-ring pointer-events-none absolute inset-0 rounded-full border-2 ${
          zalo ? "border-[var(--fab-zalo)]" : "border-accent-2"
        }`}
      />
      {zalo ? <ChatIcon /> : <PhoneIcon />}
    </a>
  );
}

export async function FloatingActions() {
  const t = await getDictionary();

  return (
    <div className="fixed right-5 bottom-[22px] z-30 flex flex-col gap-3 print:hidden">
      <Fab
        href={company.zalo.href}
        label={t.floatingActions.zalo}
        tone="zalo"
        external
      />
      <Fab
        href={company.phone.href}
        label={t.floatingActions.call}
        tone="call"
      />
    </div>
  );
}
