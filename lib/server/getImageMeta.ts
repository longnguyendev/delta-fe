import { getPlaiceholder } from 'plaiceholder';

export async function getImageMeta(imageUrl: string) {
  const res = await fetch(imageUrl);

  if (!res.ok)
    throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);

  const buffer = await res.arrayBuffer();

  const { metadata } = await getPlaiceholder(Buffer.from(buffer));

  return metadata;
}
