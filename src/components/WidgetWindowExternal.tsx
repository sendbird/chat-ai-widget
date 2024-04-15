import Chat from './Chat';
import ProviderContainer, {
  type ProviderContainerProps,
} from './ProviderContainer';

/**
 * NOTE: External purpose only.
 * Do not use this component directly. Use Chat instead for internal use.
 */
function WidgetWindowExternal(props: ProviderContainerProps) {
  return (
    <ProviderContainer {...props}>
      <Chat />
    </ProviderContainer>
  );
}

export default WidgetWindowExternal;
