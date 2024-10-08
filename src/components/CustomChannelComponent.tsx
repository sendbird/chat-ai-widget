import { User } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { SendingStatus } from '@sendbird/chat/message';
import ChannelHeader from '@sendbird/uikit-react/Channel/components/ChannelHeader';
import ChannelUI from '@sendbird/uikit-react/Channel/components/ChannelUI';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import Label, {
  LabelColors,
  LabelTypography,
} from '@sendbird/uikit-react/ui/Label';
import { useEffect, useState, useMemo, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { ClientUserMessage, EveryMessage } from 'SendbirdUIKitGlobal';
import styled, { css } from 'styled-components';

import CustomChannelHeader from './CustomChannelHeader';
import { HealthcareMessageInput } from './CustomHealthcareMessageInput';
import CustomMessage from './CustomMessage';
import { MessageInput } from './CustomMessageInput';
import DynamicRepliesPanel from './DynamicRepliesPanel';
import { useConstantState } from '../context/ConstantContext';
import {
  useCurrentChannelMemberIds,
  useNumOfMessages,
} from '../hooks/useInteractiveDemoSharableData';
import { useScrollOnStreaming } from '../hooks/useScrollOnStreaming';
import { ReactComponent as IconClose } from '../icons/icon-close-black.svg';
import { isSpecialMessage, scrollUtil } from '../utils';
import { categoryColors } from '../utils/category';
import {
  groupMessagesByShortSpanTime,
  getBotWelcomeMessages,
  type MessageMeta,
} from '../utils/messages';

interface RootStyleProps {
  hidePlaceholder: boolean;
  height: string;
  isInputActive: boolean;
  botCategory?: string;
}
const Root = styled.div<RootStyleProps>`
  position: relative;
  height: ${({ height }) => height};
  font-family: 'Roboto', sans-serif;
  z-index: 0;
  border: none;

  .sendbird-place-holder {
    background: ${({ botCategory }) =>
      botCategory
        ? categoryColors[botCategory][
            'sendbird-conversation__messages-background-color'
          ]
        : '#eeeeee'};
    };
  }
  ${({ botCategory }) =>
    botCategory &&
    css`
      --sendbird-light-primary-300: ${categoryColors[botCategory][
        '--sendbird-light-primary-300'
      ]};
      --sendbird-light-background-50-0: ${categoryColors[botCategory][
        '--sendbird-light-background-50-0'
      ]};
      --sendbird-light-background-50: ${categoryColors[botCategory][
        '--sendbird-light-background-50'
      ]};
    `}
  .sendbird-place-holder__body {
    display: ${({ hidePlaceholder }) => (hidePlaceholder ? 'none' : 'block')};
  }

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

  .sendbird-conversation__messages {
    background-color: ${({ botCategory }) =>
      botCategory
        ? categoryColors[botCategory][
            'sendbird-conversation__messages-background-color'
          ]
        : '#eeeeee'};
  }

  .sendbird-separator {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .sendbird-message-input {
    display: flex;
    align-items: center;
    .sendbird-message-input-text-field {
      transition: ${(props: RootStyleProps) =>
        props.isInputActive ? 'none' : 'width 0.5s'};
      transition-timing-function: ease;
      padding: 8px 16px;
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.88);
      resize: none;
      border: none;
      outline: none;
      max-height: 116px;
      background: ${({ botCategory }) =>
        botCategory
          ? categoryColors[botCategory]['input-container-color']
          : '#eeeeee'};
      };
    
      border-radius: 20px;
      height: auto;
      ::placeholder {
        color: rgba(0, 0, 0, 0.38);
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
      :hover {
        background-color: transparent;
      }
    }
    .sendbird-message-input--placeholder {
      top: 9px;
    }
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 335px;
  max-height: 319px;
  padding: 20px;
  border-radius: 8px;
  z-index: 9999;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export interface StartingPageAnimatorProps {
  isStartingPage: boolean;
}

type CustomChannelComponentProps = {
  botUser: User;
  createGroupChannel?: () => void;
};

export function CustomChannelComponent(props: CustomChannelComponentProps) {
  const { botUser, createGroupChannel } = props;
  const { userId, suggestedMessageContent } = useConstantState();
  const { botCategory } = useConstantState();
  const { allMessages, currentGroupChannel } = useChannelContext();
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    symptom: '',
    date: '',
    medicalHistory: '',
  });
  useNumOfMessages(botUser.userId);
  useCurrentChannelMemberIds();

  const channel: GroupChannel | undefined = currentGroupChannel;
  const lastMessage: ClientUserMessage = allMessages?.[
    allMessages?.length - 1
  ] as ClientUserMessage;
  const isLastBotMessage =
    !(lastMessage?.messageType === 'admin') &&
    (lastMessage as ClientUserMessage)?.sender?.userId === botUser.userId;

  const [activeSpinnerId, setActiveSpinnerId] = useState(-1);

  const startingPagePlaceHolder =
    allMessages.length === 1 && lastMessage.messageType === 'admin';

  const lastMessageMeta = useMemo(() => {
    let messageMeta: MessageMeta | null;
    try {
      messageMeta = lastMessage?.data ? JSON.parse(lastMessage.data) : null;
    } catch (error) {
      messageMeta = null;
    }
    return messageMeta;
  }, [lastMessage?.data]);

  const dynamicReplyOptions =
    lastMessage?.extendedMessagePayload != null &&
    'suggested_replies' in lastMessage.extendedMessagePayload &&
    lastMessage.extendedMessagePayload.suggested_replies != null
      ? lastMessage.extendedMessagePayload.suggested_replies
      : [];

  const isStaticReplyVisible =
    allMessages &&
    allMessages.length > 1 &&
    !(lastMessage?.messageType === 'admin') &&
    lastMessage.sender?.userId === botUser.userId &&
    // in streaming
    lastMessageMeta != null &&
    'stream' in lastMessageMeta &&
    !lastMessageMeta.stream &&
    !isSpecialMessage(
      lastMessage.message,
      suggestedMessageContent.messageFilterList
    );

  function closeModal() {
    setShowModal(false);
  }

  useScrollOnStreaming({
    isLastBotMessage,
    lastMessageRef,
    // the reply panel component height is about 50px * 3(max replies) = 150px
    bottomBuffer:
      dynamicReplyOptions.length > 0 || isStaticReplyVisible ? 150 : 0,
  });

  /**
   * If the updated last message is sent by the current user, activate spinner for the sent message.
   * If the updated last message is pending or failed by the current user or sent by the bot, deactivate spinner.
   */
  useEffect(() => {
    if (
      lastMessage &&
      !(lastMessage?.messageType === 'admin') &&
      lastMessage.sender?.userId === userId &&
      lastMessage.sendingStatus === SendingStatus.SUCCEEDED &&
      // this bubble loading should be shown only when there're only bot and 1 user in the channel
      channel?.memberCount === 2 &&
      !currentGroupChannel?.members
        .map((member) => member.userId)
        .includes('luke')
    ) {
      setActiveSpinnerId(lastMessage.messageId);
    } else {
      setActiveSpinnerId(-1);
    }
    scrollUtil();
  }, [lastMessage?.messageId]);

  const grouppedMessages = useMemo(
    () => groupMessagesByShortSpanTime(allMessages),
    [allMessages.length]
  );

  const botWelcomeMessages = useMemo(() => {
    return getBotWelcomeMessages(allMessages, botUser.userId);
  }, [allMessages.length]);

  useEffect(() => {
    channel?.createMetaData({ bot_id: botUser.userId });
  }, []);

  return (
    <Root
      hidePlaceholder={startingPagePlaceHolder}
      height={'100%'}
      botCategory={botCategory}
    >
      <ChannelUI
        renderChannelHeader={() => {
          return channel && createGroupChannel && botUser ? (
            <CustomChannelHeader
              botUser={botUser}
              channel={channel as GroupChannel}
              createGroupChannel={createGroupChannel}
            />
          ) : (
            <ChannelHeader />
          );
        }}
        renderMessage={({ message }: { message: EveryMessage }) => {
          const grouppedMessage = grouppedMessages.find(
            (m) => m.messageId == message.messageId
          );

          const isBotWelcomeMessage = !!botWelcomeMessages.find(
            (welcomeMessage) => welcomeMessage.messageId === message.messageId
          );

          return (
            <>
              <CustomMessage
                message={message}
                activeSpinnerId={activeSpinnerId}
                botUser={botUser}
                lastMessageRef={lastMessageRef}
                chainTop={grouppedMessage?.chaintop}
                chainBottom={grouppedMessage?.chainBottom}
                isBotWelcomeMessage={isBotWelcomeMessage}
              />
              {message.messageId === lastMessage.messageId &&
                dynamicReplyOptions.length > 0 && (
                  <DynamicRepliesPanel replyOptions={dynamicReplyOptions} />
                )}
            </>
          );
        }}
        renderTypingIndicator={() => <></>}
        renderMessageInput={() => {
          if (botCategory === 'healthcare') {
            return (
              <HealthcareMessageInput
                setModalContent={setModalContent}
                setShowModal={setShowModal}
              />
            );
          } else {
            return <MessageInput />;
          }
        }}
      />
      {showModal && (
        <>
          <BackgroundOverlay onClick={closeModal} />
          <ModalContainer>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '36px',
              }}
            >
              <Label
                type={LabelTypography.H_1}
                color={LabelColors.ONBACKGROUND_1}
              >
                Medical History
              </Label>
              <IconClose
                style={{
                  color: 'black',
                  cursor: 'pointer',
                }}
                onClick={closeModal}
              />
            </div>
            <div
              style={{
                paddingTop: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div
                style={{
                  color: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                {modalContent.date}
              </div>
              <div
                style={{
                  height: '200px',
                  overflowY: 'auto',
                }}
              >
                {modalContent.medicalHistory.split('\n').map((item, index) => (
                  <div
                    style={{
                      paddingLeft: '10px',
                      textIndent: '-10px',
                    }}
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ModalContainer>
        </>
      )}
    </Root>
  );
}
