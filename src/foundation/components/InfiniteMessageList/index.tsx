import { BaseMessage } from '@sendbird/chat/message';
import {
  DependencyList,
  forwardRef,
  MutableRefObject,
  ReactNode,
  UIEventHandler,
  useLayoutEffect,
  useRef,
} from 'react';

import { noop } from '../../../utils';

type Props = {
  messages: BaseMessage[];
  renderMessage: (props: { message: BaseMessage; index: number }) => ReactNode;

  messageTopArea?: ReactNode;
  messageBottomArea?: ReactNode;
  overlayArea?: ReactNode;

  onLoadPrev: () => Promise<void>;
  onLoadNext: () => Promise<void>;
  loadThreshold?: number;

  onScrollPosition?: (position: 'top' | 'bottom' | 'middle') => void;
  depsForResetScrollPositionToBottom?: DependencyList;

  scrollPositionRef?: MutableRefObject<number>;
  scrollDistanceFromBottomRef?: MutableRefObject<number>;
};

export const InfiniteMessageList = forwardRef<HTMLDivElement, Props>(function InfiniteMessageList(props, ref) {
  const {
    messages,
    renderMessage,

    messageTopArea,
    messageBottomArea,
    overlayArea,

    onLoadPrev,
    onLoadNext,
    loadThreshold = 0.05,

    onScrollPosition = noop,
    depsForResetScrollPositionToBottom,

    scrollPositionRef: _scrollPositionRef,
    scrollDistanceFromBottomRef: _scrollDistanceFromBottomRef,
  } = props;

  const listRef = ref && 'current' in ref ? ref : { current: null };
  const isFetching = useRef(false);
  const direction = useRef<'top' | 'bottom'>();
  const oldScrollTop = useRef(0);

  const internal_scrollPositionRef = useRef(0);
  const internal_scrollDistanceFromBottomRef = useRef(0);
  const scrollPositionRef = _scrollPositionRef ?? internal_scrollPositionRef;
  const scrollDistanceFromBottomRef = _scrollDistanceFromBottomRef ?? internal_scrollDistanceFromBottomRef;

  // SideEffect: scroll to bottom on initialized
  useLayoutEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, depsForResetScrollPositionToBottom);

  // SideEffect: keep scroll position
  useLayoutEffect(() => {
    if (listRef.current) {
      if (direction.current === 'top') {
        listRef.current.scrollTop = listRef.current.scrollHeight - scrollPositionRef.current;
      }
      if (direction.current === 'bottom') {
        listRef.current.scrollTop = oldScrollTop.current;
      }
      direction.current = undefined;
    }
  }, [listRef.current, messages.length]);

  const handleScroll: UIEventHandler<HTMLDivElement> = async () => {
    if (!listRef.current) return;
    const list = listRef.current;

    onScrollPosition(getReachedStatus(list));

    scrollPositionRef.current = list.scrollHeight - list.scrollTop;
    scrollDistanceFromBottomRef.current = scrollPositionRef.current - list.clientHeight;
    oldScrollTop.current = list.scrollTop;

    if (isFetching.current) return;

    const threshold = list.clientHeight * Math.min(Math.max(0, loadThreshold), 1);
    if (list.scrollTop <= threshold) {
      isFetching.current = true;
      direction.current = 'top';
      await onLoadPrev();
      isFetching.current = false;
    } else if (list.scrollHeight - list.scrollTop - list.clientHeight <= threshold) {
      isFetching.current = true;
      direction.current = 'bottom';
      await onLoadNext();
      isFetching.current = false;
    } else {
      direction.current = undefined;
    }
  };

  return (
    <div className="sendbird-conversation__scroll-container">
      <div className="sendbird-conversation__padding" />
      <div
        ref={listRef}
        className="sendbird-conversation__messages-padding"
        data-testid="sendbird-message-list-container"
        onScroll={handleScroll}
      >
        {messageTopArea}
        {messages.map((message, index) => renderMessage({ message, index }))}
        {messageBottomArea}
      </div>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>{overlayArea}</div>
    </div>
  );
});

const r = 10;
function getReachedStatus(element: HTMLDivElement) {
  const distanceFromTop = element.scrollTop;
  if (distanceFromTop <= r) {
    return 'top';
  }

  const distanceFromBottom = element.scrollHeight - (element.scrollTop + element.clientHeight);
  if (distanceFromBottom <= r) {
    return 'bottom';
  }

  return 'middle';
}
