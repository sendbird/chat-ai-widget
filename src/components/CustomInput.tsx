import styled from "styled-components";
import { ReactComponent as RefreshIcon } from '../icons/refresh-icon.svg';
import {GroupChannel} from "@sendbird/chat/groupChannel";
import { ReactComponent as ChannelHeaderImage } from '../icons/channel-header-image.svg';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 16px 24px;
`;

const SubContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: rgba(0, 0, 0, 0.88);
  margin-bottom: 4px;
`;

const TypingIndicator = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.38);
`;

const RenewButton = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  font-size: 15px;
  line-height: 12px;
  color: #6210CC;
  cursor: pointer;
`;

type Props = {
  channel: GroupChannel;
  isTyping: boolean;
}

export default function CustomInput(props: Props) {
  const { channel, isTyping } = props;

  return <Root>
    <SubContainer>
      <ChannelHeaderImage/>
      <div>
        <Title>{channel.name}</Title>
        <TypingIndicator>{ isTyping ? 'Thinking...' : 'AI Chatbot' }</TypingIndicator>
      </div>
    </SubContainer>
    <RenewButton onClick={}>
      <div>Renew</div>
      <RefreshIcon height='20px' width='20px'/>
    </RenewButton>
  </Root>;
}