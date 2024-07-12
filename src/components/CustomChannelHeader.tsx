import styled from 'styled-components';

import Avatar from '@uikit/ui/Avatar';

import BotProfileImage from './BotProfileImage';
import BetaLogo from './ui/BetaLogo';
import { elementIds } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { useWidgetState } from '../context/WidgetStateContext';
import { Label } from '../foundation/Label';
import CloseButton from '../icons/ic-widget-close.svg';
import { isEmpty } from '../utils';

const RIGHT_WITH_EXPAND_BUTTON = 60; // gap = 6 and button width = 24 => 24 * 2 + 6 * 2 = 60
const RIGHT_WITHOUT_EXPAND_BUTTON = 26;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor.channelHeader};
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

const RenewButtonContainer = styled.div<{ gap: number }>`
  display: flex;
  height: fit-content;
  width: fit-content;
  align-items: center;
  gap: ${({ gap }) => `${gap}px`};
`;

interface Props {
  onRenewButtonClick: () => Promise<void>;
  botProfileUrl?: string;
  botNickname?: string;
  channelName?: string;
}
export default function CustomChannelHeader({ botProfileUrl, botNickname, channelName, onRenewButtonClick }: Props) {
  const { betaMark, customBetaMarkText, customRefreshComponent, isMobileView, callbacks } = useConstantState();
  const { setIsOpen } = useWidgetState();

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
          <Avatar src={botProfileUrl} alt="channelHeaderImage" height="34px" width="34px" />
        ) : (
          <BotProfileImage width={34} height={34} iconWidth={20} iconHeight={20} />
        )}
        <Title type={'h2'} color={'onbackground1'}>
          {botNickname || channelName}
        </Title>
        {!isMobileView && betaMark && <BetaLogo>{customBetaMarkText}</BetaLogo>}
      </SubContainer>
      <RenewButtonContainer gap={isMobileView ? 14 : 8}>
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
                    right: isMobileView
                      ? 0
                      : // to make the refresh icon appear next to the close icon in the widget window
                        callbacks?.onWidgetExpandStateChange
                        ? RIGHT_WITH_EXPAND_BUTTON
                        : RIGHT_WITHOUT_EXPAND_BUTTON,
                  }
                : customRefreshComponent.style
            }
          />
        </RenewButtonForWidgetDemo>
        {isMobileView && (
          <CloseButton
            aria-label="Close widget"
            type="button"
            id={elementIds.closeIcon}
            width={'24px'}
            height={'24px'}
            onClick={() => setIsOpen(false)}
          >
            Close
          </CloseButton>
        )}
      </RenewButtonContainer>
    </Root>
  );
}
