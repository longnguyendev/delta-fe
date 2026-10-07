type CSSProperties = {
  [key: string]: string | number;
};

export function convertCSSToObject(cssString?: string): CSSProperties {
  const cssObject: CSSProperties = {};
  const cssArray = cssString?.split(';');

  cssArray?.forEach((cssProperty) => {
    if (cssProperty.trim() !== '') {
      const [property, value] = cssProperty.split(':');
      const key = property
        .trim()
        .replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());
      const trimmedValue = value.trim();

      // Convert numeric values to numbers, leave the rest as strings
      // eslint-disable-next-line no-restricted-globals
      cssObject[key] = isNaN(Number(trimmedValue))
        ? trimmedValue
        : Number(trimmedValue);
    }
  });

  return cssObject;
}
