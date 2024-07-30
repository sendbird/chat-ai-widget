import { BaseMessage, UserMessage } from '@sendbird/chat/message';

import { extractUrls } from './index';
import { parseMessageDataSafely } from './messages';

export interface CommerceShopItem {
  title: string;
  url: string;
  featured_image: string;
}

export const messageExtension = {
  isStreaming(message: BaseMessage) {
    const data = parseMessageDataSafely(message.data);
    if (typeof data === 'object') {
      return Boolean(data['stream']);
    } else {
      return false;
    }
  },
  isBotWelcomeMsg(message: BaseMessage, botId: string | null) {
    if ((message.isUserMessage() || message.isFileMessage()) && message.sender.userId === botId) {
      const data = parseMessageDataSafely(message.data);
      // Note: respond_mesg_id and stream is only set when the bot message is a response to a user message.
      return !data?.respond_mesg_id && !data?.stream;
    }

    return false;
  },
  commerceShopItems: {
    isValid(message: UserMessage): boolean {
      return ((message.extendedMessagePayload?.commerce_shop_items ?? []) as unknown[]).length > 0;
    },
    getItems(message: UserMessage): CommerceShopItem[] {
      return (message.extendedMessagePayload?.commerce_shop_items ?? []) as CommerceShopItem[];
    },
    getValidItems(message: UserMessage): CommerceShopItem[] {
      const urls = extractUrls(message.message);
      return this.getItems(message)
        .filter((it) => urls.includes(it.url))
        .sort((a, b) => urls.indexOf(a.url) - urls.indexOf(b.url));
    },
  },
  isInputDisabled(message: BaseMessage | null) {
    return !!message?.extendedMessagePayload?.disable_chat_input;
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
