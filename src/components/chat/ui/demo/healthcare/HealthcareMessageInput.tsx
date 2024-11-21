import { UserMessage } from '@sendbird/chat/message';
import { SetStateAction, useEffect, useRef, useState } from 'react';

import { medicalHistory } from './elements/const';
import LoadingDots from './elements/LoadingDots';
import {
  ListItemContainer,
  ListItem,
  AIAssistantBodyContainer,
  PatientHistoryLabel,
  PatientHistoryListContainer,
  PatientHistoryListBody,
  CancelButton,
  InputContainer,
  ToggleText,
  AIAssistantContainer,
  TopInnerContainer,
  AIAssistantHeadText,
  TextContainer,
  AIAssistantBodyHeadText,
  AIAssistantBodyText,
  SendButton,
  NewInput,
  PendingSendButton,
  AIContainer,
  SecondardButtonContainer,
  PrimaryButton,
  SecondaryButton,
  InnerContainer,
  InputComponent,
  Button,
  TopChevronDownIcon,
} from './HealthcareMessageInput.styles';
import { useDemoModal } from '../../../../../__custom__/useDemoModal';
import { useConstantState } from '../../../../../context/ConstantContext';
import { Label as UILabel } from '../../../../../foundation/components/Label';
import { useSendUserMessage } from '../../../../../foundation/hooks/useSendMessage';
import ChevronLeftIcon from '../../../../../icons/chevron-left.svg';
import ChevronUpIcon from '../../../../../icons/chevron-up.svg';
import AIChatbotIcon from '../../../../../icons/icon-aichatbot.svg';
import CloseIcon from '../../../../../icons/icon-close-black.svg';
import MagicWandIcon from '../../../../../icons/icon-magic-wand-filled.svg';
import SendIcon from '../../../../../icons/icon-send.svg';
import { boldifyMessage } from '../../../../../utils';
import { getSenderUserIdFromMessage } from '../../../../../utils/messages';
import { useBotStudioView } from '../../../hooks/useBotStudioView';

interface FunctionCalls {
  name: string;
  request: object;
  response: object;
}

interface AIResponseMessage {
  reply_messages: string[];
  response_method: {
    function_calls: FunctionCalls[];
  };
}

interface MedicalHistoryContentItem {
  symptom: string;
  date: string;
  medicalHistory: string;
}

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = '0';
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value]);
};

export function HealthcareMessageInput({ onSendMessage }: { onSendMessage?: (message?: string) => void }) {
  const { externalInputChatMessage, customizedDemoCategory: category, botId, userId } = useConstantState();
  const { filteredMessages: allMessages } = useBotStudioView();
  const { sendUserMessage } = useSendUserMessage();
  const { openModal, closeModal, Modal } = useDemoModal({
    targetContainer: document.getElementById('chat-window') as HTMLElement,
  });

  const [askToAIMessage, setAskToAIMessage] = useState<string>('');
  const [AIResponse, setAIResponse] = useState<AIResponseMessage | null>(null);
  const [currentFunctionCall, setCurrentFunctionCall] = useState<FunctionCalls | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [showSendButton, setShowSendButton] = useState<boolean>(false);
  const [message, setMessage] = useState(externalInputChatMessage?.value ?? '');
  const [isFolded, setIsFolded] = useState(false); // New state to manage fold/unfold
  const [isAskingAssistantMode, setIsAskingAssistantMode] = useState(false);
  const [isAskingAssistantRequestSending, setIsAskingAssistantRequestSending] = useState(false);
  const [recommendMessage, setRecommendMessage] = useState('');
  const [showTip, setShowTip] = useState(false);
  const [isExternalInputPending, setIsExternalInputPending] = useState(false);
  const [isMessageLengthPending, setIsMessageLengthPending] = useState(false);

  const headers = {
    'Content-Type': 'application/json',
  };

  useAutosizeTextArea(inputRef.current, message);

  useEffect(() => {
    if (allMessages.length > 0) {
      const lastMessage = allMessages[allMessages.length - 1];
      if (lastMessage?.messageType === 'user') {
        const lastUserMessage = lastMessage as UserMessage;
        if (lastUserMessage.sender?.userId === userId) {
          setShowTip(true);
        }
      }
    }

    if (allMessages.length == 0) {
      setShowTip(true);
    }
  }, [allMessages]);

  useEffect(() => {
    const fetchData = async () => {
      if (
        externalInputChatMessage?.value &&
        externalInputChatMessage.value !== '' &&
        externalInputChatMessage.value.length > 0
      ) {
        setIsAskingAssistantMode(true);
        setAIResponse(null);
        setAskToAIMessage(externalInputChatMessage.value);
        setIsAskingAssistantRequestSending(true);
        setIsFolded(false);

        setIsExternalInputPending(true);

        try {
          const response = await getRecommendMessage([
            {
              role: 'user',
              content: "I'm now talking to Patient X. ",
            },
            {
              role: 'user',
              content: externalInputChatMessage.value,
            },
          ]);

          setAIResponse(response);

          if (response.response_method?.function_calls?.length > 0) {
            setCurrentFunctionCall(response.response_method?.function_calls[0]);
          }
        } catch (error) {
          console.error('Failed to fetch AI response', error);
        } finally {
          setIsExternalInputPending(false);
        }

        setAskToAIMessage(''); // Clear input after sending
        setIsAskingAssistantRequestSending(false);
      }
    };

    if (!isExternalInputPending) {
      fetchData();
    }
  }, [externalInputChatMessage?.id]);

  useEffect(() => {
    if (typeof message === 'string' && message.length > 0) {
      setShowSendButton(true);
    }
  }, [message]);

  useEffect(() => {
    const isInitialRendering = bodyInput.length < 1;
    if (isInitialRendering) {
      sendUserMessage({ message: 'How can I help you today?' });
    }
  }, []);

  function toggleFold() {
    setIsFolded(!isFolded);
  }

  const filteredMessages = allMessages.filter((message) => message.messageType === 'user');
  const bodyInput = filteredMessages.map((message) => ({
    role: getSenderUserIdFromMessage(message) === botId ? 'user' : 'assistant',
    content: message.message,
  }));

  useEffect(() => {
    const fetchData = async () => {
      // bodyInput must include 2 objects, role and assistant
      const isInvalidBodyInput = !bodyInput || bodyInput.length < 1;
      if (isInvalidBodyInput) {
        return Promise.resolve([]);
      }

      const isAssistantWelcomeMessageMissing =
        bodyInput.length < 2 && !bodyInput.some((message) => message.content === 'How can I help you today?');

      if (isAssistantWelcomeMessageMissing) {
        bodyInput.unshift({
          role: 'assistant',
          content: 'How can I help you today?',
        });
      }

      setIsMessageLengthPending(true);

      try {
        const data = await getRecommendMessage(bodyInput);
        const replyMessage = data.reply_messages[0];
        const isDefaultMockMessage = replyMessage === 'How can I assist you today?';
        if (replyMessage && !isDefaultMockMessage) {
          setShowTip(false);
          setRecommendMessage(replyMessage ?? '');
        }

        // setAIResponse(data);

        // if (data.response_method?.function_calls?.length > 0) {
        //   setCurrentFunctionCall(data.response_method.function_calls[0]);
        // }
      } catch (error) {
        console.error('Error fetching recommend message:', error);
      } finally {
        setIsMessageLengthPending(false);
      }
    };

    if (!isMessageLengthPending || bodyInput.length % 2 === 0) {
      fetchData();
    }
  }, [bodyInput.length]);

  async function getRecommendMessage(bodyInput?: any[]) {
    const response = await fetch('/api/assistant', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        params: {
          botId: 'healthcare',
        },
        data: {
          messages: bodyInput,
          include_response_method: true,
        },
        headers,
      }),
    });

    const data = await response.json();
    return data;
  }

  async function handleAskAISendMessage() {
    setIsExternalInputPending(true);
    setIsAskingAssistantRequestSending(true);

    const response = await getRecommendMessage([
      {
        role: 'user',
        content: "I'm now talking to Patient X. ",
      },
      {
        role: 'user',
        content: askToAIMessage,
      },
    ]);

    setAIResponse(response);

    if (response.response_method?.function_calls?.length > 0) {
      setCurrentFunctionCall(response.response_method?.function_calls[0]);
    }

    setIsAskingAssistantRequestSending(false);
    setAskToAIMessage(''); // Clear input after sending
    setIsExternalInputPending(false);
  }

  function handleAskAIMessageChange(event: { target: { value: SetStateAction<string> } }) {
    setAskToAIMessage(event.target.value);
  }

  function handleSendMessage() {
    onSendMessage?.(message);
    sendUserMessage({ message });
    setMessage('');
  }

  function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (message == null) {
      return;
    }
    const value = event.target.value;
    setMessage(value);
    setShowSendButton(value.length > 0);
  }

  function onPressEnter(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (!event.shiftKey && event.charCode === 13 && message != null) {
      event.preventDefault();
      handleSendMessage();
    }
  }

  function handleAskTheAssistant() {
    setIsAskingAssistantMode(!isAskingAssistantMode);
    setAIResponse(null);
    setAskToAIMessage('');
  }

  function handlePasteThisAnswer() {
    setMessage(recommendMessage);
    setIsFolded(true);
  }

  function handlePasteThisAnswerFromResponse() {
    setIsAskingAssistantMode(!isAskingAssistantMode);
    setAskToAIMessage('');
    setMessage(AIResponse?.reply_messages[0] ?? '');
    setIsFolded(true);
    setAIResponse(null);
  }

  function handleCancel() {
    setAIResponse(null);
  }

  function renderMedicalHistoryList() {
    return (
      <>
        {medicalHistory.map((item, index) => (
          <ListItemContainer key={`${item.symptom}-${item.date}-${index}`}>
            <ListItem
              key={index}
              onClick={() => {
                openMedicalHistoryModal(item);
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                }}
              >
                {item.symptom}
              </div>
              <div
                style={{
                  color: 'rgba(0, 0, 0, 0.5)',
                  fontSize: '12px',
                }}
              >
                {item.date}
              </div>
            </ListItem>
          </ListItemContainer>
        ))}
      </>
    );
  }

  function openMedicalHistoryModal(item: MedicalHistoryContentItem) {
    openModal(<MedicalHistoryModalContent item={item} closeModal={closeModal} />);
  }

  function renderFunctionCall() {
    switch (currentFunctionCall?.name) {
      case 'get_medical_history':
        return (
          <>
            <AIAssistantBodyContainer>
              <PatientHistoryLabel type={'body1'} color={'onbackground1'}>
                This is `Patient X` past medical history.
              </PatientHistoryLabel>
            </AIAssistantBodyContainer>
            <PatientHistoryListContainer>
              <PatientHistoryListBody>{renderMedicalHistoryList()}</PatientHistoryListBody>
            </PatientHistoryListContainer>
            <AIAssistantBodyContainer>
              <CancelButton onClick={handleCancel}>
                <UILabel type={'body1'} color={'primary'}>
                  {'Cancel'}
                </UILabel>
              </CancelButton>
            </AIAssistantBodyContainer>
          </>
        );
      case 'get_user_info':
        return <div>User Info</div>;
      default:
        return <div>Default Case</div>;
    }
  }

  return (
    <InputContainer category={category} isFolded={isFolded}>
      {isFolded ? (
        <ToggleText onClick={toggleFold}>
          <UILabel type={'body1'} color={'onbackground1'}>
            {'AI medical assistant'}
          </UILabel>
          <ChevronUpIcon
            style={{
              paddingLeft: '4px',
              width: '10px',
              height: '10px',
            }}
          />
        </ToggleText>
      ) : isAskingAssistantMode ? (
        <AIAssistantContainer>
          <TopInnerContainer
            onClick={handleAskTheAssistant}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '8px',
            }}
          >
            <ChevronLeftIcon />
            <AIAssistantHeadText type={'subtitle1'} color={'onbackground1'}>
              Ask the assistant
            </AIAssistantHeadText>
          </TopInnerContainer>
          {AIResponse && AIResponse.reply_messages.length > 0 ? (
            AIResponse.response_method?.function_calls?.length > 0 ? (
              renderFunctionCall()
            ) : (
              <AIAssistantBodyContainer>
                <TextContainer>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingTop: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                    }}
                  >
                    <AIChatbotIcon
                      style={{
                        paddingRight: '4px',
                      }}
                    />
                    <AIAssistantBodyHeadText type={'caption2'} color={'onbackground2'}>
                      {'AI medical assistant'}
                    </AIAssistantBodyHeadText>
                  </div>
                  <AIAssistantBodyText type={'body1'} color={'onbackground1'}>
                    {AIResponse.reply_messages[0]}
                  </AIAssistantBodyText>
                </TextContainer>
                <SendButton onClick={handlePasteThisAnswerFromResponse}>
                  <UILabel type={'body1'} color={'oncontent1'}>
                    {'Paste this answer'}
                  </UILabel>
                </SendButton>
                <CancelButton onClick={handleCancel}>
                  <UILabel type={'body1'} color={'primary'}>
                    {'Cancel'}
                  </UILabel>
                </CancelButton>
              </AIAssistantBodyContainer>
            )
          ) : (
            <AIAssistantBodyContainer
              style={{
                paddingBottom: '80px',
              }}
            >
              <UILabel type={'body1'} color={'onbackground1'}>
                Looking for better phrases or stuck on something?
                <br /> Ask away!
              </UILabel>
              <NewInput value={askToAIMessage} onChange={handleAskAIMessageChange} placeholder="Ask the assistant" />
              {isAskingAssistantRequestSending ? (
                <PendingSendButton>
                  <LoadingDots />
                </PendingSendButton>
              ) : (
                <SendButton onClick={handleAskAISendMessage} disabled={!askToAIMessage.trim()}>
                  <UILabel type={'body1'} color={'oncontent1'}>
                    {'Send'}
                  </UILabel>
                </SendButton>
              )}
            </AIAssistantBodyContainer>
          )}
        </AIAssistantContainer>
      ) : (
        <AIAssistantContainer>
          <TopInnerContainer onClick={toggleFold} style={{ cursor: 'pointer' }}>
            <AIAssistantHeadText type={'subtitle1'} color={'onbackground1'}>
              AI medical assistant
            </AIAssistantHeadText>
            <TopChevronDownIcon />
          </TopInnerContainer>
          <AIContainer>
            <TextContainer>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '8px',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                }}
              >
                <MagicWandIcon
                  style={{
                    paddingRight: '4px',
                  }}
                />
                <AIAssistantBodyHeadText type={'caption2'} color={'onbackground2'}>
                  {showTip ? 'Tips for using AI assistant' : 'Suggested by AI'}
                </AIAssistantBodyHeadText>
              </div>
              {isExternalInputPending || isMessageLengthPending || showTip ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <LoadingDots />
                </div>
              ) : (
                <AIAssistantBodyText type={'body1'} color={'onbackground1'}>
                  <div dangerouslySetInnerHTML={{ __html: boldifyMessage(recommendMessage) }} />
                </AIAssistantBodyText>
              )}
            </TextContainer>
            <SecondardButtonContainer showTip={showTip}>
              {!showTip && (
                <PrimaryButton onClick={handlePasteThisAnswer}>
                  <UILabel type={'body1'} color={'oncontent1'}>
                    {'Paste this answer'}
                  </UILabel>
                </PrimaryButton>
              )}
              <SecondaryButton onClick={handleAskTheAssistant} showTip={showTip}>
                <UILabel type={'body1'} color={'primary'}>
                  {'Ask the assistant'}
                </UILabel>
              </SecondaryButton>
            </SecondardButtonContainer>
          </AIContainer>
        </AIAssistantContainer>
      )}
      {!isAskingAssistantMode && (
        <InnerContainer>
          <InputComponent
            isActive={showSendButton}
            onKeyPress={onPressEnter}
            ref={inputRef}
            value={message}
            onChange={handleMessageChange}
            rows={1}
            placeholder="Enter message"
            category={category}
          />
          {showSendButton && (
            <Button>
              <SendIcon
                onClick={() => {
                  handleSendMessage();
                }}
                height="20px"
                width="20px"
              >
                Send
              </SendIcon>
            </Button>
          )}
        </InnerContainer>
      )}
      <Modal />
    </InputContainer>
  );
}

function MedicalHistoryModalContent({ item, closeModal }: { item: MedicalHistoryContentItem; closeModal: () => void }) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '36px',
        }}
      >
        <UILabel type={'h1'} color={'onbackground1'}>
          Medical History
        </UILabel>
        <CloseIcon
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
          {item.date}
        </div>
        <div
          style={{
            height: '200px',
            overflowY: 'auto',
          }}
        >
          {item.medicalHistory.split('\n').map((item, index) => (
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
    </>
  );
}
