import styled from 'styled-components';

import { StringSet } from '@uikit/ui/Label/stringSet';

import ProviderContainer from './ProviderContainer';
import WidgetToggleButton from './WidgetToggleButton';
import WidgetWindow from './WidgetWindow';
import { type Constant, elementIds, WIDGET_WINDOW_Z_INDEX } from '../../const';
import { useChannels } from '../../context/ChannelsContext';
import { useWidgetState } from '../../context/WidgetStateContext';
import useMobileView from '../../hooks/useMobileView';
import { useWidgetAutoOpen } from '../../hooks/useWidgetAutoOpen';
import { isMobile } from '../../utils';
import ChannelList from '../ChannelList';
import Chat from '../chat';

const MobileContainer = styled.div<{ width: number }>`
  position: fixed;
  z-index: ${WIDGET_WINDOW_Z_INDEX};
  top: 0;
  left: 0;
  width: ${({ width }) => `${width}px`};
  height: 100%;
  overflow: hidden;
  background-color: white;
`;

type View = 'channel' | 'channelList';

const DesktopComponent = () => {
  const { isVisible } = useWidgetState();
  useWidgetAutoOpen();
  const { currentChannel } = useChannels();

  const currentView: View = currentChannel ? 'channel' : 'channelList';

  // function addChannel(channel: GroupChannel) {
  //   setChannels((oldChannels) => {
  //     const newChannels = [channel, ...oldChannels];
  //     sortChannelsByLastMessage(newChannels);
  //     return newChannels;
  //   });
  //   // TODO: Add group channel handler.
  // }

  // function sortChannelsByLastMessage(channels: GroupChannel[]) {
  //   channels.sort((a, b) => {
  //     const aTime = a.lastMessage?.createdAt ?? a.createdAt;
  //     const bTime = b.lastMessage?.createdAt ?? b.createdAt;
  //     if (aTime > bTime) return -1;
  //     if (aTime < bTime) return 1;
  //     return 0;
  //   })
  // }

  return (
    <>
      <WidgetWindow>{currentView === 'channel' ? <Chat /> : <ChannelList />}</WidgetWindow>
      {isVisible && <WidgetToggleButton />}
    </>
  );
};

const MobileComponent = () => {
  const { isOpen, isVisible } = useWidgetState();
  const { width: mobileContainerWidth } = useMobileView();

  return (
    <>
      <MobileContainer
        style={{ display: isOpen && isVisible ? 'block' : 'none' }}
        width={mobileContainerWidth}
        id={elementIds.widgetWindow}
      >
        <Chat />
      </MobileContainer>
      {isVisible && !isOpen && <WidgetToggleButton />}
    </>
  );
};

export interface ChatAiWidgetProps extends Omit<Partial<Constant>, 'stringSet'> {
  applicationId: string;
  botId: string;
  hashedKey?: string;
  stringSet?: Partial<StringSet>;
}

export default function ChatAiWidget(props: ChatAiWidgetProps) {
  return (
    <ProviderContainer {...props}>
      {isMobile(props.deviceType) ? <MobileComponent /> : <DesktopComponent />}
    </ProviderContainer>
  );
}
