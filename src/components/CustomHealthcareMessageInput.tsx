import { UserMessage } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import Label, {
  LabelColors,
  LabelTypography,
} from '@sendbird/uikit-react/ui/Label';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import LoadingDots from './LoadingDots';
import { useConstantState } from '../context/ConstantContext';
import { useSendMessage } from '../hooks/useSendMessage';
import { ReactComponent as IconAIChatBot } from '../icons/icon-aichatbot.svg';
import { ReactComponent as IconChevronDown } from '../icons/icon-chevron-down.svg';
import { ReactComponent as IconChevronLeft } from '../icons/icon-chevron-left.svg';
import { ReactComponent as IconChevronUp } from '../icons/icon-chevron-up.svg';
import { ReactComponent as IconMagicWand } from '../icons/icon-magic-wand-filled.svg';
import { ReactComponent as SendIcon } from '../icons/send-icon.svg';
import { categoryColors } from '../utils/category';

interface InputContainerProps {
  botCategory?: string;
  isFolded: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
  background: ${({ botCategory }) =>
    botCategory
      ? categoryColors[botCategory]['input-container-color']
      : '#eeeeee'};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const InnerContainer = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface InputProps {
  isActive: boolean;
  botCategory?: string;
}

const InputComponent = styled.textarea<InputProps>`
  width: ${(props: InputProps) =>
    props.isActive ? 'calc(100% - 30px)' : '100%'};
  transition: ${(props: InputProps) =>
    props.isActive ? 'none' : 'width 0.5s'};
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
      ? categoryColors[botCategory]['input-message-background-color']
      : '#eeeeee'};
  border-radius: 8px;
  height: auto;
  ::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
`;

const ToggleText = styled.div`
  font-weight: 600;
  padding-top: 14px;
  padding-bottom: 14px;
  cursor: pointer;
  text-align: center;
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #007bff;
  }
`;

const AIAssistantContainer = styled.div``;

const AIAssistantBodyContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto;
`;

const AIContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  max-height: 200px;
`;

const PatientHistoryListBody = styled.div`
  display: flex;
  height: 154px;
  flex-direction: column;
  overflow-y: auto;
`;

const PatientHistoryListContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;
`;

interface SecondardButtonContainerInputProps {
  showTip: boolean;
}

const SecondardButtonContainer = styled.div<SecondardButtonContainerInputProps>`
  display: flex;
  flex-direction: ${({ showTip }) => (showTip ? 'column' : 'row')};
  justify-content: space-between;
  gap: 8px;
`;

const PrimaryButton = styled.div`
  padding: 8px 16px;
  background-color: var(--sendbird-light-primary-300); // Blue background
  color: var(--sendbird-light-background-50-0); // White text
  border: 1px solid var(--sendbird-light-primary-300);
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

const SecondaryButton = styled.div<SecondardButtonContainerInputProps>`
  padding: 8px 16px;
  background-color: var(--sendbird-light-background-50-0);
  color: var(--sendbird-light-primary-300);
  border: 1px solid var(--sendbird-light-primary-300); // Blue border
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  ${({ showTip }) => !showTip && 'width: 100%;'}
`;

const TextContainer = styled.div`
  background-color: #eeeeee;
  height: 84px;
  color: black;
  border-radius: 8px;
  text-align: start;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
`;

const PatientChartContainer = styled.div`
  background-color: #eeeeee;
  height: 172px;
  color: black;
  border-radius: 8px;
  text-align: start;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;

const Button = styled.div`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AIAssistantHeadText = styled(Label)`
  font-weight: 700;
`;

const AIAssistantBodyText = styled(Label)`
  padding: 12px 8px;
  font-weight: 500;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: auto;
`;

const PatientBodyText = styled(Label)`
  padding: 12px;
  font-weight: 500;
  white-space: normal;
  height: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: auto;
`;

const AIAssistantBodyHeadText = styled(Label)`
  font-weight: 700;
  font-size: 11px;
  //  not draggable
  user-select: none;
`;

const NewInput = styled.textarea`
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
  border: none;
  border-radius: 8px;
  outline: none;
  resize: none;
  height: 36px;
  background: #eeeeee;

  ::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
`;

const SendButton = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => (props.disabled ? '#cccccc' : '#007bff')};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid var(--sendbird-light-primary-300);
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const PatientHistoryLabel = styled(Label)`
  padding-bottom: 10px;
`;

const ListItemContainer = styled.div`
  line-height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #cccccc; /* Hover 시 회색으로 배경색 변경 */
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.38);
`;

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = '0';
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value]);
};

interface FunctionCalls {
  name: string;
  request: object;
  response: object;
}

interface AIResponseMessage {
  reply_messages: string[];
  response_method: {
    function_calls: FunctionCalls[];
  }[];
}

export function HealthcareMessageInput({
  onSendMessage,
  setModalContent,
  setShowModal,
}: {
  onSendMessage?: (message?: string) => void;
  setModalContent: (content: any) => void;
  setShowModal: (show: boolean) => void;
}) {
  const { inputValue, botId, userId } = useConstantState();
  const [askToAIMessage, setAskToAIMessage] = useState<string>('');
  const [AIResponse, setAIResponse] = useState<AIResponseMessage | null>(null);
  const [currentFunctionCall, setCurrentFunctionCall] =
    useState<FunctionCalls | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [showSendButton, setShowSendButton] = useState<boolean>(false);
  const [message, setMessage] = useState(inputValue?.value ?? '');
  const { botCategory } = useConstantState();
  const [isFolded, setIsFolded] = useState(false); // New state to manage fold/unfold
  const [isAskingAssistant, setIsAskingAssistant] = useState(false);
  const [recommendMessage, setRecommendMessage] = useState('' as string);
  const [showTip, setShowTip] = useState(false);
  const [showPatientChart, setShowPatientChart] = useState(false);
  const headers = {
    'Content-Type': 'application/json',
  };
  const { allMessages } = useChannelContext();
  const medicalHistory = [
    {
      symptom: 'headache',
      date: '2021-10-01',
      medicalHistory: `
  - Diagnosis: Common Cold
  - A 28-year-old male (example patient information), experiencing high fever, cough, body aches, and other flu-like symptoms since last week.
  - Symptoms started suddenly and are ongoing.
  - No underlying conditions identified in the past.
  - Currently resting at home, under self-isolation.
  - Resides in the city, has not received a flu vaccine recently.
  - Scheduled for flu diagnosis and appropriate treatment plan through interaction with a doctor.`,
    },
    {
      symptom: 'stomachache',
      date: '2022-02-15',
      medicalHistory: `
  - Diagnosis: Gastritis
  - A 35-year-old female, complaining of persistent stomach pain, nausea, and bloating after meals.
  - Symptoms have been present for the last two weeks.
  - No history of gastrointestinal disorders noted previously.
  - Currently avoiding spicy and acidic foods.
  - Scheduled for further evaluation and treatment under the care of a gastroenterologist.`,
    },
    {
      symptom: 'back pain',
      date: '2022-05-10',
      medicalHistory: `
  - Diagnosis: Lumbar Strain
  - A 45-year-old male, reporting sudden onset of lower back pain after lifting heavy objects.
  - Pain worsens with movement and is alleviated with rest.
  - No previous history of significant back injuries.
  - Currently using over-the-counter pain relievers and hot/cold therapy.
  - Advised on proper lifting techniques and referred for physiotherapy sessions.`,
    },
    {
      symptom: 'fever',
      date: '2022-08-20',
      medicalHistory: `
  - Diagnosis: Urinary Tract Infection (UTI)
  - A 30-year-old female, presenting with high fever, frequent urination, and burning sensation during urination.
  - Symptoms began two days ago and are progressively worsening.
  - No known history of UTIs.
  - Currently drinking plenty of water and cranberry juice.
  - Prescribed antibiotics and advised to follow up with a urologist if symptoms persist.`,
    },
    {
      symptom: 'cough',
      date: '2023-01-05',
      medicalHistory: `
  - Diagnosis: Acute Bronchitis
  - A 40-year-old male, complaining of persistent cough with yellowish sputum production, chest discomfort, and mild fever.
  - Symptoms started a week ago after a cold.
  - No history of chronic respiratory conditions.
  - Currently using cough suppressants and expectorants.
  - Recommended rest, hydration, and follow-up visit if symptoms worsen or persist beyond two weeks.`,
    },
  ];

  const sendMessage = useSendMessage();

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
      if (inputValue?.value != null && inputValue.value.length > 0) {
        setIsAskingAssistant(true);
        setAIResponse(null);
        setAskToAIMessage(inputValue.value);

        try {
          const response = await getRecommendMessage([
            {
              role: 'user',
              content: "I'm now talking to Patient X. ",
            },
            {
              role: 'user',
              content: inputValue.value,
            },
          ]);
          setAIResponse(response);
          console.log(response);

          if (response.response_method?.function_calls?.length > 0) {
            setCurrentFunctionCall(response.response_method?.function_calls[0]);
          }
        } catch (error) {
          console.error('Failed to fetch AI response', error);
        }

        setAskToAIMessage(''); // Clear input after sending
      }
    };

    fetchData();
  }, [inputValue?.value, inputValue?.id]);

  useEffect(() => {
    if (typeof message === 'string' && message.length > 0) {
      setShowSendButton(true);
    }
  }, [message]);

  useEffect(() => {
    setTimeout(() => {
      sendMessage('How can I help you today?');
    }, 500);
  }, []);

  function toggleFold() {
    setIsFolded(!isFolded);
  }

  const filteredMessages = allMessages.filter(
    (message) => message.messageType === 'user'
  );
  const bodyInput = filteredMessages.map((message) => ({
    role: message.sender.userId === botId ? 'user' : 'assistant',
    content: message.message,
  }));

  const { isPending, error, refetch } = useQuery({
    queryKey: ['getAIRecommendMessage', bodyInput],
    queryFn: () =>
      axios
        .post(`/api/assistant`, {
          params: {
            botId: 'healthcare',
          },
          data: {
            messages: bodyInput,
            include_response_method: true,
          },
          headers,
        })
        .then((response) => {
          setShowTip(false);
          setRecommendMessage(response.data.reply_messages[0]);
          return response.data;
        }),
  });

  async function getRecommendMessage(bodyInput?: any[]) {
    const response = await axios.post('/api/assistant', {
      params: {
        botId: 'healthcare',
      },
      data: {
        messages: bodyInput,
        include_response_method: true,
      },
      headers,
    });
    return response.data;
  }

  async function handleAskAISendMessage() {
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
    console.log(response);
    if (response.response_method?.function_calls?.length > 0) {
      setCurrentFunctionCall(response.response_method?.function_calls[0]);
    }
    setAskToAIMessage(''); // Clear input after sending
  }

  function handleAskAIMessageChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setAskToAIMessage(event.target.value);
  }

  function handleSendMessage() {
    onSendMessage?.(message);
    sendMessage(message);
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

  function handlePatientChart() {
    setShowPatientChart(true);
  }

  function handleAskTheAssistant() {
    setIsAskingAssistant(!isAskingAssistant);
    setAIResponse(null);
    setAskToAIMessage('');
    setShowPatientChart(false);
  }

  function handlePasteThisAnswer() {
    setMessage(recommendMessage);
  }

  function handlePasteThisAnswerFromResponse() {
    setIsAskingAssistant(!isAskingAssistant);
    setIsFolded(true);
    setMessage(AIResponse?.reply_messages[0] ?? '');
    setAIResponse(null);
    setAskToAIMessage('');
  }

  function handleCancel() {
    setAIResponse(null);
  }

  function renderMedicalHistoryList() {
    return (
      <>
        {medicalHistory.map((item, index) => (
          <ListItemContainer>
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

  function openMedicalHistoryModal(item: {
    symptom: string;
    date: string;
    medicalHistory: string;
  }) {
    setModalContent(item);
    setShowModal(true);
  }

  function renderFunctionCall() {
    switch (currentFunctionCall?.name) {
      case 'get_medical_history':
        return (
          <>
            <AIAssistantBodyContainer>
              <PatientHistoryLabel
                type={LabelTypography.BODY_1}
                color={LabelColors.ONBACKGROUND_1}
              >
                This is `Patient X` past medical history.
              </PatientHistoryLabel>
            </AIAssistantBodyContainer>
            <PatientHistoryListContainer>
              <PatientHistoryListBody>
                {renderMedicalHistoryList()}
              </PatientHistoryListBody>
            </PatientHistoryListContainer>
            <AIAssistantBodyContainer>
              <CancelButton onClick={handleCancel}>
                <Label
                  type={LabelTypography.BODY_1}
                  color={LabelColors.PRIMARY}
                >
                  {'Cancel'}
                </Label>
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

  function handleBackToAssistant() {
    setIsAskingAssistant(false);
    setAIResponse(null);
    setAskToAIMessage('');
    setShowPatientChart(false);
  }

  return (
    <InputContainer botCategory={botCategory} isFolded={isFolded}>
      {isFolded ? (
        <ToggleText onClick={toggleFold}>
          <Label
            type={LabelTypography.BODY_1}
            color={LabelColors.ONBACKGROUND_1}
          >
            {'AI medical assistant'}
          </Label>
          <IconChevronUp
            style={{
              paddingLeft: '4px',
              width: '10px',
              height: '10px',
            }}
          />
        </ToggleText>
      ) : isAskingAssistant ? (
        <AIAssistantContainer>
          <InnerContainer
            onClick={handleAskTheAssistant}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <IconChevronLeft />
            <AIAssistantHeadText
              type={LabelTypography.SUBTITLE_1}
              color={LabelColors.ONBACKGROUND_1}
            >
              Ask the assistant
            </AIAssistantHeadText>
          </InnerContainer>
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
                    <IconAIChatBot
                      style={{
                        paddingRight: '4px',
                      }}
                    />
                    <AIAssistantBodyHeadText
                      type={LabelTypography.CAPTION_2}
                      color={LabelColors.ONBACKGROUND_2}
                    >
                      {'AI medical assistant'}
                    </AIAssistantBodyHeadText>
                  </div>
                  <AIAssistantBodyText
                    type={LabelTypography.BODY_1}
                    color={LabelColors.ONBACKGROUND_1}
                  >
                    {AIResponse.reply_messages[0]}
                  </AIAssistantBodyText>
                </TextContainer>
                <SendButton onClick={handlePasteThisAnswerFromResponse}>
                  <Label
                    type={LabelTypography.BODY_1}
                    color={LabelColors.ONCONTENT_1}
                  >
                    {'Paste this answer'}
                  </Label>
                </SendButton>
                <CancelButton onClick={handleCancel}>
                  <Label
                    type={LabelTypography.BODY_1}
                    color={LabelColors.PRIMARY}
                  >
                    {'Cancel'}
                  </Label>
                </CancelButton>
              </AIAssistantBodyContainer>
            )
          ) : (
            <AIAssistantBodyContainer>
              <Label
                type={LabelTypography.BODY_1}
                color={LabelColors.ONBACKGROUND_1}
              >
                Looking for better phrases or stuck on something?
                <br /> Ask away!
              </Label>
              <NewInput
                value={askToAIMessage}
                onChange={handleAskAIMessageChange}
                placeholder="Ask the assistant"
              />
              <SendButton
                onClick={handleAskAISendMessage}
                disabled={!askToAIMessage.trim()}
              >
                <Label
                  type={LabelTypography.BODY_1}
                  color={LabelColors.ONCONTENT_1}
                >
                  {'Send'}
                </Label>
              </SendButton>
            </AIAssistantBodyContainer>
          )}
        </AIAssistantContainer>
      ) : showPatientChart ? (
        <AIAssistantContainer>
          <InnerContainer
            onClick={handleBackToAssistant}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <IconChevronLeft />
            <AIAssistantHeadText
              type={LabelTypography.SUBTITLE_1}
              color={LabelColors.ONBACKGROUND_1}
            >
              Patient X
            </AIAssistantHeadText>
          </InnerContainer>
          <AIAssistantBodyContainer>
            <PatientChartContainer>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '8px',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                }}
              >
                <IconMagicWand
                  style={{
                    paddingRight: '4px',
                  }}
                />
                <AIAssistantBodyHeadText
                  type={LabelTypography.CAPTION_2}
                  color={LabelColors.ONBACKGROUND_2}
                >
                  {showTip ? 'Tips for using AI assistant' : 'Suggested by AI'}
                </AIAssistantBodyHeadText>
              </div>
              <PatientBodyText
                type={LabelTypography.BODY_1}
                color={LabelColors.ONBACKGROUND_1}
              >
                <div>Gender: Male</div>
                <div>Phone number: 000-000-0000</div>
                <div>Email: @sendbird.com</div>
                <div>Last visited date: Feb 1st, 2024</div>
              </PatientBodyText>
            </PatientChartContainer>
          </AIAssistantBodyContainer>
        </AIAssistantContainer>
      ) : (
        <AIAssistantContainer>
          <InnerContainer onClick={toggleFold} style={{ cursor: 'pointer' }}>
            <AIAssistantHeadText
              type={LabelTypography.SUBTITLE_1}
              color={LabelColors.ONBACKGROUND_1}
            >
              AI medical assistant
            </AIAssistantHeadText>
            <IconChevronDown />
          </InnerContainer>
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
                <IconMagicWand
                  style={{
                    paddingRight: '4px',
                  }}
                />
                <AIAssistantBodyHeadText
                  type={LabelTypography.CAPTION_2}
                  color={LabelColors.ONBACKGROUND_2}
                >
                  {showTip ? 'Tips for using AI assistant' : 'Suggested by AI'}
                </AIAssistantBodyHeadText>
              </div>
              {isPending ? (
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
                <AIAssistantBodyText
                  type={LabelTypography.BODY_1}
                  color={LabelColors.ONBACKGROUND_1}
                >
                  {showTip
                    ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
                    : recommendMessage}
                </AIAssistantBodyText>
              )}
            </TextContainer>
            {!showTip && (
              <PrimaryButton onClick={handlePasteThisAnswer}>
                <Label
                  type={LabelTypography.BODY_1}
                  color={LabelColors.ONCONTENT_1}
                >
                  {'Paste this answer'}
                </Label>
              </PrimaryButton>
            )}
            <SecondardButtonContainer showTip={showTip}>
              <SecondaryButton onClick={handlePatientChart} showTip={showTip}>
                <Label
                  type={LabelTypography.BODY_1}
                  color={LabelColors.PRIMARY}
                >
                  {'Patient chart'}
                </Label>
              </SecondaryButton>
              <SecondaryButton
                onClick={handleAskTheAssistant}
                showTip={showTip}
              >
                <Label
                  type={LabelTypography.BODY_1}
                  color={LabelColors.PRIMARY}
                >
                  {'Ask the assistant'}
                </Label>
              </SecondaryButton>
            </SecondardButtonContainer>
          </AIContainer>
        </AIAssistantContainer>
      )}
      {!isAskingAssistant && (
        <InnerContainer>
          <InputComponent
            isActive={showSendButton}
            onKeyPress={onPressEnter}
            ref={inputRef}
            value={message}
            onChange={handleMessageChange}
            rows={1}
            placeholder="Enter message"
            botCategory={botCategory}
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
    </InputContainer>
  );
}
