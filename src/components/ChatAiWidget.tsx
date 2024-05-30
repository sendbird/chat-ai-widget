import styled from 'styled-components';

import { StringSet } from '@uikit/ui/Label/stringSet';

import Chat from './Chat';
import ProviderContainer from './ProviderContainer';
import WidgetToggleButton from './WidgetToggleButton';
import WidgetWindow from './WidgetWindow';
import { elementIds, type Constant, WIDGET_WINDOW_Z_INDEX } from '../const';
import { useWidgetState } from '../context/WidgetStateContext';
import useMobileView from '../hooks/useMobileView';
import { useWidgetAutoOpen } from '../hooks/useWidgetAutoOpen';
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
  const { isVisible } = useWidgetState();

  useWidgetAutoOpen();

  return (
    <>
      <WidgetWindow>
        <Chat />
      </WidgetWindow>
      {isVisible && <WidgetToggleButton />}
    </>
  );
};

const MobileComponent = () => {
  const { isOpen, isVisible } = useWidgetState();
  const { width: mobileContainerWidth } = useMobileView();

  useWidgetAutoOpen();

  return (
    <>
      <MobileContainer
        style={{ display: (isOpen && isVisible) ? 'block' : 'none' }}
        width={mobileContainerWidth}
        id={elementIds.widgetWindow}
      >
        <Chat />
      </MobileContainer>
      {isVisible && !isOpen && <WidgetToggleButton />}
    </>
  );
};

export interface ChatAiWidgetProps
  extends Omit<Partial<Constant>, 'stringSet'> {
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
