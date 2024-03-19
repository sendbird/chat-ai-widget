import Avatar from '@sendbird/uikit-react/ui/Avatar';
import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import styled from 'styled-components';

import BetaLogo from './BetaLogo';
import BotProfileImage from './BotProfileImage';
import { useConstantState } from '../context/ConstantContext';
import { useGroupChannel } from '../hooks/useGroupChannel';
import { ReactComponent as CloseButton } from '../icons/ic-widget-close.svg';
import { isMobile, isEmpty } from '../utils';

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

export default function CustomChannelHeader() {
  const { betaMark, customBetaMarkText, customRefreshComponent } =
    useConstantState();
  const { refetch: createGroupChannel, data } = useGroupChannel();
  const { setIsOpen } = useConstantState();

  function onClickRenewButton() {
    createGroupChannel();
    customRefreshComponent?.onClick?.();
    // window.location.reload();
  }

  if (!data) {
    return null;
  }

  const { botUser, channel } = data;

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
          {botUser?.nickname || channel?.name}
        </Title>
        {!isMobile && betaMark && <BetaLogo>{customBetaMarkText}</BetaLogo>}
      </SubContainer>
      <RenewButtonContainer>
        <RenewButtonForWidgetDemo onClick={onClickRenewButton}>
          <customRefreshComponent.icon
            id="aichatbot-widget-refresh-icon"
            width={customRefreshComponent.width}
            height={customRefreshComponent.height}
            style={
              isEmpty(customRefreshComponent.style)
                ? {
                    position: 'relative',
                    right: isMobile
                      ? 0
                      : // to make the refresh icon appear next to the expand & close icons in the widget window
                        60,
                  }
                : customRefreshComponent.style
            }
          />
        </RenewButtonForWidgetDemo>
        {isMobile && (
          <CloseButton onClick={() => setIsOpen?.(false)}>Close</CloseButton>
        )}
      </RenewButtonContainer>
    </Root>
  );
}
