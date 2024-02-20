import '@sendbird/uikit-react/dist/index.css';
import '../css/index.css';
import { Fragment, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import Chat from './Chat';
import WidgetWindow from './WidgetWindow';
import { Constant } from '../const';
import { ReactComponent as ArrowDownIcon } from '../icons/ic-arrow-down.svg';
import { ReactComponent as ChatBotIcon } from '../icons/icon-widget-chatbot.svg';

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
  const { autoOpen = false } = props;
  const [isOpen, setIsOpen] = useState<boolean>(autoOpen ?? false);
  const [isMobile] = useState<boolean>(window.innerWidth <= 768);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const buttonClickHandler = () => {
    if (timer.current !== null) {
      clearTimeout(timer.current as NodeJS.Timeout);
      timer.current = null;
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 창 크기가 변경될 때마다 handleResize 함수를 호출합니다.
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const originalPosition = document.body.style.position;
    let originalTop = document.body.style.top;

    if (isOpen && isMobile) {
      originalTop = `${window.scrollY}px`;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${originalTop}`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;

      if (originalPosition === 'fixed') {
        window.scrollTo(0, parseInt(originalTop || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;

      if (originalPosition === 'fixed') {
        window.scrollTo(0, parseInt(originalTop || '0') * -1);
      }
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (getCookie('chatbot').length === 0 && autoOpen) {
      timer.current = setTimeout(() => setIsOpen(() => true), 1000);
      setCookie('chatbot');
    }
  }, []);

  return (
    <>
      {isMobile && isOpen ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${dimensions.width}px`,
            height: `100%`,
            overflow: 'hidden',
            backgroundColor: 'white',
          }}
        >
          <Chat {...props} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
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
