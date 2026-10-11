/**
 * Tầng gọi Strapi GraphQL từ Server Component.
 *
 * Khác `lib/client/fetcher.ts` ở chỗ đây là hàm async trả thẳng dữ liệu và gắn
 * `next.revalidate`, nên kết quả được Next cache theo ISR thay vì phải gọi lại
 * mỗi request.
 */

const endpoint = `${process.env.NEXT_PUBLIC_API ?? "http://localhost:1337"}/graphql`;

/** Nội dung Strapi đổi chậm — 5 phút, khớp `staleTime` của React Query. */
const REVALIDATE_SECONDS = 300;

type GraphQLResponse<TData> = {
  data?: TData;
  errors?: { message: string }[];
};

/**
 * Lỗi được ném ra thay vì trả về giá trị rỗng: một trang dự án trắng trông như
 * "chưa có dữ liệu", còn lỗi thì chỉ đúng chỗ cần sửa (schema, biến, endpoint).
 */
export async function strapiRequest<TData, TVariables>(
  query: string,
  variables?: TVariables,
): Promise<TData> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: REVALIDATE_SECONDS },
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
