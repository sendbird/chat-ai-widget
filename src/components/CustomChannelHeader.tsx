import { User } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import Avatar from '@sendbird/uikit-react/ui/Avatar';
import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import styled from 'styled-components';

import BetaLogo from './BetaLogo';
import BotProfileImage from './BotProfileImage';
import { useConstantState } from '../context/ConstantContext';
import { useSbConnectionState } from '../context/SBConnectionContext';
import { ReactComponent as CloseButton } from '../icons/ic-widget-close.svg';
import { isMobile } from '../utils';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor.channelHeaderBorder};
  padding: 11px 12px;
`;

const SubContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Title = styled(Label)`
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

  svg {
    path {
      fill: ${({ theme }) => theme.accentColor};
    }
  }
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
  const { setIsOpen } = useConstantState();

  function onClickRenewButton() {
    setFirstMessage(null);
    createGroupChannel();
    customRefreshComponent?.onClick?.();
    // window.location.reload();
  }

  return (
    <Root>
      <SubContainer>
        {botUser?.profileUrl != null && botUser.profileUrl != '' ? (
          <Avatar
            src={botUser.profileUrl}
            alt="channelHeaderImage"
            height="34px"
            width="34px"
          />
        ) : (
          <BotProfileImage
            width={34}
            height={34}
            iconWidth={20}
            iconHeight={20}
          />
        )}
        <Title type={LabelTypography.H_2} color={LabelColors.ONBACKGROUND_1}>
          {botUser?.nickname || channel.name}
        </Title>
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
        {isMobile && (
          <CloseButton onClick={() => setIsOpen?.(false)}>Close</CloseButton>
        )}
      </RenewButtonContainer>
    </Root>
  );
}
