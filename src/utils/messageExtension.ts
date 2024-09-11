import { BaseMessage } from '@sendbird/chat/message';

import { extractUrls } from './index';
import { jsonParseSafely } from './messages';
import { FunctionCallAdapterParams, FunctionCallData, WidgetCarouselItem } from '../types';

export const messageExtension = {
  isStreaming(message: BaseMessage) {
    const data = jsonParseSafely(message.data);
    if (typeof data === 'object') {
      return Boolean(data['stream']);
    } else {
      return false;
    }
  },
  isBotWelcomeMsg(message: BaseMessage, botId: string | null) {
    if ((message.isUserMessage() || message.isFileMessage()) && message.sender.userId === botId) {
      const data = jsonParseSafely(message.data);
      // Note: respond_mesg_id and stream is only set when the bot message is a response to a user message.
      return !data?.respond_mesg_id && !data?.stream;
    }

    return false;
  },
  isInputDisabled(message: BaseMessage | null) {
    return !!message?.extendedMessagePayload?.disable_chat_input;
  },
  commerceShopItems: {
    isValid(message: BaseMessage): boolean {
      return ((message.extendedMessagePayload?.commerce_shop_items ?? []) as unknown[]).length > 0;
    },
    getItems(message: BaseMessage): WidgetCarouselItem[] {
      return (message.extendedMessagePayload?.commerce_shop_items ?? []) as WidgetCarouselItem[];
    },
    getValidItems(message: BaseMessage): WidgetCarouselItem[] {
      if (!message.isUserMessage()) return [];
      const urls = extractUrls(message.message);
      return this.getItems(message)
        .filter((it) => urls.includes(it.url))
        .sort((a, b) => urls.indexOf(a.url) - urls.indexOf(b.url));
    },
  },
  functionCalls: {
    parse(message: BaseMessage) {
      const data = jsonParseSafely(message.data);
      return data.function_calls ?? [];
    },
    isFunctionCall(obj: unknown): obj is FunctionCallData {
      return !!obj && typeof obj === 'object' && 'name' in obj && 'request' in obj && 'response_text' in obj;
    },
    getAdapterParams(message: BaseMessage): FunctionCallAdapterParams[] {
      const functionCalls = this.parse(message);
      return functionCalls.filter(this.isFunctionCall).map((fn: FunctionCallData) => ({
        name: fn.name,
        request: fn.request,
        response: jsonParseSafely(fn.response_text),
      }));
    },
  },
};

// const mock = [
//   {
//     title: 'Peanut Butter Spread Simply Crunchy, 16oz (454g)',
//     url: 'https://www.sendbird.com/ai-widget',
//     featured_image:'https://source.unsplash.com/random',
//   },
//   {
//     title: 'Pure Avocado Oil, 16.9 fl oz (320 ml)',
//     url: 'https://www.sendbird.com',
//     featured_image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'Organic Dried Cranberries, With Organic Apple Juice, 5 oz (142 g)',
//     url: 'https://www.sendbird.com',
//     featured_image: 'https://source.unsplash.com/random',
//   },
//   {
//     title:
//       'Long title random product with a lot of text to test the overflow and ellipsis',
//     url: 'https://www.sendbird.com',
//     featured_image: 'https://source.unsplash.com/random',
//   },
// ];
