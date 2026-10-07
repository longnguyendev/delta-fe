export function getFileUrl(url?: string | null) {
  if (!url) return '';

  return `${process.env.NEXT_PUBLIC_API}${url}`;
}
