/**
 * Tầng gọi Strapi GraphQL từ Server Component.
 *
 * Khác `lib/client/fetcher.ts` ở chỗ đây là hàm async trả thẳng dữ liệu.
 *
 * `cache: "no-store"` — không đi qua Data Cache của Next: mỗi lượt truy cập gọi
 * thẳng Strapi nên nội dung sửa trong CMS hiện ra ngay ở lần tải kế tiếp, không
 * phải chờ hết hạn revalidate. Đổi lại, mỗi request tốn một lượt GraphQL, và các
 * trang đọc hàm này render ở request time thay vì được dựng sẵn lúc build.
 */

const endpoint = `${process.env.NEXT_PUBLIC_API ?? "http://localhost:1337"}/graphql`;

type GraphQLResponse<TData> = {
  data?: TData;
  errors?: { message: string }[];
};

/**
 * Lỗi được ném ra thay vì trả về giá trị rỗng: một trang dự án trắng trông như
 * "chưa có dữ liệu", còn lỗi thì chỉ đúng chỗ cần sửa (schema, biến, endpoint).
 */
export async function strapiRequest<
  TData,
  TVariables = Record<string, never>,
>(query: string, variables?: TVariables): Promise<TData> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Strapi trả về ${response.status} ${response.statusText}. Kiểm tra NEXT_PUBLIC_API — đang trỏ tới ${endpoint}.`,
    );
  }

  const json = (await response.json()) as GraphQLResponse<TData>;

  if (json.errors?.length) {
    throw new Error(
      `Strapi GraphQL báo lỗi: ${json.errors.map((error) => error.message).join("; ")}`,
    );
  }

  if (json.data === undefined) {
    throw new Error(
      `Strapi GraphQL không trả về trường \`data\` (${endpoint}).`,
    );
  }

  return json.data;
}
