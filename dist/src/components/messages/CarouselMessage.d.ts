import { ReactNode } from 'react';
import { WidgetCarouselItem } from '../../types';

type Props = {
    streaming: boolean;
    textBody: ReactNode;
    streamingBody: ReactNode;
    items: WidgetCarouselItem[];
};
export declare const CarouselMessage: ({ streaming, textBody, streamingBody, items }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
