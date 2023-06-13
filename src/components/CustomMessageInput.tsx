import {useEffect, useRef, useState} from "react";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";
import sendbirdSelectors from "@sendbird/uikit-react/sendbirdSelectors";
import { useChannelContext } from "@sendbird/uikit-react/Channel/context";
import { UserMessageCreateParams } from "@sendbird/chat/message";
import styled from "styled-components";
import { ReactComponent as SendIcon } from '../icons/send-icon.svg';
import {useThrottle} from "../hooks/useThrottle";

interface InputProps {
  isActive: boolean;
}
const InputComponent = styled.textarea<InputProps>`
  width: ${(props: InputProps) => (props.isActive ? 'calc(100% - 66px)' : '100%')};
  transition: ${(props: InputProps) => (props.isActive ? 'none' : 'width 0.5s')};
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
  background: #EEEEEE;
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
  padding: 12px 24px;
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

export default function CustomMessageInput() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [showSendButton, setShowSendButton] = useState<boolean>(false);
  const store = useSendbirdStateContext();
  const sendUserMessage = sendbirdSelectors.getSendUserMessage(store);
  const { currentGroupChannel } = useChannelContext();

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!message) {
      setShowSendButton(false);
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
    }
  }, [message]);

  const throttledIncrement = useThrottle((e?) => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${e.target.scrollHeight - 16}px`;
    }
  }, 10);

  function handleMessageChange(event) {
    const value = event.target.value;
    setMessage(value);
    setShowSendButton(value.length > 0 ? true : false);
  }

  function onPressEnter(event) {
    if (!event.shiftKey && event.charCode === 13) {
      event.preventDefault();
      sendInputAsUserMessage();
    }
  }

  function sendInputAsUserMessage() {
    if (message.length > 0 && currentGroupChannel) {
      const params: UserMessageCreateParams = {
        message,
      };
      sendUserMessage(currentGroupChannel, params)
        .onPending((message) => {
          // console.log('## onPending', message);
          setMessage('');
        })
        .onSucceeded((message) => {
          // console.log('## onSucceeded', message);
          setMessage('');
        })
        .onFailed((error) => {
          // console.log('## onFailed', error);
        });
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
          onInput={throttledIncrement}
          rows={1}
          placeholder={'Enter message'}
          autoFocus={true}
        />
        {
          showSendButton
          && <Button>
            <SendIcon onClick={sendInputAsUserMessage} height='20px' width='20px'>Send</SendIcon>
          </Button>
        }
      </InnerContainer>
    </InputContainer>
  )
}
