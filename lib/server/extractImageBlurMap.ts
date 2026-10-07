import { getPlaiceholder } from 'plaiceholder';

export async function extractImageBlurMap(htmlRaw: string) {
  const imageMap: Record<
    string,
    { base64: string; width: number; height: number }
  > = {};
  const matches = [...htmlRaw.matchAll(/<img[^>]*src="([^"]+)"[^>]*>/g)];

  await Promise.all(
    matches.map(async (match) => {
      const src = match[1];
      if (!imageMap[src]) {
        const buffer = await fetch(src)
          .then((res) => res.arrayBuffer())
          .then((buf) => Buffer.from(buf));
        const {
          base64,
          metadata: { width, height },
        } = await getPlaiceholder(buffer);
        imageMap[src] = { base64, width, height };
      }
    })
  );

  return imageMap;
}
