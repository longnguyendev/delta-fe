import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Delta Energy — Dịch vụ & Giải pháp Kỹ thuật Công nghiệp",
  description:
    "Delta Energy (CÔNG TY TNHH DỊCH VỤ KỸ THUẬT DELTA ENERGY) cung cấp thiết bị, giải pháp kỹ thuật và dịch vụ hiện trường cho nhà máy và công trình công nghiệp — từ tư vấn giải pháp, cung cấp thiết bị đến lắp đặt và bảo trì vận hành.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
