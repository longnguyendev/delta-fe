import { cache } from 'react';

import { useLocalesQuery } from '@/generated/generates';
import { Locale, locales } from '@/types';

export const getStaticLocaleParams = cache(
  async (): Promise<Array<{ lang: Locale }>> => {
    const { i18NLocales } = await useLocalesQuery.fetcher()();

    return i18NLocales
      .map((locale) => locale?.code)
      .filter(
        (code): code is Locale =>
          !!code && locales.includes(code as (typeof locales)[number])
      )
      .map((lang) => ({ lang }));
  }
);
