import React, { createContext, ReactNode, useContext, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { noop } from '../../../utils';

const Container = styled.div({
  // overscrollBehavior: 'none' // it prevents scroll-y in carousel view
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

const ItemContainer = styled.div<{ focused: boolean }>(({ theme, focused }) => ({
  display: 'flex',
  flexShrink: 0,
  scrollSnapAlign: 'start',
  flexDirection: 'column',
  borderRadius: 16,
  overflow: 'hidden',
  border: `1px solid ${theme.borderColor.carouselItem}`,
  backgroundColor: theme.bgColor.carouselItem,
  boxSizing: 'border-box',
  cursor: focused ? 'pointer' : 'auto',
}));

type SnapCarouselProps = {
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
  gap?: number;
  startPadding?: number;
  endPadding?: number;
  style?: React.CSSProperties;
  renderButtons?: (props: { activeIndex: number; onClickPrev(): void; onClickNext(): void }) => ReactNode;
};

const Context = createContext<{
  activeIndex: number;
  scrollTo: (index: number) => void;
}>({ activeIndex: 0, scrollTo: noop });

export const SnapCarousel = ({
  gap = 0,
  startPadding = 0,
  endPadding = 0,
  style,
  children,
  renderButtons,
}: SnapCarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveState] = useState(0);
  const itemLength = React.Children.toArray(children).length;
  const cursorSize = useMemo(() => {
    const containerWidth = (ref.current?.scrollWidth ?? 0) - startPadding;
    return containerWidth / itemLength + gap;
  }, [ref.current?.scrollWidth, itemLength, gap, startPadding]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const idx = Math.round(e.currentTarget.scrollLeft / cursorSize);
    if (idx !== activeIndex) setActiveState(idx);
  };

  const scrollTo = (index: number) => {
    if (ref.current) {
      const nextIdx = Math.min(Math.max(0, index), itemLength - 1);
      ref.current.scroll({
        left: nextIdx * cursorSize,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Context.Provider value={{ activeIndex, scrollTo }}>
      <Container
        onScroll={onScroll}
        ref={ref}
        style={{
          gap,
          scrollPadding: startPadding,
          paddingLeft: startPadding,
          paddingRight: endPadding,
          ...style,
        }}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...child.props, index });
          }
          return null;
        })}
      </Container>
      {renderButtons?.({
        activeIndex,
        onClickPrev() {
          scrollTo(activeIndex - 1);
        },
        onClickNext() {
          scrollTo(activeIndex + 1);
        },
      })}
    </Context.Provider>
  );
};

type SnapCarouselItemProps = {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  index?: number;
};

SnapCarousel.Item = function Item({ children, onClick, height, width, index = 0 }: SnapCarouselItemProps) {
  const { activeIndex } = useContext(Context);
  const focused = index === activeIndex;
  return (
    <ItemContainer focused={focused} onClick={() => focused && onClick?.()} role={'button'} style={{ width, height }}>
      {children}
    </ItemContainer>
  );
};
