import React, { createContext, useContext, useMemo, useRef } from 'react';
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
  endPadding?: number;
  style?: React.CSSProperties;
};

const Context = createContext<{
  activeIndex: React.MutableRefObject<number>;
  scrollTo: (index: number) => void;
}>({ activeIndex: { current: 0 }, scrollTo: noop });

export const SnapCarousel = ({
  gap = 0,
  startPadding = 0,
  endPadding = 0,
  style,
  children,
}: SnapCarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);
  const itemLength = React.Children.toArray(children).length;
  const cursorSize = useMemo(() => {
    const containerWidth = (ref.current?.scrollWidth ?? 0) - startPadding;
    return containerWidth / itemLength + gap;
  }, [ref.current?.scrollWidth, itemLength, gap, startPadding]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const idx = Math.round(e.currentTarget.scrollLeft / cursorSize);
    if (idx !== activeIndex.current) activeIndex.current = idx;
  };

  const scrollTo = (index: number) => {
    if (ref.current) {
      activeIndex.current = Math.min(Math.max(0, index), itemLength - 1);
      ref.current.scroll({
        left: activeIndex.current * cursorSize,
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
        {/*<button
          style={{ position: 'absolute', left: -16 }}
          onClick={() => scrollTo(activeIndex.current - 1)}
        >
          {'left'}
        </button>*/}
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...child.props, index });
          }
          return null;
        })}
        {/*<button
          style={{ position: 'absolute', right: -16 }}
          onClick={() => scrollTo(activeIndex.current + 1)}
        >
          {'right'}
        </button>*/}
      </Container>
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

SnapCarousel.Item = function Item({
  children,
  onClick,
  height,
  width,
  index = 0,
}: SnapCarouselItemProps) {
  const { activeIndex } = useContext(Context);
  return (
    <ItemContainer
      onClick={() => index === activeIndex.current && onClick?.()}
      role={'button'}
      style={{ width, height }}
    >
      {children}
    </ItemContainer>
  );
};
