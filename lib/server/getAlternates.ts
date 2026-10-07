import { Metadata } from 'next';

import { BASE_URL } from '@/constants';

export const getAlternates = (
  locale: string,
  pathname: string
): Metadata['alternates'] => {
  const locales = ['en', 'vi'];

  return {
    canonical: `${BASE_URL}/${locale}${pathname}`,
    languages: Object.fromEntries(
      locales.map((l) => [l, `${BASE_URL}/${l}${pathname}`])
    ),
  };
};
