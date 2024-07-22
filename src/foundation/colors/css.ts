import { css } from '@linaria/core';

export const themedColors = {
  onbackground1: 'var(--sb-on-bg-1)',
  onbackground2: 'var(--sb-on-bg-2)',
  onbackground3: 'var(--sb-on-bg-3)',
  onbackground4: 'var(--sb-on-bg-4)',
  oncontent1: 'var(--sb-on-content-1)',
  oncontent2: 'var(--sb-on-content-2)',
  oncontent_inverse1: 'var(--sb-on-content-inverse-1)',
  oncontent_inverse2: 'var(--sb-on-content-inverse-2)',
  primary: 'var(--sb-primary)',
  error: 'var(--sb-error)',
  secondary: 'var(--sb-secondary)',
};

export const themedColorVars = css`
  .sendbird-theme--light & {
    --sb-on-bg-1: var(--sendbird-light-onlight-01);
    --sb-on-bg-2: var(--sendbird-light-onlight-02);
    --sb-on-bg-3: var(--sendbird-light-onlight-03);
    --sb-on-bg-4: var(--sendbird-light-onlight-04);
    --sb-on-content-1: var(--sendbird-light-ondark-01);
    --sb-on-content-2: var(--sendbird-light-ondark-02);
    --sb-on-content-inverse-1: var(--sendbird-light-onlight-01);
    --sb-on-content-inverse-2: var(--sendbird-light-onlight-02);
    --sb-primary: var(--sendbird-light-primary-300);
    --sb-secondary: var(--sendbird-light-secondary-300);
    --sb-error: var(--sendbird-light-error-300);
  }
  .sendbird-theme--dark & {
    --sb-on-bg-1: var(--sendbird-dark-ondark-01);
    --sb-on-bg-2: var(--sendbird-dark-ondark-02);
    --sb-on-bg-3: var(--sendbird-dark-ondark-03);
    --sb-on-bg-4: var(--sendbird-dark-ondark-04);
    --sb-on-content-1: var(--sendbird-dark-onlight-01);
    --sb-on-content-2: var(--sendbird-dark-onlight-02);
    --sb-on-content-inverse-1: var(--sendbird-dark-ondark-01);
    --sb-on-content-inverse-2: var(--sendbird-dark-ondark-02);
    --sb-primary: var(--sendbird-dark-primary-200);
    --sb-secondary: var(--sendbird-dark-secondary-200);
    --sb-error: var(--sendbird-dark-error-200);
  }
`;

/**
 * To use this CSS, please add colorSetClassName to the className.
 * */
export const textColors = {
  onbackground1: css`
    color: var(--sb-on-bg-1);
  `,
  onbackground2: css`
    color: var(--sb-on-bg-2);
  `,
  onbackground3: css`
    color: var(--sb-on-bg-3);
  `,
  onbackground4: css`
    color: var(--sb-on-bg-4);
  `,
  oncontent1: css`
    color: var(--sb-on-content-1);
  `,
  oncontent2: css`
    color: var(--sb-on-content-2);
  `,
  oncontent_inverse1: css`
    color: var(--sb-on-content-inverse-1);
  `,
  oncontent_inverse2: css`
    color: var(--sb-on-content-inverse-2);
  `,
  primary: css`
    color: var(--sb-primary);
  `,
  error: css`
    color: var(--sb-error);
  `,
  secondary: css`
    color: var(--sb-secondary);
  `,
};

/**
 * To use this CSS, please add colorSetClassName to the className.
 * */
export const bgColors = {
  onbackground1: css`
    background-color: var(--sb-on-bg-1);
  `,
  onbackground2: css`
    background-color: var(--sb-on-bg-2);
  `,
  onbackground3: css`
    background-color: var(--sb-on-bg-3);
  `,
  onbackground4: css`
    background-color: var(--sb-on-bg-4);
  `,
  oncontent1: css`
    background-color: var(--sb-on-content-1);
  `,
  primary: css`
    background-color: var(--sb-primary);
  `,
  error: css`
    background-color: var(--sb-error);
  `,
  secondary: css`
    background-color: var(--sb-secondary);
  `,
};
