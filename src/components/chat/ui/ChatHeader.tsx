import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { useTheme } from 'styled-components';

import { elementIds } from '../../../const';
import { useConstantState } from '../../../context/ConstantContext';
import { useWidgetState } from '../../../context/WidgetStateContext';
import { themedColors } from '../../../foundation/colors/css';
import { Label } from '../../../foundation/components/Label';
import CloseIcon from '../../../icons/ic-close.svg';
import ExpandIcon from '../../../icons/ic-expand.svg';
import CollapsedIcon from '../../../icons/icon-collapse.svg';
import BotProfileImage from '../../BotProfileImage';
import { useChatContext } from '../context/ChatProvider';

export const ChatHeader = () => {
  const { botId, botStudioEditProps, isMobileView, callbacks } = useConstantState();
  const { channel, dataSource } = useChatContext();
  const { setIsOpen } = useWidgetState();

  const { botInfo } = botStudioEditProps ?? {};
  const botUser = channel?.members.find((member) => member.userId === botId);
  const botNickname = botInfo?.nickname ?? botUser?.nickname;
  const profileUrl = botInfo?.profileUrl ?? botUser?.profileUrl;
  const buttonSize = isMobileView ? 24 : 16;

  const handleRefresh = async () => {
    await channel?.resetMyHistory();
    await dataSource.refresh();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={container}>
      <div style={{ marginRight: 6 }}>
        <BotProfileImage size={34} profileUrl={profileUrl} />
      </div>
      <div style={{ flex: 1 }}>
        <Label type={'h2'} color={'onbackground1'}>
          {botNickname || channel?.name}
        </Label>
      </div>
      <div className={buttonsContainer}>
        <RefreshButton size={buttonSize} onClick={handleRefresh} />
        {callbacks?.onWidgetExpandStateChange && <ExpandButton size={buttonSize} />}
        <CloseButton size={buttonSize} onClick={handleClose} />
      </div>
    </div>
  );
};

type ButtonProps = {
  size: number;
  onClick?: () => void;
};

const RefreshButton = ({ size, onClick }: ButtonProps) => {
  const { customRefreshComponent } = useConstantState();
  const theme = useTheme();

  const handleClick = () => {
    onClick?.();
    customRefreshComponent?.onClick?.();
  };

  return (
    <IconButton id={elementIds.refreshIcon} aria-label={'refresh'} onClick={handleClick} color={theme.accentColor}>
      <customRefreshComponent.icon
        style={customRefreshComponent.style}
        width={customRefreshComponent.width ?? size}
        height={customRefreshComponent.height ?? size}
      />
    </IconButton>
  );
};

const ExpandButton = ({ size }: ButtonProps) => {
  const { isExpanded, setIsExpanded } = useWidgetState();
  const Icon = isExpanded ? CollapsedIcon : ExpandIcon;

  return (
    <IconButton id={elementIds.expandIcon} aria-label={'expand'} onClick={() => setIsExpanded(!isExpanded)}>
      <Icon width={size} height={size} />
    </IconButton>
  );
};

const CloseButton = ({ size, onClick }: ButtonProps) => {
  return (
    <IconButton id={elementIds.closeIcon} aria-label={'close'}>
      <CloseIcon width={size} height={size} onClick={onClick} />
    </IconButton>
  );
};

const container = css`
  height: 56px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  padding: 11px 12px;
  border-bottom: 1px solid ${themedColors.onbackground4};
`;

const buttonsContainer = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const IconButton = styled.button<{ color?: string }>`
  all: unset;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg > path {
    fill: ${({ color }) => color ?? '#5E5E5E'};
  }
`;
