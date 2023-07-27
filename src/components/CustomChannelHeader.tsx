import { GroupChannel } from '@sendbird/chat/groupChannel';
import styled from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import { useSbConnectionState } from '../context/SBConnectionContext';
import channelHeaderImage from '../icons/bot-message-image.png';

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

const RenewButtonForWidgetDemo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 2px;
`;

const RenewButtonContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  align-items: center;
  gap: 6px;
`;

const BetaLogo = styled.div`
  padding: 4px;
  background: #c8d9fa;
  border-radius: 2px;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: #30308f;
  font-family: 'SF Pro Display', sans-serif;
  letter-spacing: 0.8px;
`;

type Props = {
  channel: GroupChannel;
  createGroupChannel: () => void;
};

export default function CustomChannelHeader(props: Props) {
  const { channel, createGroupChannel } = props;
  const { betaMark, customBetaMarkText, customRefreshComponent } =
    useConstantState();
  const { setFirstMessage } = useSbConnectionState();

  function onClickRenewButton() {
    setFirstMessage(null);
    createGroupChannel();
    customRefreshComponent?.onClick?.();
    // window.location.reload();
  }

  return (
    <Root>
      <SubContainer>
        <img
          src={channelHeaderImage}
          alt="channelHeaderImage"
          style={{
            height: '34px',
          }}
        />
        <Title>{channel.name}</Title>
        {(betaMark || customBetaMarkText) && (
          <BetaLogo>{customBetaMarkText}</BetaLogo>
        )}
      </SubContainer>
      <RenewButtonContainer>
        <RenewButtonForWidgetDemo onClick={onClickRenewButton}>
          <customRefreshComponent.icon
            width={customRefreshComponent.width}
            height={customRefreshComponent.height}
            style={customRefreshComponent.style}
          />
        </RenewButtonForWidgetDemo>
      </RenewButtonContainer>
    </Root>
  );
}
