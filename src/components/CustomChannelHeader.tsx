import styled from 'styled-components';

import Avatar from '@uikit/ui/Avatar';
import Label, { LabelColors, LabelTypography } from '@uikit/ui/Label';

import BetaLogo from './BetaLogo';
import BotProfileImage from './BotProfileImage';
import { elementIds } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { useWidgetOpen } from '../context/WidgetOpenContext';
import CloseButton from '../icons/ic-widget-close.svg';
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

interface Props {
  onRenewButtonClick: () => Promise<void>;
  botProfileUrl?: string;
  botNickname?: string;
  channelName?: string;
}
export default function CustomChannelHeader({
  botProfileUrl,
  botNickname,
  channelName,
  onRenewButtonClick,
}: Props) {
  const { betaMark, customBetaMarkText, customRefreshComponent } =
    useConstantState();
  const { setIsOpen } = useWidgetOpen();

  async function handleRenewButtonClick() {
    try {
      await onRenewButtonClick();
      customRefreshComponent?.onClick?.();
    } catch (error) {
      console.error('Error on renew button click', error);
    }
  }

  return (
    <Root>
      <SubContainer>
        {botProfileUrl != null && botProfileUrl != '' ? (
          <Avatar
            src={botProfileUrl}
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
          {botNickname || channelName}
        </Title>
        {!isMobile && betaMark && <BetaLogo>{customBetaMarkText}</BetaLogo>}
      </SubContainer>
      <RenewButtonContainer>
        <RenewButtonForWidgetDemo
          onClick={() => {
            handleRenewButtonClick();
          }}
        >
          <customRefreshComponent.icon
            id={elementIds.refreshIcon}
            width={customRefreshComponent.width}
            height={customRefreshComponent.height}
            style={
              isEmpty(customRefreshComponent.style)
                ? {
                    position: 'relative',
                    right: isMobile
                      ? 0
                      : // to make the refresh icon appear next to the close icon in the widget window
                        26,
                  }
                : customRefreshComponent.style
            }
          />
        </RenewButtonForWidgetDemo>
        {isMobile && (
          <CloseButton
            aria-label="Close widget"
            type="button"
            id={elementIds.closeIcon}
            onClick={() => setIsOpen(false)}
          >
            Close
          </CloseButton>
        )}
      </RenewButtonContainer>
    </Root>
  );
}
