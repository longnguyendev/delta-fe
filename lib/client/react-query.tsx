"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Nội dung Strapi thay đổi chậm — 5 phút là đủ tươi.
        staleTime: 5 * 60 * 1000,
        // Mạng localhost hay chập chờn khi dev — thử lại tối đa 2 lần.
        retry: 2,
        // Site nội dung, không cần refetch khi quay lại tab.
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: 0,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

/**
 * Server: mỗi request một client riêng (không chia sẻ cache giữa người dùng).
 * Client: tái sử dụng một instance duy nhất trong suốt phiên.
 */
export function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(getQueryClient);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
