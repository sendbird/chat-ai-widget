function hexToRgb(value: string): [number, number, number] {
  value = value.replace('#', '');
  const lv = value.length;
  const chunkSize = lv / 3;
  return [
    parseInt(value.slice(0, chunkSize), 16),
    parseInt(value.slice(chunkSize, 2 * chunkSize), 16),
    parseInt(value.slice(2 * chunkSize), 16),
  ];
}

function rgbToHex(rgb: [number, number, number]): string {
  return `#${rgb.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}

function rgbToHsl(r: number, g: number, b: number): number[] {
  // Convert to values between 0 and 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find maximum and minimum of RGB
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  // Initialize hue, saturation, lightness
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  // Calculate saturation
  if (max !== min) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  }

  // Calculate hue
  if (max === r) {
    h = (g - b) / d + (g < b ? 6 : 0);
  } else if (max === g) {
    h = (b - r) / d + 2;
  } else if (max === b) {
    h = (r - g) / d + 4;
  }

  h /= 6;

  return [h, s, l];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = function hue2rgb(p: number, q: number, t: number) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function adjustColor(color: string, lightnessFactor: number, saturationFactor: number): string {
  const [r, g, b] = hexToRgb(color);
  const [h, s, l] = rgbToHsl(r, g, b);
  const newL = Math.max(0, Math.min(1, l * lightnessFactor));
  const newS = Math.max(0, Math.min(1, s * saturationFactor));
  const [newR, newG, newB] = hslToRgb(h, newS, newL);
  return rgbToHex([Math.round(newR), Math.round(newG), Math.round(newB)]);
}

const getColorFactor = (variant: string, theme: string): [number, number] => {
  if (variant === '500') return [0.6, 1.2];
  if (variant === '400') return [0.85, 1.1];
  if (variant === '200') return theme === 'dark' ? [1.1, 0.95] : [1.5, 0.9];
  if (variant === '100') return theme === 'dark' ? [1.2, 0.9] : [1.75, 0.8];
  return [1, 1];
};
export function generateColorVariants(
  baseColor: string,
  theme = 'light',
): {
  [key: string]: string;
} {
  const variants: { [key: string]: string } = {};
  variants['500'] = adjustColor(baseColor, ...getColorFactor('500', theme));
  variants['400'] = adjustColor(baseColor, ...getColorFactor('400', theme));
  variants['300'] = baseColor;
  variants['200'] = adjustColor(baseColor, ...getColorFactor('200', theme));
  variants['100'] = adjustColor(baseColor, ...getColorFactor('100', theme));
  return variants;
}

export function getColorBasedOnSaturation(hex: string, alpha?: number) {
  const threshold = 149;
  const r = Number(`0x${hex[1]}${hex[2]}`);
  const g = Number(`0x${hex[3]}${hex[4]}`);
  const b = Number(`0x${hex[5]}${hex[6]}`);
  const calc = r * 0.299 + g * 0.587 + b * 0.114;
  if (alpha) {
    const val = calc > threshold ? 0 : 255;
    return `rgba(${val}, ${val}, ${val}, ${alpha})`;
  }
  return calc > threshold ? '#000000' : '#ffffff';
}

export function generateCSSVariables(accentColor: string, themeType: string): Record<string, string> {
  const colorVariants = generateColorVariants(accentColor, themeType);

  return Object.keys(colorVariants).reduce((acc: Record<string, string>, key: string) => {
    const cssVariable = `--sendbird-${themeType}-primary-${key}`;
    acc[cssVariable] = colorVariants[parseInt(key)];
    return acc;
  }, {});
}
