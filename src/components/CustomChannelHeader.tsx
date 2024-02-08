import { User } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import Avatar from '@sendbird/uikit-react/ui/Avatar';
import styled, { css } from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import { useSbConnectionState } from '../context/SBConnectionContext';
import { useResetStorageData } from '../hooks/useInteractiveDemoSharableData';
import channelHeaderImage from '../icons/bot-message-image.png';
import { ReactComponent as BatteryIcon } from '../icons/icon-battery.svg';
import { ReactComponent as CellularIcon } from '../icons/icon-cellular-connection.svg';
import { ReactComponent as WifiIcon } from '../icons/icon-wifi.svg';
import { categoryColors } from '../utils/category';

const StyledCustomCustomChannelComponentWrapper = styled.div<{
  botCategory?: string;
}>`
  ${({ botCategory }) =>
    botCategory &&
    css`
      background: ${categoryColors[botCategory]['background-header-color']};
    `}
`;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0 12px 12px;
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
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const RenewButtonForWidgetDemo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 4px;
`;

const RenewButtonContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  align-items: center;
  gap: 6px;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 12px;
`;

type Props = {
  channel: GroupChannel;
  botUser: User;
  createGroupChannel: () => void;
};

export default function CustomChannelHeader(props: Props) {
  const { channel, createGroupChannel, botUser } = props;
  const { customRefreshComponent } = useConstantState();
  const { botCategory } = useConstantState();
  const { setFirstMessage } = useSbConnectionState();
  const resetStorageData = useResetStorageData();

  function onClickRenewButton() {
    setFirstMessage(null);
    createGroupChannel();
    resetStorageData();
    customRefreshComponent?.onClick?.();
    // window.location.reload();
  }

  return (
    <StyledCustomCustomChannelComponentWrapper botCategory={botCategory}>
      <StatusBar>
        <div style={{ fontSize: 16, marginLeft: 8 }}>9:41</div>
        <div style={{ display: 'flex' }}>
          <CellularIcon />
          <WifiIcon style={{ marginLeft: 7 }} />
          <BatteryIcon style={{ marginLeft: 7 }} />
        </div>
      </StatusBar>
      <Root>
        <SubContainer>
          <Avatar
            src={botUser?.profileUrl || channelHeaderImage}
            alt="channelHeaderImage"
            height="34px"
            width="34px"
          />
          <Title>{botUser?.nickname || channel.name}</Title>
          {/* {!isMobile && (betaMark || customBetaMarkText) && (
          <BetaLogo>{customBetaMarkText}</BetaLogo>
        )} */}
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
    </StyledCustomCustomChannelComponentWrapper>
  );
}
