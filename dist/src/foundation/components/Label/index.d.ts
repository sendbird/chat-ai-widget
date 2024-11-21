import { default as React, ElementType, HTMLAttributes } from 'react';
import { textColors } from '../../colors/css';
import { SBUFoundationProps } from '../../types';

type AsProp<C extends ElementType> = {
    as?: C;
};
type PropsToOmit<C extends ElementType, P> = keyof (P & AsProp<C>);
type PolymorphicComponentProps<C extends ElementType, Props = NonNullable<unknown>> = Props & AsProp<C> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
type HTMLProps<C extends ElementType> = PolymorphicComponentProps<C, HTMLAttributes<HTMLElement>>;
type Props<C extends ElementType> = SBUFoundationProps<HTMLProps<C> & {
    type?: 'h1' | 'h2' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button1' | 'button2' | 'button3' | 'caption1' | 'caption2' | 'caption3';
    color?: keyof typeof textColors | string;
}>;
export declare const Label: <C extends React.ElementType = "span">({ as, type, color, style, className, testId, ...props }: Props<C>) => import("react/jsx-runtime").JSX.Element;
export {};
