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
  commerceShopItems: {
    isValid(message: UserMessage): boolean {
      return (
        (
          (message.extendedMessagePayload?.commerce_shop_items ??
            []) as unknown[]
        ).length > 0
      );
    },
    getItems(message: UserMessage): CommerceShopItem[] {
      return (message.extendedMessagePayload?.commerce_shop_items ??
        []) as CommerceShopItem[];
    },
    getValidItems(message: UserMessage): CommerceShopItem[] {
      const urls = extractUrls(message.message);
      return this.getItems(message).filter((it) => urls.includes(it.url));
    },
  },
};

// const mock = [
//   {
//     title: 'Peanut Butter Spread Simply Crunchy, 16oz (454g)',
//     url: 'https://www.sendbird.com/ai-widget',
//     featured_image:
//       'https://s3-alpha-sig.figma.com/img/3883/a683/80f9a30fca59c2797348fe8ef5e45e54?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VfnESgKm4~~Kx-tWfAy4mFeiYNo9BoomjmkucyBjHzX-gjtujvPx5ADsv0Q42EJw1YeypCaD2RkfL98t2x87wNTCsg4DBrKE5lB1~t-qdA81DBLnPmfYs5sler9RfrpL-d6sJbWzEtFnCSoTjYHNQBX~RzRwJV8v46VJs2m9UavWqeEJV7VOP3mS7G9qowJlIGiwcoaa1UZ~-60-swMiqK1CEheONUE2hboT7t0JlTT9ihOg3iS6GO1PIDswI4CsxfFuWeulq-43bG5R3yilfrnUQJ8NwR43bh4M~05Vz9cVy16UdQ2zvpscgqa3XmOG1grs4qp08yeppLAKlVnnoQ__',
//   },
//   {
//     title: 'Pure Avocado Oil, 16.9 fl oz (320 ml)',
//     url: 'https://www.sendbird.com',
//     featured_image:
//       'https://s3-alpha-sig.figma.com/img/acb0/a903/f787ed7085120bb59b90c5c598182d9a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7bdYY1cOKhbpAnyji82CztkDCAbcpiUqklp4Rx5sJpa1ogvWQa~NBGzdKpbPokTVGuwat6LmkfkoQaCCE7JtTElbXCd2~dqEezlz6iuh8PIo6Khq6WXkJ4JdcHsbvcU1oofSTIaz2Hw5Em9BrFCy7XhRHNAi5T861UJcbcoSZGh~WsX1HyRugNjtnTtpXSO5-rlKcCyDO-fMnMPS1ySn4MFlHvh3bVEE2WERLgXICgfQwqQ3s~kyNSBOImMefvI9f5BQAIORLv6~HptIMjTUnS-gE-sWAsLgpHjwdpWTjABtTB8NEx-lZ0vhaSSluAaGFfXxoOiq5S91BoQTDEzKg__',
//   },
//   {
//     title: 'Organic Dried Cranberries, With Organic Apple Juice, 5 oz (142 g)',
//     url: 'https://www.sendbird.com',
//     featured_image:
//       'https://s3-alpha-sig.figma.com/img/c3d0/a723/e2488dd1e1b2fb86dbfb33e5162a0d79?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YEnUpxgTLTxMLdpmcLg~~mzpiY0R3A6S6wrRMhjYuoS0rehA4eOXFopDwFIc9GiUjedn47l-FJivHZHLCwevDa0WVg3~msYPffBE92m6i~VvFTFpoEK-RJV0O6lQNe7p3eSO1mPlmi5wB45KLICnE5E0bqYS6EqFX3jvv0Vs7OggFUGeGqwWCutmhF6uSLqas0DiYIXmiDoKnEbo2niD6frETaE3Vggkm7PKJgOWFwza3dlf3LwJPId71NQ2RjCboIlcCvAYG-OQBt74oDTRWXRtQyJWmxnV1Nf8GqZM~RQrCGhgKLLxwWgXEHwZKk6dCONtvDUWOv9Wo4WHP6UyWQ__',
//   },
//   {
//     title:
//       'Long title random product with a lot of text to test the overflow and ellipsis',
//     url: 'https://www.sendbird.com',
//     featured_image: 'https://source.unsplash.com/random',
//   },
// ];
