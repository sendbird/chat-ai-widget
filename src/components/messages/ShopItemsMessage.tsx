import { BaseMessage } from '@sendbird/chat/message';
import styled from 'styled-components';

import { openURL } from '../../utils';
import { messageExtension } from '../../utils/messageExtension';
import { SnapCarousel } from '../ui/SnapCarousel';

const listPadding = 16;
const avatarSize = 28;
const avatarMargin = 8;
const leftMargin = avatarSize + avatarMargin + listPadding;

const Text = styled.div`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-word;
  font-size: 14px;
  font-weight: 400;
  color: var(--sendbird-light-onlight-01);
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: 134px;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
`;

type Props = { message: BaseMessage };
export const ShopItemsMessage = ({ message }: Props) => {
  const items = messageExtension.commerceShopItems.get(message);

  return (
    <SnapCarousel
      startPadding={leftMargin}
      gap={avatarMargin}
      style={{
        flexShrink: 0,
        flexBasis: `calc(100% + ${listPadding}px)`,
        marginLeft: -leftMargin,
      }}
    >
      {items.map((item, index) => (
        <SnapCarousel.Item
          width={240}
          height={198}
          key={index}
          onClick={() => openURL(item.url)}
        >
          <Image src={item.featured_image} alt={item.title} />
          <div style={{ padding: 12 }}>
            <Text>{item.title}</Text>
          </div>
        </SnapCarousel.Item>
      ))}
    </SnapCarousel>
  );
};
