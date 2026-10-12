import { BASE_URL, company } from "@/constants";

/**
 * JSON-LD schema.org cho công ty — dữ liệu lấy từ `@/constants/company`, cùng
 * nguồn với phần hiển thị ở footer nên structured data không thể lệch với
 * thông tin trên trang.
 *
 * `LocalBusiness` thay vì `Organization`: `openingHoursSpecification` chỉ có
 * trên `LocalBusiness`, và mọi consumer đọc `Organization` vẫn hiểu subtype này.
 *
 * Hai điểm có chủ đích:
 * - Không có `dayOfWeek`: chưa xác nhận ngày làm việc trong tuần, không suy diễn.
 *   Bổ sung khi có thông tin (ví dụ `["Monday", …, "Saturday"]`).
 * - `address` chỉ gồm trụ sở (địa chỉ pháp nhân). Địa chỉ xưởng hiển thị ở
 *   footer, không đưa vào schema để giữ block gọn và đúng chuẩn.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  alternateName: company.shortName,
  url: BASE_URL,
  email: company.email.address,
  telephone: company.phone.e164,
  taxID: company.taxCode,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.headOffice,
    addressLocality: "Thành phố Hồ Chí Minh",
    addressCountry: "VN",
  },
  openingHoursSpecification: company.workingHours.blocks.map((block) => ({
    "@type": "OpeningHoursSpecification",
    opens: block.opens,
    closes: block.closes,
  })),
} as const;
