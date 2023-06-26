import '@sendbird/uikit-react/dist/index.css';
import '../css/index.css';
import {Fragment, useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';

import {ReactComponent as ArrowDownIcon} from '../icons/ic-arrow-down.svg';
import {ReactComponent as ChatBotIcon} from '../icons/icon-widget-chatbot.svg';

import WidgetWindow from './WidgetWindow';
import {
    ChatBottomContent,
    CreateGroupChannelParams, DEFAULT_CONSTANT,
    StartingPageContent, SuggestedMessageContent,
} from "../const";

const StyledWidgetButtonWrapper = styled.button`
  position: fixed;
  z-index: 10000;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  background: conic-gradient(from 180deg at 50% 50%,
    #4dcd90 -17.35deg,
  #6210cc 80.63deg,
  #6210cc 176.25deg,
  #4dcd90 342.65deg,
  #6210cc 440.63deg);
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
  ${({isOpen}) => {
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
  ${({isOpen}) => {
    return isOpen
            ? css`
              transform: rotate(0deg);
            `
            : css`
              transform: rotate(-90deg) scale(0);
            `;
  }}
`;

const setCookie = (cookieName) => {
    if (!document) return;
    const HOUR_IN_MS = 3600000;
    const date = new Date();
    const time = date.getTime();
    const expireTime = time + HOUR_IN_MS * 48;
    date.setTime(expireTime);
    const expireTimeInString = date.toUTCString();
    document.cookie = `${cookieName}=true;expires=${expireTimeInString};path=/`;
};

const getCookie = (cookieName) => {
    if (!document) return [];
    const cookies = document.cookie.split(';');
    return cookies.filter((cookie) => cookie.includes(`${cookieName}=`));
};

const ChatAiWidget = ({
                                     applicationId,
                                     botId,
                                     botNickName = DEFAULT_CONSTANT.botNickName,
                                     betaMark = DEFAULT_CONSTANT.betaMark,
                                     suggestedMessageContent = DEFAULT_CONSTANT.suggestedMessageContent,
                                     createGroupChannelParams = DEFAULT_CONSTANT.createGroupChannelParams,
                                     startingPageContent = DEFAULT_CONSTANT.startingPageContent,
                                     chatBottomContent = DEFAULT_CONSTANT.chatBottomContent,
}: {
    applicationId: string,
    botId: string,
    botNickName?: string,
    betaMark?: boolean,
    suggestedMessageContent?: SuggestedMessageContent,
    createGroupChannelParams?: CreateGroupChannelParams,
    startingPageContent?: StartingPageContent,
    chatBottomContent?: ChatBottomContent,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const timer = useRef<NodeJS.Timeout | null>(null);
    const constant = {
        ...DEFAULT_CONSTANT,
        botNickName,
        betaMark,
        suggestedMessageContent,
        createGroupChannelParams,
        startingPageContent,
        chatBottomContent,
    };
    const buttonClickHandler = () => {
        if (timer.current !== null) {
            clearTimeout(timer.current as NodeJS.Timeout);
            timer.current = null;
        }
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (getCookie('chatbot').length === 0) {
            timer.current = setTimeout(() => setIsOpen(() => true), 1000);
            setCookie('chatbot');
        }
    }, []);
    return (
        <div>
            <Fragment>
                <WidgetWindow
                    applicationId={applicationId}
                    botId={botId}
                    constant={constant}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <StyledWidgetButtonWrapper onClick={buttonClickHandler}>
                    <StyledWidgetIcon isOpen={isOpen}>
                        <ChatBotIcon/>
                    </StyledWidgetIcon>
                    <StyledArrowIcon isOpen={isOpen}>
                        <ArrowDownIcon/>
                    </StyledArrowIcon>
                </StyledWidgetButtonWrapper>
            </Fragment>
        </div>
    );
};

export default ChatAiWidget;