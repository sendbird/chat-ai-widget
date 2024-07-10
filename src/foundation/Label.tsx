import { css, cx } from '@linaria/core';
import React, { ElementType, HTMLAttributes } from 'react';

import { type SBUFoundationProps, useLocalProps } from './index';

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (P & AsProp<C>);
type PolymorphicComponentProps<C extends ElementType, Props = NonNullable<unknown>> = Props &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type HTMLProps<C extends ElementType> = PolymorphicComponentProps<C, HTMLAttributes<HTMLElement>>;

type Props<C extends ElementType> = HTMLProps<C> & {
  type?:
    | 'h1'
    | 'h2'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button1'
    | 'button2'
    | 'button3'
    | 'caption1'
    | 'caption2'
    | 'caption3';
  color?:
    | string
    | 'onbackground1'
    | 'onbackground2'
    | 'onbackground3'
    | 'onbackground4'
    | 'oncontent1'
    | 'oncontent2'
    | 'oncontent_inverse1'
    | 'oncontent_inverse3'
    | 'primary'
    | 'error'
    | 'secondary3';
};

export const Label = <C extends ElementType = 'span'>({
  as,
  className,
  type,
  color,
  ...props
}: SBUFoundationProps<Props<C>>) => {
  const Component = as || 'span';
  const localProps = useLocalProps(props);
  return (
    <Component
      className={cx('sendbird-label', ...(type ? typo[type] : []), color ? colors[color] : undefined, className)}
      {...props}
      {...localProps}
    />
  );
};

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

const styles = {
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

const typo = {
  h1: [styles.h1, styles.base, styles.lg],
  h2: [styles.h2, styles.base, styles.lg],
  subtitle1: [styles.subtitle1, styles.base, styles.lg],
  subtitle2: [styles.subtitle2, styles.base, styles.lg],
  body1: [styles.body1, styles.base, styles.sm],
  body2: [styles.body2, styles.base, styles.sm],
  button1: [styles.button1, styles.base, styles.sm],
  button2: [styles.button2, styles.base, styles.sm],
  button3: [styles.button3, styles.base, styles.sm],
  caption1: [styles.caption1, styles.base, styles.sm],
  caption2: [styles.caption2, styles.base, styles.sm],
  caption3: [styles.caption3, styles.base, styles.sm],
};

const colors: Record<string, string> = {
  onbackground1: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-onlight-01);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-ondark-01);
    }
  `,
  onbackground2: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-onlight-02);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-ondark-02);
    }
  `,
  onbackground3: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-onlight-03);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-ondark-03);
    }
  `,
  onbackground4: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-onlight-04);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-ondark-04);
    }
  `,
  oncontent1: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-ondark-01);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-onlight-01);
    }
  `,
  oncontent2: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-ondark-02);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-onlight-02);
    }
  `,
  oncontent_inverse1: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-onlight-01);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-ondark-01);
    }
  `,
  oncontent_inverse3: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-onlight-03);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-ondark-03);
    }
  `,
  primary: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-primary-300);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-primary-200);
    }
  `,
  error: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-error-300);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-error-200);
    }
  `,
  secondary3: css`
    .sendbird-theme--light & {
      color: var(--sendbird-light-secondary-300);
    }
    .sendbird-theme--dark & {
      color: var(--sendbird-dark-secondary-200);
    }
  `,
};
