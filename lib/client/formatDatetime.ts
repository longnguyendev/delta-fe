export const formatDateTime = (locale: string, value?: string | null) => {
  if (!value) return '';

  return new Date(Date.parse(value)).toLocaleDateString(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};
