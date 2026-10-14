import { BASE_URL, company } from "@/constants";

/** Ngày làm việc trong tuần — đã chốt với khách: Thứ 2 đến Thứ 6. */
const WORKING_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
] as const;

/**
 * JSON-LD schema.org cho công ty — dữ liệu lấy từ `@/constants/company`, cùng
 * nguồn với phần hiển thị ở footer nên structured data không thể lệch với
 * thông tin trên trang.
 *
 * `LocalBusiness` thay vì `Organization`: `openingHoursSpecification` chỉ có
 * trên `LocalBusiness`, và mọi consumer đọc `Organization` vẫn hiểu subtype này.
 *
 * `address` chỉ gồm trụ sở (địa chỉ pháp nhân). Địa chỉ xưởng hiển thị ở
 * footer, không đưa vào schema để giữ block gọn và đúng chuẩn.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  alternateName: company.shortName,
  url: BASE_URL,
  logo: `${BASE_URL}/logos/delta-energy-mark.svg`,
  image: `${BASE_URL}/logos/delta-energy-mark.svg`,
  email: company.email.address,
  telephone: company.phone.e164,
  taxID: company.taxCode,
  /** Hồ sơ công khai của công ty — hiện chỉ có Zalo. */
  sameAs: [company.zalo.href],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone.e164,
      email: company.email.address,
      contactType: "sales",
      areaServed: "VN",
      availableLanguage: ["vi", "en"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.headOffice,
    addressLocality: "Thành phố Hồ Chí Minh",
    addressCountry: "VN",
  },
  areaServed: { "@type": "Country", name: "Việt Nam" },
  openingHoursSpecification: company.workingHours.blocks.map((block) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: WORKING_DAYS,
    opens: block.opens,
    closes: block.closes,
  })),
} as const;
