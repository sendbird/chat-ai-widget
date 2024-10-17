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
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
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
    customRefreshComponent?.onClick?.() ?? window.location.reload();
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
            <div
              style={{
                width: 24,
                height: 24,
              }}
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3026 2.41113L15.5134 2.61281L18 4.92515L18.0001 2.00003C18.0001 1.4872 18.3861 1.06453 18.8835 1.00676L19.0001 1.00003C19.5129 1.00003 19.9356 1.38607 19.9934 1.88341L20.0001 2.00003V8.00003C20.0001 8.51287 19.6141 8.93554 19.1167 8.99331L19.0001 9.00003H13.0001C12.4478 9.00003 12.0001 8.55232 12.0001 8.00003C12.0001 7.4872 12.3861 7.06453 12.8835 7.00676L13.0001 7.00003L17.2946 7.00003L14.1295 4.05645C11.8929 1.84645 8.44149 1.36302 5.66851 2.87286C2.90115 4.37964 1.47901 7.50688 2.17556 10.5437C2.87284 13.5837 5.52644 15.8054 8.68662 15.9879C11.8477 16.1705 14.7472 14.2685 15.7992 11.3281C15.9852 10.8081 16.5576 10.5374 17.0776 10.7234C17.5976 10.9095 17.8683 11.4818 17.6823 12.0018C16.3302 15.7809 12.6148 18.2182 8.57128 17.9846C4.52685 17.751 1.12311 14.9013 0.226178 10.9908C-0.671496 7.07716 1.15961 3.05063 4.71213 1.11635C8.17252 -0.767774 12.4557 -0.225629 15.3026 2.41113Z"
                  fill={categoryColors[botCategory]['--sendbird-light-primary-300']}
                />
              </svg>
            </div>

          </RenewButtonForWidgetDemo>
        </RenewButtonContainer>
      </Root>
    </StyledCustomCustomChannelComponentWrapper>
  );
}
