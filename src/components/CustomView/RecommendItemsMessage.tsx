import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { FunctionCallMessage } from '../../utils/messages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  font-family: var(--sendbird-font-family-custom);
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
  padding: 12px;
`;

const ItemsText = styled(Label)`
  font-weight: 500;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceText = styled(Label)`
  font-weight: bold;
`;

const OriginalPriceText = styled(Label)`
  padding-left: 4px;
  text-decoration: line-through;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  cursor: grab;
  gap: 10px;
  padding: 8px 0;
  user-select: none;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 160px;
  display: flex;
  background: #ffffff;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

interface Item {
  image: string;
  name: string;
  price: number;
  original?: number;
}

const RecommendItemsMessage = ({
  message,
}: {
  message: FunctionCallMessage;
}) => {
  const items = message?.recommend_items as unknown as Item[];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    setStartX(e.pageX);
    const scrollLeft = carouselRef.current?.scrollLeft ?? 0;
    setScrollStart(scrollLeft);
    e.preventDefault();
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const moveX = e.pageX - startX;
    const newScrollLeft = scrollStart - moveX;

    if (carouselRef.current) {
      carouselRef.current.scrollLeft = newScrollLeft;
    }
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const { deltaX, deltaY } = e;
    const isHorizontalScroll = Math.abs(deltaX) > Math.abs(deltaY);

    if (isHorizontalScroll) {
      e.preventDefault();
      carouselRef.current.scrollLeft += deltaX;
    } else {
      e.preventDefault();
      carouselRef.current.scrollLeft += deltaY;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
      <Container>
        <Label type={LabelTypography.BODY_1} color={LabelColors.ONBACKGROUND_1}>
          Here are our top sells.
        </Label>
      </Container>
      <CarouselContainer
        ref={carouselRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseLeave={onDragEnd}
        onMouseUp={onDragEnd}
        onWheel={onWheel}
      >
        {items.map((item) => (
          <CarouselItem key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '160px',
                height: '140px',
                borderTopRightRadius: '8px',
                borderTopLeftRadius: '8px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <div
              style={{
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <ItemsText
                type={LabelTypography.BODY_1}
                color={LabelColors.ONBACKGROUND_1}
              >
                {item.name}
              </ItemsText>
              <div>
                <PriceText
                  type={LabelTypography.SUBTITLE_1}
                  color={LabelColors.ONBACKGROUND_1}
                >
                  ${item.price}
                </PriceText>
                {item.original && (
                  <OriginalPriceText
                    type={LabelTypography.SUBTITLE_2}
                    color={LabelColors.ONBACKGROUND_2}
                  >
                    {item.original}
                  </OriginalPriceText>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContainer>
    </div>
  );
};

export default RecommendItemsMessage;
