import '../../css/index.css';
import { useEffect, useRef } from 'react';

import { useSendbirdStateContext } from '@uikit/index';

import { useConstantState } from '../../context/ConstantContext';
import { useWidgetSession, useWidgetSetting } from '../../context/WidgetSettingContext';
import useWidgetButtonActivityTimeout from '../../hooks/useWidgetButtonActivityTimeout';
import { WidgetChatting } from '../chat';

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

  // const onBeforeSendMessage = <T extends UserMessageCreateParams | FileMessageCreateParams>(params: T) => {
  //   if (aiAttributesRef.current) {
  //     return {
  //       ...params,
  //       data: JSON.stringify({ ai_attrs: aiAttributesRef.current }),
  //     };
  //   } else {
  //     return params;
  //   }
  // };

  return <WidgetChatting />;

  // return (
  //   <GroupChannelProvider
  //     channelUrl={widgetSession.channelUrl ?? ''}
  //     scrollBehavior={'smooth'}
  //     onBeforeSendUserMessage={onBeforeSendMessage}
  //     onBeforeSendFileMessage={onBeforeSendMessage}
  //   >
  //     <CustomChannelComponent />
  //     <div id={'sb_chat_root_for_z_index'} />
  //   </GroupChannelProvider>
  // );
};

export default Chat;
