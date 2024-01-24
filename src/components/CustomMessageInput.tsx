import { type UserMessageCreateParams } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import * as sendbirdSelectors from '@sendbird/uikit-react/sendbirdSelectors';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import { useSendMessage } from '../hooks/useSendMessage';
import { ReactComponent as SendIcon } from '../icons/send-icon.svg';

interface InputProps {
  isActive: boolean;
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
  background: #eeeeee;
  border-radius: 20px;
  height: auto;
  ::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
`;

const InputContainer = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = '0';
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value]);
};

export function MessageInput({
  onSendMessage,
}: {
  onSendMessage?: (message?: string) => void;
}) {
  const { inputValue } = useConstantState();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [showSendButton, setShowSendButton] = useState<boolean>(false);
  const [message, setMessage] = useState(inputValue?.value ?? '');

  const sendMessage = useSendMessage();

  useAutosizeTextArea(inputRef.current, message);

  useEffect(() => {
    if (inputValue?.value != null && inputValue.value.length > 0) {
      sendMessage(inputValue.value);
    }
  }, [inputValue?.value, inputValue?.id]);

  useEffect(() => {
    if (typeof message === 'string' && message.length > 0) {
      setShowSendButton(true);
    }
  }, [message]);

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

  return (
    <InputContainer>
      <InnerContainer>
        <InputComponent
          isActive={showSendButton}
          onKeyPress={onPressEnter}
          ref={inputRef}
          value={message}
          onChange={handleMessageChange}
          // onInput={throttledIncrement}
          rows={1}
          placeholder="Enter message"
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
    </InputContainer>
  );
}
export default function CustomMessageInput() {
  const store = useSendbirdStateContext();
  const sendUserMessage = sendbirdSelectors.getSendUserMessage(store);
  const { currentGroupChannel } = useChannelContext();

  function sendInputAsUserMessage(message: string) {
    if (message.length > 0 && currentGroupChannel) {
      const params: UserMessageCreateParams = {
        message,
      };
      sendUserMessage(currentGroupChannel, params)
        .onPending(() => {
          // console.log('## onPending', message);
        })
        .onSucceeded(() => {
          // console.log('## onSucceeded', message);
        })
        .onFailed(() => {
          // console.log('## onFailed', error);
        });
    }
  }
  return (
    <MessageInput
      onSendMessage={(message) => {
        sendInputAsUserMessage(message);
      }}
    />
  );
}
