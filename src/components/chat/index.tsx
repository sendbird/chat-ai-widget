import { FileMessageCreateParams, UserMessageCreateParams } from '@sendbird/chat/message';
import { useRef } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { ChatContainer } from './context/ChatProvider';
import { ChatUI } from './ui';
import { useConstantState } from '../../context/ConstantContext';
import { useWidgetSetting } from '../../context/WidgetSettingContext';

export const WidgetChatting = () => {
  const { stores } = useSendbirdStateContext();

  const { stringSet, botStudioEditProps } = useConstantState();
  const { widgetSession } = useWidgetSetting();

  const aiAttributesRef = useRef(botStudioEditProps?.aiAttributes);
  aiAttributesRef.current = botStudioEditProps?.aiAttributes;

  const onBeforeSendMessage = <T extends UserMessageCreateParams | FileMessageCreateParams>(params: T) => {
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
    <ChatContainer
      sdk={stores.sdkStore.sdk}
      channelUrl={widgetSession?.channelUrl ?? ''}
      stringSet={{
        ERR_SOMETHING_WENT_WRONG: stringSet.PLACE_HOLDER__WRONG,
        ERR_NOT_FOUND_CHANNEL: 'Not found channel',
      }}
      handlers={{
        onBeforeSendMessage,
      }}
    >
      <ChatUI />
    </ChatContainer>
  );
};
