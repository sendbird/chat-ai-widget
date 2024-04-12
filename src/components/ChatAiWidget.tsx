import '@sendbird/uikit-react/dist/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { Chat } from './Chat';
import SBComponent from './SBComponent';
import WidgetWindow from './WidgetWindow';
import { getColorBasedOnSaturation } from '../colors';
import { Constant, MAX_Z_INDEX } from '../const';
import { ConstantStateProvider } from '../context/ConstantContext';
import { useChannelStyle } from '../hooks/useChannelStyle';
import useMobileView from '../hooks/useMobileView';
import { ReactComponent as ArrowDownIcon } from '../icons/ic-arrow-down.svg';
import { ReactComponent as ChatBotIcon } from '../icons/icon-widget-chatbot.svg';
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

const StyledWidgetButtonWrapper = styled.button<{ accentColor: string }>`
  position: fixed;
  z-index: ${MAX_Z_INDEX};
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  background: ${({ accentColor }) => accentColor};
  border-radius: 50%;
  color: white;
  transition: all 0.3s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 16px 24px 2px rgba(33, 33, 33, 0.12),
    0px 6px 30px 5px rgba(33, 33, 33, 0.08),
    0px 6px 10px -5px rgba(33, 33, 33, 0.04);

  span {
    position: absolute;
    transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;
    width: 32px;
    height: 32px;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      path {
        fill: ${({ accentColor }) => getColorBasedOnSaturation(accentColor)};
      }
    }
  }

  &:hover {
    transition: transform 250ms cubic-bezier(0.33, 0, 0, 1);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.8);
  }

  svg {
    path {
      fill: ${({ accentColor }) => getColorBasedOnSaturation(accentColor)};
    }
  }
`;

const StyledWidgetIcon = styled.span<{ isOpen: boolean }>`
  ${({ isOpen }) => {
    return isOpen
      ? css`
          opacity: 0;
          transform: rotate(30deg) scale(0);
        `
      : css`
          opacity: 1;
          transform: rotate(0deg);
        `;
  }}
`;

const StyledArrowIcon = styled.span<{ isOpen: boolean }>`
  ${({ isOpen }) => {
    return isOpen
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(-90deg) scale(0);
        `;
  }}
`;

interface ToggleButtonProps {
  onClick: () => void;
  accentColor: string;
  isOpen: boolean;
}
const WidgetToggleButton = ({
  onClick,
  accentColor,
  isOpen,
}: ToggleButtonProps) => {
  return (
    <StyledWidgetButtonWrapper
      id="aichatbot-widget-button"
      onClick={onClick}
      accentColor={accentColor}
    >
      <StyledWidgetIcon isOpen={isOpen}>
        <ChatBotIcon />
      </StyledWidgetIcon>
      <StyledArrowIcon isOpen={isOpen}>
        <ArrowDownIcon />
      </StyledArrowIcon>
    </StyledWidgetButtonWrapper>
  );
};

export interface Props extends Partial<Constant> {
  applicationId: string;
  botId: string;
  hashedKey?: string;
  autoOpen?: boolean;
  renderWidgetToggleButton?: (props: ToggleButtonProps) => React.ReactElement;
}

const Component = ({ ...props }: Props) => {
  const { isFetching, ...channelStyle } = useChannelStyle();
  const [isOpen, setIsOpen] = useState<boolean>(
    isMobile
      ? // we don't want to open the widget window automatically on mobile view
        false
      : props.autoOpen ?? channelStyle.autoOpen ?? false
  );
  const { width: mobileContainerWidth } = useMobileView({
    enableMobileView: props.enableMobileView,
    isWidgetOpen: isOpen,
  });
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

  const chatProps = {
    ...props,
    isOpen,
    setIsOpen,
  };
  return (
    <SBComponent>
      {isMobile && isOpen ? (
        <MobileContainer
          width={mobileContainerWidth}
          id="aichatbot-widget-window"
        >
          <Chat {...chatProps} />
        </MobileContainer>
      ) : (
        <>
          <WidgetWindow {...chatProps} />
          {props.renderWidgetToggleButton?.(toggleButtonProps) ||
            (!isFetching && <WidgetToggleButton {...toggleButtonProps} />)}
        </>
      )}
    </SBComponent>
  );
};

export default function ChatAiWidget(props: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 5000,
      },
    },
  });
  // If env is not provided, prop will be used instead.
  // But Either should be provided.
  const CHAT_WIDGET_APP_ID =
    import.meta.env.VITE_CHAT_WIDGET_APP_ID ?? props.applicationId;
  const CHAT_WIDGET_BOT_ID =
    import.meta.env.VITE_CHAT_WIDGET_BOT_ID ?? props.botId;

  return (
    <QueryClientProvider client={queryClient}>
      <ConstantStateProvider
        {...props}
        applicationId={CHAT_WIDGET_APP_ID}
        botId={CHAT_WIDGET_BOT_ID}
      >
        <Component {...props} />
      </ConstantStateProvider>
    </QueryClientProvider>
  );
}
