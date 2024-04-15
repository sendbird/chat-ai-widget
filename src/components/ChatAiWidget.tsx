import '@sendbird/uikit-react/dist/index.css';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Chat from './Chat';
import ProviderContainer, {
  type ProviderContainerProps,
} from './ProviderContainer';
import WidgetToggleButton from './WidgetToggleButton';
import WidgetWindow from './WidgetWindow';
import { MAX_Z_INDEX } from '../const';
import { useWidgetOpen } from '../context/WidgetOpenContext';
import { useChannelStyle } from '../hooks/useChannelStyle';
import useMobileView from '../hooks/useMobileView';
import { isMobile } from '../utils';

const MobileContainer = styled.div<{ width: number }>`
  position: fixed;
  z-index: ${MAX_Z_INDEX};
  top: 0;
  left: 0;
  width: ${({ width }) => `${width}px`};
  height: 100%;
  overflow: hidden;
  background-color: white;
`;

const Component = (props: ProviderContainerProps) => {
  const { isFetching, ...channelStyle } = useChannelStyle();
  const { isOpen, setIsOpen } = useWidgetOpen();
  const { width: mobileContainerWidth } = useMobileView();
  const timer = useRef<NodeJS.Timeout | null>(null);

  const buttonClickHandler = () => {
    if (timer.current !== null) {
      clearTimeout(timer.current as NodeJS.Timeout);
      timer.current = null;
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isMobile && (props.autoOpen || channelStyle.autoOpen)) {
      timer.current = setTimeout(() => setIsOpen(true), 100);
    }
  }, [channelStyle.autoOpen, props.autoOpen]);

  const toggleButtonProps = {
    onClick: buttonClickHandler,
    accentColor: channelStyle.accentColor,
    isOpen,
  };

  return isMobile && isOpen ? (
    <MobileContainer width={mobileContainerWidth} id="aichatbot-widget-window">
      <Chat />
    </MobileContainer>
  ) : (
    <>
      <WidgetWindow />
      {props.renderWidgetToggleButton?.(toggleButtonProps) ||
        (!isFetching && <WidgetToggleButton {...toggleButtonProps} />)}
    </>
  );
};

export default function ChatAiWidget(props: ProviderContainerProps) {
  return (
    <ProviderContainer {...props}>
      <Component {...props} />
    </ProviderContainer>
  );
}
