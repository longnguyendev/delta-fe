/*
 * Next 16 chặn image optimizer gọi vào IP nội bộ (chống SSRF), mà Strapi ở máy
 * dev là `localhost:1337` — resolve ra 127.0.0.1 nên bị chặn thẳng, optimizer
 * trả 400 `"url" parameter is not allowed` và mọi ảnh upload đều trắng.
 *
 * Cờ dưới đây gỡ đúng chốt đó, nên CHỈ mở ở dev. Production lấy ảnh từ
 * api.delta-enc.com.vn (IP công khai) — bật ở đó là tự tháo chốt SSRF cho mọi
 * ảnh remote. Cần chạy `build` + `start` với Strapi nội bộ thì đặt
 * ALLOW_LOCAL_IMAGES=true.
 */
const allowLocalImages =
  process.env.NODE_ENV !== "production" ||
  process.env.ALLOW_LOCAL_IMAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.delta-enc.com.vn" }],
        destination: `https://delta-enc.com.vn/:path*`,
        permanent: true,
      },
    ];
  },
  images: {
    dangerouslyAllowLocalIP: allowLocalImages,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.delta-enc.com.vn",
        pathname: "/uploads/**",
      },
    ],
    qualities: [75, 85, 95, 100],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
  },
  output: "standalone",
};

export default nextConfig;
