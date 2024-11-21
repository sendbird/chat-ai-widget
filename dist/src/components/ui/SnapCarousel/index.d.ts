import { default as React, ReactNode } from 'react';

type SnapCarouselProps = {
    width?: number | string;
    height?: number | string;
    children: React.ReactNode;
    gap?: number;
    startPadding?: number;
    endPadding?: number;
    style?: React.CSSProperties;
    renderButtons?: (props: {
        activeIndex: number;
        onClickPrev(): void;
        onClickNext(): void;
    }) => ReactNode;
};
export declare const SnapCarousel: {
    ({ gap, startPadding, endPadding, style, children, renderButtons, }: SnapCarouselProps): import("react/jsx-runtime").JSX.Element;
    Item({ children, onClick, height, width, index }: SnapCarouselItemProps): import("react/jsx-runtime").JSX.Element;
};
type SnapCarouselItemProps = {
    children: React.ReactNode;
    width?: number | string;
    height?: number | string;
    onClick?: () => void;
    index?: number;
};
export {};
