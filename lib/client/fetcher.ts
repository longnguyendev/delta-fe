type FetchOptions = {
  // eslint-disable-next-line no-undef
  cache?: RequestCache;
  // eslint-disable-next-line no-undef
  next?: NextFetchRequestConfig;
};

export type RequestInit = {
  // eslint-disable-next-line no-undef
  headers: (HeadersInit & FetchOptions) | FetchOptions;
};

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
) => {
  return async (): Promise<TData> => {
    const { next, cache, ...restOptions } = options || {};
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...restOptions,
      },
      body: JSON.stringify({ query, variables }),
      next,
      cache,
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
};
