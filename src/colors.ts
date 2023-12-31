import { transparentize } from 'polished';

export const defaultColorSet = {
  green: {
    1: '#E2FAE4',
    2: '#D1F0D3',
    3: '#A5D9A8',
    4: '#69C085',
    5: '#019C6E',
    50: '#e3fcf4',
    100: '#aef2dc',
    200: '#65e0b9',
    300: '#1fcca1',
    400: '#00998c',
    500: '#007a7a',
  },
  indigo: {
    50: '#deefff',
    100: '#baddff',
    200: '#82baff',
    300: '#5292fa',
    400: '#2876e8',
    500: '#0050bf',
  },
  orange: {
    50: '#fff5de',
    100: '#ffe3b6',
    200: '#ffd073',
    300: '#ffa033',
    400: '#ff7545',
    500: '#e64d2e',
  },
  red: {
    50: '#ffebee',
    100: '#ffccd4',
    200: '#ff949e',
    300: '#f24d6b',
    400: '#d92148',
    500: '#8d3149',
  },
  pink: {
    50: '#ffedfa',
    100: '#ffccf2',
    200: '#ffa6e8',
    300: '#fb70cd',
    400: '#d941b3',
    500: '#8d3a7f',
  },
  brown: {
    50: '#fff0eb',
    100: '#ffd9d1',
    200: '#f2a9a9',
    300: '#d98282',
    400: '#915151',
    500: '#592c31',
  },
  navy: {
    10: '#fafbfd',
    50: '#f6f8fc',
    100: '#dee2f2',
    200: '#dde4f5',
    300: '#c9d0ed',
    400: '#a7afd9',
    500: '#747cad',
    600: '#596094',
    700: '#44497a',
    800: '#353761',
    900: '#212242',
  },
  neutral: {
    1: '#f7f7f7',
    2: '#ececec',
    3: '#e0e0e0',
    4: '#cccccc',
    5: '#a6a6a6',
    6: '#858585',
    7: '#5e5e5e',
    8: '#424242',
    9: '#2e2e2e',
    10: '#0d0d0d',
  },
  purple: {
    1: '#f0eeff',
    2: '#e1dbff',
    3: '#cabdff',
    4: '#b49cff',
    5: '#8e64fa',
    6: '#7129e5',
    7: '#6210cc',
    8: '#4b11a1',
    9: '#350c73',
    10: '#1f084c',
  },
};

const colorGenerator =
  (colorSet: keyof typeof defaultColorSet) =>
  (
    colorKey:
      | keyof (typeof defaultColorSet)['green']
      | keyof (typeof defaultColorSet)['navy'],
    opacity?: number
  ) => {
    const color = defaultColorSet[colorSet][colorKey];
    return opacity && opacity <= 1 ? transparentize(1 - opacity, color) : color;
  };

export const colors = {
  purple: colorGenerator('purple'),
  green: colorGenerator('green'),
  indigo: colorGenerator('indigo'),
  orange: colorGenerator('orange'),
  red: colorGenerator('red'),
  pink: colorGenerator('pink'),
  brown: colorGenerator('brown'),
  navy: colorGenerator('navy'),
  neutral: colorGenerator('neutral'),
  white: '#ffffff',
};
