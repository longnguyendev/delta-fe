/**
 * Thông tin pháp nhân & liên hệ thật của công ty — nguồn dữ liệu duy nhất.
 *
 * Dictionary (`lib/i18n`), các component và JSON-LD (`lib/server/organization.ts`)
 * đều đọc từ đây, nên số điện thoại/địa chỉ chỉ tồn tại ở đúng một chỗ và không
 * thể lệch nhau. Địa chỉ và tên pháp nhân là dữ kiện không đổi theo ngôn ngữ —
 * giữ tiếng Việt cho cả `/vi` lẫn `/en`, không đưa vào dictionary.
 */
const PHONE_E164 = "+84968275436";

export const company = {
  legalName: "CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY",
  shortName: "Delta Energy",
  phone: {
    /** Chuỗi hiển thị trên giao diện. */
    display: "+84 968 275 436",
    /** Dạng E.164 cho `telephone` trong JSON-LD. */
    e164: PHONE_E164,
    /** Link gọi — suy ra từ `e164` để hai giá trị không lệch nhau. */
    href: `tel:${PHONE_E164}`,
  },
  email: {
    address: "info@delta-enc.com.vn",
    href: "mailto:info@delta-enc.com.vn",
  },
  /**
   * Zalo OA/cá nhân của công ty. `href` dùng dạng `zalo.me/<số>` — mở được cả
   * trên desktop lẫn app; số hiển thị tách khối 3-3-3 cho dễ đọc.
   */
  zalo: {
    number: "0976683505",
    display: "0976 683 505",
    href: "https://zalo.me/0976683505",
  },
  address: {
    headOffice:
      "925/55, Đường 30/4, Phường Phước Thắng, Thành phố Hồ Chí Minh, Việt Nam",
    workshop:
      "155/8 Đường Đô Lương, Phường Phước Thắng, Thành phố Hồ Chí Minh, Việt Nam",
  },
  taxCode: "3502508868",
  /**
   * Ngày thành lập — do khách hàng cung cấp cùng nội dung trang Giới thiệu.
   * Ba dạng của cùng một dữ kiện: `iso` cho JSON-LD, `short` cho khối số liệu
   * trên giao diện, `long` cho câu văn (đọc thành lời theo từng ngôn ngữ).
   */
  founded: {
    iso: "2025-10-18",
    short: "18/10/2025",
    long: {
      vi: "18 tháng 10 năm 2025",
      en: "18 October 2025",
    },
  },
  workingHours: {
    /** Chuỗi hiển thị — giờ hành chính, nghỉ trưa 11h30–13h30. */
    display: "7h–11h30, 13h30–17h",
    /** Hai khối giờ mở cửa, dạng ISO 8601 cho JSON-LD. */
    blocks: [
      { opens: "07:00", closes: "11:30" },
      { opens: "13:30", closes: "17:00" },
    ],
  },
} as const;
