import { ReactNode } from 'react';

export type PropsWithParams<T extends Record<string, string>> = {
  params: Promise<T>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type RootLayoutProps = Omit<
  PropsWithParams<{ lang: string }>,
  'searchParams'
> &
  Readonly<{
    children: ReactNode;
  }>;
