import '../css/index.css';

import {
  FileMessageCreateParams,
  UserMessageCreateParams,
} from '@sendbird/chat/message';
import { useEffect, useRef } from 'react';

import { useSendbirdStateContext } from '@uikit/index';
import { GroupChannelProvider } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';

import { CustomChannelComponent } from './CustomChannelComponent';
import { useConstantState } from '../context/ConstantContext';
import {
  useWidgetSession,
  useWidgetSetting,
} from '../context/WidgetSettingContext';
import useWidgetButtonActivityTimeout from '../hooks/useWidgetButtonActivityTimeout';

const Chat = () => {
  useWidgetButtonActivityTimeout();
  const { stores } = useSendbirdStateContext();
  const widgetSetting = useWidgetSetting();
  const widgetSession = useWidgetSession();
  const { botStudioEditProps } = useConstantState();
  const aiAttributesRef = useRef<object>();
  aiAttributesRef.current = botStudioEditProps?.aiAttributes;

  // Initialize the manual session if channelUrl is not set.
  useEffect(() => {
    if (widgetSetting.initialized && stores.sdkStore.initialized) {
      if (widgetSession.strategy === 'manual' && !widgetSession.channelUrl) {
        widgetSetting.initManualSession(stores.sdkStore.sdk);
      }
    }
  }, [
    widgetSetting.initialized,
    widgetSession.strategy,
    widgetSession.channelUrl,
    stores.sdkStore.sdk,
    stores.sdkStore.initialized,
  ]);

  const onBeforeSendMessage = <
    T extends UserMessageCreateParams | FileMessageCreateParams
  >(
    params: T
  ) => {
    if (aiAttributesRef.current) {
      return {
        ...params,
        data: JSON.stringify({ ai_attrs: aiAttributesRef.current }),
      };
    } else {
      return params;
    }
  };

  return (
    <GroupChannelProvider
      channelUrl={widgetSession.channelUrl ?? ''}
      scrollBehavior={'smooth'}
      onBeforeSendUserMessage={onBeforeSendMessage}
      onBeforeSendFileMessage={onBeforeSendMessage}
    >
      <CustomChannelComponent />
      <div id={'sb_chat_root_for_z_index'} />
    </GroupChannelProvider>
  );
};

export default Chat;
