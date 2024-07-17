import { css, cx } from '@linaria/core';
import React, { ElementType, HTMLAttributes } from 'react';

import { textColors } from './colors/css';
import { useLocalProps } from './hooks/useLocalProps';
import { SBUFoundationProps } from './types';

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
  color?: keyof typeof textColors | string;
};

export const Label = <C extends ElementType = 'span'>({
  as,
  type,
  color,
  style,
  className,
  ...props
}: SBUFoundationProps<Props<C>>) => {
  const Component = as || 'span';
  const localProps = useLocalProps(props);
  const typoClassNames = type ? typo[type] : [];
  const colorClassName = color ? textColors[color as keyof typeof textColors] : undefined;
  return (
    <Component
      className={cx('sendbird-label', ...typoClassNames, colorClassName, className)}
      style={{ color: color && !colorClassName ? color : undefined, ...style }}
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
