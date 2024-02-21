import '@sendbird/uikit-react/dist/index.css';
import '../css/index.css';
import { Fragment, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import Chat from './Chat';
import WidgetWindow from './WidgetWindow';
import { Constant } from '../const';
import useMobileView from '../hooks/useMobileView';
import { ReactComponent as ArrowDownIcon } from '../icons/ic-arrow-down.svg';
import { ReactComponent as ChatBotIcon } from '../icons/icon-widget-chatbot.svg';
import { isMobile } from '../utils';

const MobileContainer = styled.div<{ width: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ width }) => `${width}px`};
  height: 100%;
  overflow: hidden;
  background-color: white;
`;

const StyledWidgetButtonWrapper = styled.button`
  position: fixed;
  z-index: 10000;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #4dcd90 -17.35deg,
    #6210cc 80.63deg,
    #6210cc 176.25deg,
    #4dcd90 342.65deg,
    #6210cc 440.63deg
  );
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

    path {
      fill: white;
    }
  }

  &:hover {
    transition: transform 250ms cubic-bezier(0.33, 0, 0, 1);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.8);
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

const setCookie = (cookieName: string) => {
  if (!document) return;
  const HOUR_IN_MS = 3600000;
  const date = new Date();
  const time = date.getTime();
  const expireTime = time + HOUR_IN_MS * 48;
  date.setTime(expireTime);
  const expireTimeInString = date.toUTCString();
  document.cookie = `${cookieName}=true;expires=${expireTimeInString};path=/`;
};

const getCookie = (cookieName: string) => {
  if (!document) return [];
  const cookies = document.cookie.split(';');
  return cookies.filter((cookie) => cookie.includes(`${cookieName}=`));
};

export interface Props extends Partial<Constant> {
  applicationId?: string;
  botId?: string;
  hashedKey?: string;
  autoOpen?: boolean;
}

const ChatAiWidget = (props: Props) => {
  const { autoOpen = true, enableMobileView } = props;
  const [isOpen, setIsOpen] = useState<boolean>(
    isMobile
      ? false // we don't want to open the widget window automatically on mobile view
      : autoOpen
  );
  const timer = useRef<NodeJS.Timeout | null>(null);

  const { width: mobileContainerWidth } = useMobileView({
    enableMobileView,
    isWidgetOpen: isOpen,
  });

  const buttonClickHandler = () => {
    if (timer.current !== null) {
      clearTimeout(timer.current as NodeJS.Timeout);
      timer.current = null;
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (getCookie('chatbot').length === 0 && autoOpen && !isMobile) {
      timer.current = setTimeout(() => setIsOpen(() => true), 1000);
      setCookie('chatbot');
    }
  }, []);

  return (
    <>
      {isMobile && isOpen ? (
        <MobileContainer width={mobileContainerWidth}>
          <Chat {...props} isOpen={isOpen} setIsOpen={setIsOpen} />
        </MobileContainer>
      ) : (
        <Fragment>
          <WidgetWindow isOpen={isOpen} setIsOpen={setIsOpen} {...props} />
          <StyledWidgetButtonWrapper onClick={buttonClickHandler}>
            <StyledWidgetIcon isOpen={isOpen}>
              <ChatBotIcon />
            </StyledWidgetIcon>
            <StyledArrowIcon isOpen={isOpen}>
              <ArrowDownIcon />
            </StyledArrowIcon>
          </StyledWidgetButtonWrapper>
        </Fragment>
      )}
    </>
  );
};

export default ChatAiWidget;
