import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui";

const FOOTER_COLS = [
  {
    heading: "Điều hướng",
    links: [
      { href: "#giai-phap", label: "Giải pháp" },
      { href: "#dich-vu", label: "Dịch vụ" },
      { href: "#du-an", label: "Dự án" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    heading: "Công ty",
    links: [
      { href: "#du-an", label: "Giới thiệu" },
      { href: "#du-an", label: "Hồ sơ năng lực" },
      { href: "#lien-he", label: "Liên hệ" },
    ],
  },
  {
    heading: "Liên hệ",
    links: [
      { href: "tel:19001234", label: "Hotline 1900 1234" },
      { href: "#lien-he", label: "Nhắn Zalo" },
      { href: "#lien-he", label: "Gửi yêu cầu báo giá" },
    ],
  },
];

/** Dark #1F2937 band — #D7DBDF is the lightest text allowed (CLAUDE.md §4). */
export function Footer() {
  return (
    <footer className="bg-fg py-12 text-sm md:py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logos/delta-energy-lockup-light.svg"
              alt="Delta Energy"
              width={214}
              height={48}
              className="h-12 w-auto"
            />
            <p className="mt-3 max-w-[36ch] text-[13px] leading-relaxed text-footer-text">
              Delta Energy cung cấp thiết bị, giải pháp kỹ thuật và dịch vụ
              hiện trường cho nhà máy và công trình công nghiệp — từ tư vấn,
              cung cấp thiết bị đến lắp đặt và bảo trì vận hành.
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-footer-muted">
                {col.heading}
              </div>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-footer-text transition-colors duration-150 hover:text-footer-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-footer-muted">
          <span>
            © 2026 Delta Energy · CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY
          </span>
          <span>Kỹ thuật · Đáng tin cậy · Rõ ràng</span>
        </div>
      </Container>
    </footer>
  );
}
