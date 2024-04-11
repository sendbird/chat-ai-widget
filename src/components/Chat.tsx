import '@sendbird/uikit-react/dist/index.css';
import '../css/index.css';
import { GroupChannelProvider } from '@sendbird/uikit-react/GroupChannel/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { type Props as ChatWidgetProps } from './ChatAiWidget';
import { CustomChannelComponent } from './CustomChannelComponent';
import SBComponent from './SBComponent';
import { ConstantStateProvider } from '../context/ConstantContext';
import { useManualGroupChannelCreation } from '../hooks/useGroupChannel';
import useWidgetLocalStorage from '../hooks/useWidgetLocalStorage';
import { assert } from '../utils';

interface Props extends ChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Chat = () => {
  useManualGroupChannelCreation();
  const { channelUrl } = useWidgetLocalStorage();

  return (
    <GroupChannelProvider
      channelUrl={channelUrl}
      scrollBehavior="smooth"
      reconnectOnIdle={false}
    >
      <CustomChannelComponent />
      <div id={'sb_chat_root_for_z_index'} />
    </GroupChannelProvider>
  );
};

/**
 * NOTE: External purpose only.
 * Do not use this component directly. Use Chat instead for internal use.
 */
export default function ChatClient(props: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 5000,
      },
    },
  });
  const { applicationId, botId, setIsOpen, ...constantProps } = props;

  // If env is not provided, prop will be used instead.
  // But Either should be provided.
  const CHAT_WIDGET_APP_ID =
    import.meta.env.VITE_CHAT_WIDGET_APP_ID ?? applicationId;
  const CHAT_WIDGET_BOT_ID = import.meta.env.VITE_CHAT_WIDGET_BOT_ID ?? botId;

  assert(
    CHAT_WIDGET_APP_ID !== null && CHAT_WIDGET_BOT_ID !== null,
    'applicationId and botId must be provided'
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ConstantStateProvider
        applicationId={CHAT_WIDGET_APP_ID}
        botId={CHAT_WIDGET_BOT_ID}
        setIsOpen={setIsOpen}
        {...constantProps}
      >
        <SBComponent>
          <Chat />
        </SBComponent>
      </ConstantStateProvider>
    </QueryClientProvider>
  );
}
