import { UserMessage } from '@sendbird/chat/message';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { useConstantState } from '../../context/ConstantContext';
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
  position: 'relative',
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
const Button = styled.button({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  height: 50,
  width: 50,
});

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
  const { isMobileView } = useConstantState();
  const items = messageExtension.commerceShopItems.getValidItems(message);
  const isStreaming = messageExtension.isStreaming(message);
  const shouldRenderCarouselBody = isStreaming || items.length > 0;
  const shouldRenderButtons = !isMobileView && items.length >= 2;
  const renderCarouselBody = () => {
    if (isStreaming) return streamingBody;

    return (
      <SnapCarousel
        startPadding={leftMargin}
        endPadding={listPadding}
        gap={avatarMargin}
        style={{ marginLeft: -leftMargin, marginRight: -listPadding }}
        renderButtons={({ activeIndex, onClickPrev, onClickNext }) =>
          shouldRenderButtons && (
            <>
              {activeIndex !== 0 && (
                <Button style={{ left: -leftMargin }} onClick={onClickPrev}>
                  {'left'}
                </Button>
              )}
              {activeIndex !== items.length - 1 && (
                <Button style={{ right: -listPadding }} onClick={onClickNext}>
                  {'right'}
                </Button>
              )}
            </>
          )
        }
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
