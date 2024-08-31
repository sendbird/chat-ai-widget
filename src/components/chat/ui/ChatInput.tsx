import { css } from '@linaria/core';
import { useRef } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';
import MessageInputWrapperView from '@uikit/modules/GroupChannel/components/MessageInputWrapper/MessageInputWrapperView';

import { themedColors } from '../../../foundation/colors/css';
import { useBlockWhileBotResponding } from '../../../hooks/useBlockWhileBotResponding';
import { isIOSMobile } from '../../../utils';
import { useChatContext } from '../context/ChatProvider';

export const ChatInput = () => {
  const { channel, botUser, dataSource, handlers } = useChatContext();

  const ref = useRef<HTMLDivElement>(null);

  const { config } = useSendbirdStateContext();
  const isMessageInputDisabled = useBlockWhileBotResponding({
    lastMessage: dataSource.messages[dataSource.messages.length - 1],
    botUser,
  });

  return (
    <div className={container}>
      <MessageInputWrapperView
        loading={false}
        disabled={config.isOnline ? isMessageInputDisabled : true}
        messageInputRef={ref}
        currentChannel={channel as any}
        messages={dataSource.messages}
        sendUserMessage={(params) => {
          const processedParams = handlers.onBeforeSendMessage(params);
          dataSource.sendUserMessage(processedParams, handlers.onAfterSendMessage).then(handlers.onAfterSendMessage);
        }}
        sendFileMessage={() => {
          throw new Error('Not implemented');
        }}
      />
    </div>
  );
};

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

    .sendbird-message-input--area {
      background-color: ${themedColors.bg2};
    }

    .sendbird-message-input {
      display: flex;
      align-items: center;
      .sendbird-message-input-text-field {
        min-height: 40px;
        max-height: 100px;
        height: 40px;
        overflow-y: auto;
        padding: 8px 16px;
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
