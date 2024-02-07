import { User } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import Avatar from '@sendbird/uikit-react/ui/Avatar';
import styled from 'styled-components';

import BetaLogo from './BetaLogo';
import { useConstantState } from '../context/ConstantContext';
import { useSbConnectionState } from '../context/SBConnectionContext';
import channelHeaderImage from '../icons/bot-message-image.png';
import { isMobile } from '../utils';

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
  margin-right: 2px;
`;

const RenewButtonContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  align-items: center;
  gap: 6px;
`;

type Props = {
  channel: GroupChannel;
  botUser: User;
  createGroupChannel: () => void;
};

export default function CustomChannelHeader(props: Props) {
  const { channel, createGroupChannel, botUser } = props;
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
        <Avatar
          src={botUser?.profileUrl || channelHeaderImage}
          alt="channelHeaderImage"
          height="34px"
          width="34px"
        />
        <Title>{botUser?.nickname || channel.name}</Title>
        {!isMobile && betaMark && <BetaLogo>{customBetaMarkText}</BetaLogo>}
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
