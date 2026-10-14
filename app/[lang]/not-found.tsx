import type { Metadata } from "next";
import { lang } from "next/root-params";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ButtonLink, Container, Kicker } from "@/components/ui";
import { getDictionary } from "@/lib/i18n/dictionaries";

/**
 * 404 nội địa hoá.
 *
 * Next mặc định trả trang 404 tiếng Anh; đặt file này trong `[lang]` để bản
 * tiếng Việt và tiếng Anh mỗi bên có bản của mình. Trang cũng tự dựng lại
 * Header/Footer vì layout `[lang]` chỉ bọc `<html>`/`<body>`, không chứa chrome.
 *
 * `noindex` khai tường minh: URL sai vẫn có thể bị chia sẻ, và mặc dù mã trạng
 * thái 404 đã đủ để Google loại bỏ, thẻ này chặn luôn trường hợp trang được
 * render mềm.
 */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();

  return {
    title: t.notFound.title,
    robots: { index: false, follow: false },
  };
}

export default async function NotFound() {
  const [locale, t] = await Promise.all([lang(), getDictionary()]);

  return (
    <div className="flex flex-1 flex-col">
      <Header t={t.nav} lang={locale} />
      <main className="flex flex-1 items-center py-16 md:py-24">
        <Container>
          <div className="mx-auto flex max-w-[560px] flex-col items-start">
            <Kicker>404</Kicker>
            <h1 className="mt-2.5 text-[clamp(28px,4vw,42px)] leading-[1.15] tracking-[-0.015em]">
              {t.notFound.title}
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-text-secondary">
              {t.notFound.body}
            </p>
            <ButtonLink
              href={`/${locale}`}
              variant="primary"
              size="lg"
              className="mt-8"
            >
              {t.notFound.backHome}
            </ButtonLink>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
