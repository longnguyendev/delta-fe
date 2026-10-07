import { Metadata } from 'next';

import { BASE_URL } from '@/constants';
import { removeHtmlTags } from '@/helpers';
import { Locale } from '@/types';

import { getImageMeta } from './getImageMeta';

const imgSEODefault = 'https://api.poska.vn/uploads/1_87f0b49e92.jpg';

export async function getOpenGraph(
  lang: Locale,
  title: string,
  description: string,
  path?: string,
  imgSEO?: string
): Promise<Metadata['openGraph']> {
  const imageMeta = await getImageMeta(imgSEO || imgSEODefault);
  if (imageMeta) {
    const { width, height, format } = imageMeta;
    return {
      type: 'website',
      url: `${BASE_URL}/${lang}${path || ''}`,
      title: removeHtmlTags(title),
      description: removeHtmlTags(description),
      locale: lang,
      images: [
        {
          url: imgSEO || imgSEODefault,
          width,
          height,
          alt: title,
          type: format,
        },
      ],
    };
  }
  return {
    type: 'website',
    url: `${BASE_URL}/${lang}${path || ''}`,
    title: removeHtmlTags(title),
    description: removeHtmlTags(description),
    locale: lang,
    images: [
      {
        url: imgSEO || imgSEODefault,
        alt: title,
      },
    ],
  };
}
