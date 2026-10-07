import { Formats, Maybe, Quality } from '@/generated/generates';

import { getFileUrl } from './getImageUrl';

interface IGetImageUrl {
  formats?: Maybe<Formats>;
  quality?: Quality;
}

export function getFormatUrl({ formats, quality = 'large' }: IGetImageUrl) {
  if (!formats) return '';

  return getFileUrl(formats?.[quality]?.url ?? Object.values(formats)?.[0].url);
}
