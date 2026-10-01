"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink, Container } from "./ui";

const NAV = [
  { href: "#giai-phap", label: "Giải pháp" },
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#du-an", label: "Dự án" },
  { href: "#faq", label: "FAQ" },
  { href: "#lien-he", label: "Liên hệ" },
];

/** Sticky 76px header; under 900px the nav becomes an off-canvas drawer. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-container">
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Link
          href="#top"
          aria-label="Delta Energy — về đầu trang"
          className="shrink-0"
        >
          <Image
            src="/logos/delta-energy-lockup.svg"
            alt="Delta Energy"
            width={214}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav
          aria-label="Điều hướng chính"
          className="hidden items-center gap-7 min-[900px]:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="tel:19001234"
            variant="ghost"
            className="hidden min-[1100px]:inline-flex"
          >
            Gọi 1900 1234
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Mở menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-fg min-[900px]:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu điều hướng"
          className="fixed inset-0 z-50 min-[900px]:hidden"
        >
          <button
            type="button"
            aria-label="Đóng menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-fg/40"
          />
          <div className="absolute right-0 top-0 flex h-full w-[280px] flex-col border-l border-line bg-container p-6">
            <div className="mb-2 flex items-center justify-between">
              <Image
                src="/logos/delta-energy-lockup.svg"
                alt="Delta Energy"
                width={214}
                height={48}
                className="h-9 w-auto"
              />
              <button
                type="button"
                aria-label="Đóng menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-fg"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav aria-label="Điều hướng chính" className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-base font-medium text-text-secondary transition-colors duration-150 hover:text-text"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              <ButtonLink
                href="tel:19001234"
                variant="secondary"
                className="w-full"
              >
                Gọi 1900 1234
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
