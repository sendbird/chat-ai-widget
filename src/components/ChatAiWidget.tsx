import styled from 'styled-components';

import Chat from './Chat';
import ProviderContainer from './ProviderContainer';
import WidgetToggleButton from './WidgetToggleButton';
import WidgetWindow from './WidgetWindow';
import { elementIds, type Constant, WIDGET_WINDOW_Z_INDEX } from '../const';
import { useWidgetOpen } from '../context/WidgetOpenContext';
import useMobileView from '../hooks/useMobileView';
import { isMobile } from '../utils';

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

const DesktopComponent = () => {
  return (
    <>
      <WidgetWindow>
        <Chat />
      </WidgetWindow>
      <WidgetToggleButton />
    </>
  );
};

const MobileComponent = () => {
  const { isOpen } = useWidgetOpen();
  const { width: mobileContainerWidth } = useMobileView();

  return (
    <>
      <WidgetToggleButton />
      <MobileContainer
        style={{ display: isOpen ? 'block' : 'none' }}
        width={mobileContainerWidth}
        id={elementIds.widgetWindow}
      >
        <Chat />
      </MobileContainer>
    </>
  );
};

export interface ChatAiWidgetProps extends Partial<Constant> {
  applicationId: string;
  botId: string;
  hashedKey?: string;
}

export default function ChatAiWidget(props: ChatAiWidgetProps) {
  return (
    <ProviderContainer {...props}>
      {isMobile(props.deviceType) ? <MobileComponent /> : <DesktopComponent />}
    </ProviderContainer>
  );
}
