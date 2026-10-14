import { BASE_URL, company } from "@/constants";
import type { Product, Service } from "@/lib/data/services";
import type { Dictionary } from "@/lib/i18n/vi";
import { absoluteUrl } from "./page-meta";

/**
 * Structured data cho từng loại trang. Dữ liệu công ty vẫn lấy từ
 * `@/constants/company` — cùng nguồn với `organizationJsonLd` và với footer,
 * nên không có chỗ nào để hai bản lệch nhau.
 */

/** Tham chiếu công ty dùng làm `provider` — không lặp lại toàn bộ block. */
const PROVIDER = {
  "@type": "LocalBusiness",
  name: company.legalName,
  alternateName: company.shortName,
  url: BASE_URL,
  telephone: company.phone.e164,
  email: company.email.address,
} as const;

const AREA_SERVED = { "@type": "Country", name: "Việt Nam" } as const;

/** Câu hỏi thường gặp ở trang chủ — nguồn là `t.faq.items`, khớp từng chữ với UI. */
export function faqPageJsonLd(items: Dictionary["faq"]["items"]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Một nhóm dịch vụ — dùng ở trang chi tiết dịch vụ. */
export function serviceJsonLd(service: Service, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    url,
    provider: PROVIDER,
    areaServed: AREA_SERVED,
  };
}

/** Đường dẫn phân cấp — `url` phải là URL tuyệt đối. */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Trang Giới thiệu — `AboutPage` với `mainEntity` trỏ về hồ sơ công ty.
 *
 * `foundingDate` đọc từ `@/constants/company`, cùng nguồn với khối số liệu
 * trên trang, nên structured data không thể lệch với thứ hiển thị.
 */
export function aboutPageJsonLd(name: string, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name,
    url: absoluteUrl(locale, "/about"),
    inLanguage: locale === "en" ? "en" : "vi",
    mainEntity: {
      "@type": "LocalBusiness",
      name: company.legalName,
      alternateName: company.shortName,
      url: BASE_URL,
      foundingDate: company.founded.iso,
    },
  };
}

/**
 * Danh mục sản phẩm ở trang dịch vụ.
 *
 * Cố ý KHÔNG có `offers`: site chưa hỗ trợ đặt mua trực tuyến, khai báo giá ở
 * đây là dữ liệu sai. `url` trỏ về trang dịch vụ — nơi sản phẩm thực sự được
 * giới thiệu, vì mỗi sản phẩm chưa có trang riêng.
 */
export function productsJsonLd(products: Product[], locale: string) {
  const url = absoluteUrl(locale, "/services");

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.category,
        image: `${BASE_URL}${product.src}`,
        url,
        brand: { "@type": "Brand", name: company.shortName },
      },
    })),
  };
}
