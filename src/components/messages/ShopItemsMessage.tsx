import { UserMessage } from '@sendbird/chat/message';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { openURL } from '../../utils';
import { messageExtension } from '../../utils/messageExtension';
import { SnapCarousel } from '../ui/SnapCarousel';

const listPadding = 16;
const avatarSize = 28;
const avatarMargin = 8;
const leftMargin = avatarSize + avatarMargin + listPadding;

const BodyWrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
});
const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  width: '100%',
});
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

type Props = {
  message: UserMessage;
  textBody: ReactNode;
  streamingBody: ReactNode;
};
export const ShopItemsMessage = ({
  message,
  textBody,
  streamingBody,
}: Props) => {
  const items = messageExtension.commerceShopItems.getValidItems(message);
  const isStreaming = messageExtension.isStreaming(message);
  const shouldRenderCarouselBody = isStreaming || items.length > 0;
  const renderCarouselBody = () => {
    if (isStreaming) return streamingBody;

    return (
      <SnapCarousel
        startPadding={leftMargin}
        endPadding={listPadding}
        gap={avatarMargin}
        style={{
          flexShrink: 0,
          flexBasis: '100%',
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

  return (
    <Container>
      <BodyWrapper>{textBody}</BodyWrapper>
      {shouldRenderCarouselBody && (
        <BodyWrapper>{renderCarouselBody()}</BodyWrapper>
      )}
    </Container>
  );
};
