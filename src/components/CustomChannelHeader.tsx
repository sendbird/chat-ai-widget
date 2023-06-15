import styled from "styled-components";
import { ReactComponent as RefreshIcon } from '../icons/refresh-icon.svg';
import {GroupChannel} from "@sendbird/chat/groupChannel";
import channelHeaderImage from '../icons/bot-message-image.png';
import {useContext} from "react";
import {DemoConstant} from "../const";
import {DemoStatesContext} from "../context/DemoStatesContext";
import {BetaLogo} from "./StartingPage";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 11px 12px;
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
  font-size: 14px;
  line-height: 12px;
  color: #6210CC;
  cursor: pointer;
`;

const RenewButtonContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  align-items: center;
`;

const DelimiterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Delimiter = styled.div`
  background: #CCCCCC;
  width: 1px;
  height: 20px;
  margin: 0 12px;
`;

const EmptyContainer = styled.div`
  width: 20px;
  height: 20px;
`;

type Props = {
  channel: GroupChannel;
  isTyping: boolean;
  createGroupChannel: () => void;
}

export default function CustomChannelHeader(props: Props) {
  const { channel, isTyping, createGroupChannel } = props;
  const demoStates = useContext<DemoConstant>(DemoStatesContext);
  const isWebDemo: boolean = demoStates.name === 'webDemo';

  function onClickRenewButton() {
    createGroupChannel();
    // window.location.reload();
  }
  return <Root>
    <SubContainer>
      <img src={channelHeaderImage} alt="channelHeaderImage" style={{
        height: "34px"
      }}/>
      <Title>{channel.name}</Title>
      <BetaLogo>{ isWebDemo ? 'DEMO' : 'BETA' }</BetaLogo>
    </SubContainer>
    <RenewButtonContainer>
      <RenewButton onClick={onClickRenewButton}>
        <div>Refresh</div>
        <RefreshIcon height='18px' width='18px'/>
      </RenewButton>
      {
        !isWebDemo && <DelimiterContainer>
          <Delimiter/>
          <EmptyContainer/>
        </DelimiterContainer>
      }
    </RenewButtonContainer>
  </Root>;
}