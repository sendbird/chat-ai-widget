import { css } from '@linaria/core';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { useRef } from 'react';

import MessageInputWrapperView from '@uikit/modules/GroupChannel/components/MessageInputWrapper/MessageInputWrapperView';

import { useConstantState } from '../../../context/ConstantContext';
import { themedColors } from '../../../foundation/colors/css';
import { useBlockWhileBotResponding } from '../../../hooks/useBlockWhileBotResponding';
import { isIOSMobile, noop } from '../../../utils';
import { messageExtension } from '../../../utils/messageExtension';
import { useChatContext } from '../context/ChatProvider';

export const ChatInput = () => {
  const { botId } = useConstantState();
  const { channel } = useChatContext();

  const isMessageInputDisabled = useBlockWhileBotResponding({
    lastMessage: channel?.lastMessage,
    botUser: channel?.members.find((it) => it.userId === botId),
  });
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={container}>
      <MessageInputWrapperView
        loading={false}
        disabled={isMessageInputDisabled}
        quoteMessage={null}
        messageInputRef={ref}
        currentChannel={channel as any}
        setQuoteMessage={noop}
        sendUserMessage={(params) => {
          channel?.sendUserMessage(params);
        }}
        sendFileMessage={throwError}
        sendVoiceMessage={throwError}
        sendMultipleFilesMessage={throwError}
      />
    </div>
  );
};

function throwError(): never {
  throw new Error('Not implemented');
}

export const useInputDisabledState = (channel: GroupChannel | null) => {
  const { stringSet } = useConstantState();
  if (!channel) {
    return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED };
  }

  if (channel.isFrozen && channel.myRole !== 'operator') {
    return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__FROZEN };
  }

  if (channel.myMutedState === 'muted') {
    return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED };
  }

  const lastMessage = channel.lastMessage;
  if (lastMessage && messageExtension.isInputDisabled(lastMessage)) {
    if (messageExtension.getSuggestedReplies(lastMessage).length > 0) {
      return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__SUGGESTED_REPLIES };
    }
    if (lastMessage.messageForm) {
      return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__MESSAGE_FORM };
    }
  }

  return { disabled: false, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER };
};

const container = css`
  z-index: 0;
  border: none;

  & form {
    margin: initial;
    background-color: initial;
  }

  && {
    .sendbird-message-input-wrapper {
      width: 100%;
    }

    .sendbird-message-input-wrapper__message-input {
      padding: 12px 16px;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
    }

    .sendbird-message-input {
      display: flex;
      align-items: center;
      .sendbird-message-input-text-field {
        transition: width 0.5s;
        transition-timing-function: ease;
        padding: 8px 16px;
        // Not to zoom in on mobile set font-size to 16px which blocks the zooming on iOS
        // @link: https://weblog.west-wind.com/posts/2023/Apr/17/Preventing-iOS-Safari-Textbox-Zooming
        font-size: ${isIOSMobile ? 16 : 14}px;
        line-height: 20px;
        resize: none;
        border: none;
        outline: none;
        height: 40px;
        max-height: 116px;
        background-color: ${themedColors.bg2};
        border-radius: 20px;
        text-align: start;
        ::placeholder {
          color: var(--sendbird-light-onlight-03);
        }
        :focus {
          border: none;
          box-shadow: none;
        }
      }
      .sendbird-message-input--send {
        position: relative;
        right: 0;
        bottom: 0;
      }
      .sendbird-iconbutton:hover {
        background-color: transparent;
      }
      .sendbird-message-input--placeholder {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

// <input className={cx(input)} disabled={disabled} placeholder={placeholder}/>

// .sendbird-message-input-text-field {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
// /* Hide scroll bar in WebKit */
// .sendbird-message-input-text-field::-webkit-scrollbar {
//   display: none;
// }

// const container = css`
//   display: flex;
//   flex-direction: row;
//   padding: 12px 16px;
// `;
//
// const input = css`
//   all: unset;
//   width: 100%;
//   height: 40px;
//   font-size: 14px;
//   line-height: 20px;
//   border-radius: 20px;
//   padding: 8px 16px;
//   box-sizing: border-box;
//   caret-color: ${themedColors.primary};
//   color: ${themedColors.onbackground1};
//   .sendbird-theme--light & {
//     background-color: var(--sendbird-light-background-100);
//   }
//   .sendbird-theme--dark & {
//     background-color: var(--sendbird-dark-background-500);
//   }
//   &::placeholder {
//     color: ${themedColors.onbackground3};
//   }
//
//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;
