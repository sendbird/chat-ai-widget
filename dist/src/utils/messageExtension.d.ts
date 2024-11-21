import { BaseMessage } from '@sendbird/chat/message';
import { FunctionCallAdapterParams, FunctionCallData, WidgetCarouselItem } from '../types';

export declare const messageExtension: {
    isStreaming(message: BaseMessage): boolean;
    isBotWelcomeMsg(message: BaseMessage, botId: string | null): boolean;
    isInputDisabled(message: BaseMessage | null): boolean;
    commerceShopItems: {
        isValid(message: BaseMessage): boolean;
        getItems(message: BaseMessage): WidgetCarouselItem[];
        getValidItems(message: BaseMessage): WidgetCarouselItem[];
    };
    functionCalls: {
        parse(message: BaseMessage): any;
        isFunctionCall(obj: unknown): obj is FunctionCallData;
        getAdapterParams(message: BaseMessage): FunctionCallAdapterParams[];
    };
};
