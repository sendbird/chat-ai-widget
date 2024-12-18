import { css } from '@linaria/core';

// const mobileMixin = (styles: string) => css`
//   .sendbird--mobile-mode & {
//     ${styles}
//   }
// `;
//
// const sendbirdLabelMobile = css`
//   ${mobileMixin(`
//     -webkit-user-select: none;
//     -webkit-touch-callout: none;
//   `)};
// `;

export const labelStyles = {
  base: css`
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    font-family: var(--sendbird-font-family-default);
  `,
  lg: css`
    letter-spacing: normal;
  `,
  sm: css`
    letter-spacing: -0.2px;
  `,
  h1: css`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
  `,
  h2: css`
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
  `,
  subtitle1: css`
    font-size: 16px;
    font-weight: normal;
    line-height: 1.38;
  `,
  subtitle2: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.14;
  `,
  body1: css`
    font-size: 14px;
    line-height: 1.43;
  `,
  body2: css`
    font-size: 12px;
    font-weight: normal;
    line-height: 1.33;
  `,
  button1: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
  `,
  button2: css`
    font-size: 14px;
    font-weight: normal;
    line-height: 1.43;
  `,
  button3: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
  `,
  caption1: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
  `,
  caption2: css`
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
  `,
  caption3: css`
    font-size: 12px;
    font-weight: normal;
    line-height: 1;
  `,
};
