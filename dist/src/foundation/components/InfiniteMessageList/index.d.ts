import { BaseMessage } from '@sendbird/chat/message';
import { DependencyList, MutableRefObject, ReactNode } from 'react';

type Props = {
    messages: BaseMessage[];
    renderMessage: (props: {
        message: BaseMessage;
        index: number;
    }) => ReactNode;
    messageTopArea?: ReactNode;
    messageBottomArea?: ReactNode;
    overlayArea?: ReactNode;
    onLoadPrev: () => Promise<void>;
    onLoadNext: () => Promise<void>;
    loadThreshold?: number;
    onScrollPosition?: (position: 'top' | 'bottom' | 'middle') => void;
    depsForResetScrollPositionToBottom?: DependencyList;
    scrollPositionRef?: MutableRefObject<number>;
    scrollDistanceFromBottomRef?: MutableRefObject<number>;
    stackDirection?: 'top' | 'bottom';
};
export declare const InfiniteMessageList: import('react').ForwardRefExoticComponent<Props & import('react').RefAttributes<HTMLDivElement>>;
export {};
