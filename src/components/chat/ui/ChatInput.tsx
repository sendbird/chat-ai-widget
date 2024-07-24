import { css } from '@linaria/core';
import { useRef } from 'react';

import MessageInputWrapperView from '@uikit/modules/GroupChannel/components/MessageInputWrapper/MessageInputWrapperView';

import { useConstantState } from '../../../context/ConstantContext';
import { themedColors } from '../../../foundation/colors/css';
import { useBlockWhileBotResponding } from '../../../hooks/useBlockWhileBotResponding';
import { isIOSMobile } from '../../../utils';
import { useChatContext } from '../context/ChatProvider';

export const ChatInput = () => {
  const { botId } = useConstantState();
  const { channel, dataSource } = useChatContext();

  const ref = useRef<HTMLDivElement>(null);
  const isMessageInputDisabled = useBlockWhileBotResponding({
    lastMessage: dataSource.messages[dataSource.messages.length - 1],
    botUser: channel?.members.find((it) => it.userId === botId),
  });

  return (
    <div className={container}>
      <MessageInputWrapperView
        loading={false}
        disabled={isMessageInputDisabled}
        messageInputRef={ref}
        currentChannel={channel as any}
        sendUserMessage={(params) => {
          channel?.sendUserMessage(params);
        }}
        sendFileMessage={throwError}
      />
    </div>
  );
};

function throwError(): never {
  throw new Error('Not implemented');
}

const container = css`
  z-index: 0;
  border: none;

  & form {
    margin: initial;
    background-color: initial;
  }

  && {
    .sendbird-message-input-wrapper__message-input {
      padding: 12px 16px;
    }

    .sendbird-message-input {
      display: flex;
      align-items: center;
      .sendbird-message-input-text-field {
        padding: 8px 16px;
        height: 40px;
        max-height: 116px;
        border-radius: 20px;
        // Not to zoom in on mobile set font-size to 16px which blocks the zooming on iOS
        // @link: https://weblog.west-wind.com/posts/2023/Apr/17/Preventing-iOS-Safari-Textbox-Zooming
        font-size: ${isIOSMobile ? 16 : 14}px;
        resize: none;
        border: none;
        outline: none;
        box-shadow: none;
        text-align: start;
        background-color: ${themedColors.bg2};
        ::placeholder {
          color: var(--sendbird-light-onlight-03);
        }
      }
      .sendbird-message-input--send {
        position: relative;
        right: unset;
        bottom: unset;
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

// const useInputDisabledState = (channel: GroupChannel | null) => {
//   const { stringSet } = useConstantState();
//   if (!channel) {
//     return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED };
//   }
//
//   if (channel.isFrozen && channel.myRole !== 'operator') {
//     return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__FROZEN };
//   }
//
//   if (channel.myMutedState === 'muted') {
//     return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED };
//   }
//
//   const lastMessage = channel.lastMessage;
//   if (lastMessage && messageExtension.isInputDisabled(lastMessage)) {
//     if (messageExtension.getSuggestedReplies(lastMessage).length > 0) {
//       return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__SUGGESTED_REPLIES };
//     }
//     if (lastMessage.messageForm) {
//       return { disabled: true, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER__MESSAGE_FORM };
//     }
//   }
//
//   return { disabled: false, placeholder: stringSet.MESSAGE_INPUT__PLACE_HOLDER };
// };
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
