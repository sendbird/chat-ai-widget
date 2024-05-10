import React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  // overscrollBehavior: 'none' // it prevents scroll-y in carousel view
  zIndex: 24,
  display: 'flex',
  flexDirection: 'row',
  scrollSnapType: 'x mandatory',
  overflowY: 'scroll',
  gap: 12,
  scrollPadding: 0,
  paddingLeft: 0,
  scrollbarWidth: 'none',
  userSelect: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

const ItemContainer = styled.div({
  display: 'flex',
  flexShrink: 0,
  scrollSnapAlign: 'start',
  flexDirection: 'column',
  borderRadius: 16,
  overflow: 'hidden',
  border: '1px solid var(--sendbird-light-onlight-04)',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  cursor: 'pointer',
});

type SnapCarouselProps = {
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
  gap?: number;
  startPadding?: number;
  style?: React.CSSProperties;
};

export const SnapCarousel = ({
  gap,
  startPadding,
  style,
  children,
}: SnapCarouselProps) => {
  return (
    <Container
      style={{
        gap,
        scrollPadding: startPadding,
        paddingLeft: startPadding,
        ...style,
      }}
    >
      {children}
    </Container>
  );
};

type SnapCarouselItemProps = {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
};

SnapCarousel.Item = function Item({
  children,
  onClick,
  height,
  width,
}: SnapCarouselItemProps) {
  return (
    <ItemContainer onClick={onClick} role={'button'} style={{ width, height }}>
      {children}
    </ItemContainer>
  );
};
