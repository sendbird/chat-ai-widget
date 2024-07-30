import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { ChatContainer } from './context/ChatProvider';
import { ChatUI } from './ui';
import { useWidgetSetting } from '../../context/WidgetSettingContext';

export const WidgetChatting = () => {
  const { stores } = useSendbirdStateContext();

  // const { stringSet, botStudioEditProps } = useConstantState();
  const { widgetSession } = useWidgetSetting();

  return (
    <ChatContainer
      sdk={stores.sdkStore.sdk}
      channelUrl={widgetSession?.channelUrl ?? ''}
      stringSet={{
        ERR_CHANNEL_FETCH: 'Failed to retrieve channel information',
      }}
    >
      <ChatUI />
    </ChatContainer>
  );
};
