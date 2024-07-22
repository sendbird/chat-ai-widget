import { cx } from '@linaria/atomic';
import React, { ElementType, HTMLAttributes } from 'react';

import { labelStyles } from './css';
import { textColors, themedColorVars } from '../../colors/css';
import { useLocalProps } from '../../hooks/useLocalProps';
import { SBUFoundationProps } from '../../types';

type AsProp<C extends ElementType> = {
  as?: C;
};
type PropsToOmit<C extends ElementType, P> = keyof (P & AsProp<C>);
type PolymorphicComponentProps<C extends ElementType, Props = NonNullable<unknown>> = Props &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type HTMLProps<C extends ElementType> = PolymorphicComponentProps<C, HTMLAttributes<HTMLElement>>;

type Props<C extends ElementType> = SBUFoundationProps<
  HTMLProps<C> & {
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
  }
>;

export const Label = <C extends ElementType = 'span'>({
  as,
  type,
  color,
  style,
  className,
  testId = 'sendbird-label',
  ...props
}: Props<C>) => {
  const Component = as || 'span';
  const localProps = useLocalProps({ testId });
  const typoClassNames = type ? typo[type] : [];
  const colorClassName = color ? textColors[color as keyof typeof textColors] : undefined;
  return (
    <Component
      className={cx('sendbird-label', ...typoClassNames, themedColorVars, colorClassName, className)}
      style={{ color: color && !colorClassName ? color : undefined, ...style }}
      {...props}
      {...localProps}
    />
  );
};
const typo = {
  h1: [labelStyles.h1, labelStyles.base, labelStyles.lg],
  h2: [labelStyles.h2, labelStyles.base, labelStyles.lg],
  subtitle1: [labelStyles.subtitle1, labelStyles.base, labelStyles.lg],
  subtitle2: [labelStyles.subtitle2, labelStyles.base, labelStyles.lg],
  body1: [labelStyles.body1, labelStyles.base, labelStyles.sm],
  body2: [labelStyles.body2, labelStyles.base, labelStyles.sm],
  button1: [labelStyles.button1, labelStyles.base, labelStyles.sm],
  button2: [labelStyles.button2, labelStyles.base, labelStyles.sm],
  button3: [labelStyles.button3, labelStyles.base, labelStyles.sm],
  caption1: [labelStyles.caption1, labelStyles.base, labelStyles.sm],
  caption2: [labelStyles.caption2, labelStyles.base, labelStyles.sm],
  caption3: [labelStyles.caption3, labelStyles.base, labelStyles.sm],
};
