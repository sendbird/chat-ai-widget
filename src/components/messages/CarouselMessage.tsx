import { UserMessage } from '@sendbird/chat/message';
import { ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';

import { useConstantState } from '../../context/ConstantContext';
import ChevronLeft from '../../icons/chevron-left.svg';
import ChevronRight from '../../icons/chevron-right.svg';
import { WidgetCarouselItem } from '../../types';
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

const ItemText = styled.div`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-word;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor.carouselItem};
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
  background-color: ${({ theme }) => theme.bgColor.carouselItem};
`;

const Button = styled.button<{ direction: 'left' | 'right' }>(({ theme, direction }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  border: 'none',
  cursor: 'pointer',
  borderRadius: direction === 'right' ? '100px 0px 0px 100px' : '0px 100px 100px 0px',
  padding: direction === 'right' ? '8px 8px 8px 12px' : '8px 12px 8px 8px',
  backgroundColor: theme.bgColor.carouselButton,
  boxShadow:
    '0px 8px 10px 1px rgba(13, 13, 13, 0.12), 0px 3px 14px 2px rgba(13, 13, 13, 0.08), 0px 3px 5px -3px rgba(13, 13, 13, 0.04)',
  '&:hover': {
    backgroundColor: theme.bgColor.hover.carouselButton,
  },
}));

type Props = {
  message: UserMessage;
  textBody: ReactNode;
  streamingBody: ReactNode;
  items: WidgetCarouselItem[];
};
export const CarouselMessage = ({ message, textBody, streamingBody, items }: Props) => {
  const theme = useTheme();
  const { isMobileView } = useConstantState();

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
                <Button style={{ left: -leftMargin }} onClick={onClickPrev} direction={'left'}>
                  <ChevronLeft width={24} height={24} fill={theme.bgColor.carouselButtonIcon} />
                </Button>
              )}
              {activeIndex !== items.length - 1 && (
                <Button style={{ right: -listPadding }} onClick={onClickNext} direction={'right'}>
                  <ChevronRight width={24} height={24} fill={theme.bgColor.carouselButtonIcon} />
                </Button>
              )}
            </>
          )
        }
      >
        {items.map((item, index) => (
          <SnapCarousel.Item width={240} height={198} key={index} onClick={() => openURL(item.url)}>
            <Image src={item.featured_image} alt={item.title} />
            <div
              style={{
                padding: 12,
                backgroundColor: theme.bgColor.carouselItem,
              }}
            >
              <ItemText>{item.title}</ItemText>
            </div>
          </SnapCarousel.Item>
        ))}
      </SnapCarousel>
    );
  };

  return (
    <Container>
      <BodyWrapper>{textBody}</BodyWrapper>
      {shouldRenderCarouselBody && <BodyWrapper>{renderCarouselBody()}</BodyWrapper>}
    </Container>
  );
};
