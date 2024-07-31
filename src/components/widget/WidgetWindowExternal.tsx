import { ChatAiWidgetProps } from './ChatAiWidget';
import ProviderContainer from './ProviderContainer';
import Chat from '../chat';

/**
 * NOTE: External purpose only.
 * Do not use this component directly. Use Chat instead for internal use.
 */
function WidgetWindowExternal(props: ChatAiWidgetProps) {
  return (
    <ProviderContainer {...props}>
      <Chat />
    </ProviderContainer>
  );
}

export default WidgetWindowExternal;
