import Chat from './Chat';
import { ChatAiWidgetProps } from './ChatAiWidget';
import ProviderContainer from './ProviderContainer';
import { elementIds } from '../../const';

/**
 * NOTE: External purpose only.
 * Do not use this component directly. Use Chat instead for internal use.
 */
function WidgetWindowFullScreen(props: ChatAiWidgetProps) {
  return (
    <ProviderContainer {...props}>
      <div
        id={elementIds.widgetWindow}
        style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', transform: 'scale(1)' }}
      >
        <Chat />
      </div>
    </ProviderContainer>
  );
}

export default WidgetWindowFullScreen;
