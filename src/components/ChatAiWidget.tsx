import '@sendbird/uikit-react/dist/index.css';
import styled from 'styled-components';

import Chat from './Chat';
import ProviderContainer, {
  type ProviderContainerProps,
} from './ProviderContainer';
import WidgetToggleButton from './WidgetToggleButton';
import WidgetWindow from './WidgetWindow';
import { MAX_Z_INDEX, elementIds } from '../const';
import { useWidgetOpen } from '../context/WidgetOpenContext';
import useMobileView from '../hooks/useMobileView';
import { isMobile } from '../utils';

const MobileContainer = styled.div<{ width: number }>`
  position: fixed;
  z-index: ${MAX_Z_INDEX};
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
      {!isOpen && <WidgetToggleButton />}
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

export default function ChatAiWidget(props: ProviderContainerProps) {
  return (
    <ProviderContainer {...props}>
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </ProviderContainer>
  );
}
