import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { useTheme } from 'styled-components';

import { CustomizedDemoCategory, customizedDemoSettings, elementIds } from '../../../const';
import { useConstantState } from '../../../context/ConstantContext';
import { useWidgetState } from '../../../context/WidgetStateContext';
import { themedColors } from '../../../foundation/colors/css';
import { Label } from '../../../foundation/components/Label';
import ExpandIcon from '../../../icons/ic-expand.svg';
import CollapsedIcon from '../../../icons/icon-collapse.svg';
import BotProfileImage from '../../BotProfileImage';
import BatteryIcon from '../../../icons/icon-battery.svg';
import CelluarConnectionIcon from '../../../icons/icon-celluar-connection.svg';
import WifiIcon from '../../../icons/icon-wifi.svg';
import { useChatContext } from '../context/ChatProvider';

export const DemoChatHeader = () => {
  const { botStudioEditProps, isMobileView, enableWidgetExpandButton, customizedDemoCategory } = useConstantState();
  const { sdk, channel, botUser, dataSource } = useChatContext();

  const { botInfo } = botStudioEditProps ?? {};
  const botNickname = botInfo?.nickname ?? botUser?.nickname;
  const isExpandableMode = !isMobileView;

  const handleRefresh = async () => {
    if (sdk && channel) {
      await Promise.allSettled([sdk.clearCachedMessages([channel.url]), channel.resetMyHistory()]);
      await dataSource.refresh();
    }
  };

  return (
    <div className={demoHeaderContainer}>
      <div className={demoStatusBarContainer}>
        <span>9:41</span>
        <div className={statusIconContainer}>
          <CelluarConnectionIcon />
          <WifiIcon />
          <BatteryIcon />
        </div>
      </div>
      <div className={container}>
        <div style={{ marginRight: 6 }}>
          <BotProfileImage size={34} />
        </div>
        <div className={headerCenter}>
          <Label type={'h2'} color={'onbackground1'} className={titleInline}>
            {botNickname || channel?.name}
          </Label>
        </div>
        <div className={buttonsContainer}>
          <RefreshButton size={24} onClick={handleRefresh} category={customizedDemoCategory} />
          {isExpandableMode && enableWidgetExpandButton && <ExpandButton size={24} />}
        </div>
      </div>
    </div>
  );
};

type ButtonProps = {
  size: number;
  onClick?: () => void;
  category?: CustomizedDemoCategory;
};

const RefreshButton = ({ size, onClick, category }: ButtonProps) => {
  const { customRefreshComponent } = useConstantState();
  const theme = useTheme();

  const handleClick = () => {
    onClick?.();
    customRefreshComponent?.onClick?.();
  };

  return (
    <IconButton
      id={elementIds.refreshIcon}
      aria-label={'refresh'}
      onClick={handleClick}
      color={category ? customizedDemoSettings[category]?.color : theme.accentColor}
    >
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

const demoHeaderContainer = css`
  display: flex;
  flex-direction: column;
`;

const demoStatusBarContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 14px 0px 30px;
`;

const statusIconContainer = css`
  display: inline-flex;
  gap: 5px;
  align-items: center;
`;

const container = css`
  height: 56px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  padding: 11px 12px;
  border-bottom: 1px solid ${themedColors.onbackground4};
`;

const headerCenter = css`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 8px;
`;

const titleInline = css`
  text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 192px;
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
