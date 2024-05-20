import '../css/index.css';

import {
  FileMessageCreateParams,
  UserMessageCreateParams,
} from '@sendbird/chat/message';
import { useRef } from 'react';

import { GroupChannelProvider } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';

import { CustomChannelComponent } from './CustomChannelComponent';
import { useConstantState } from '../context/ConstantContext';
import { useManualGroupChannelCreation } from '../hooks/useGroupChannel';
import useWidgetButtonActivityTimeout from '../hooks/useWidgetButtonActivityTimeout';
import useWidgetLocalStorage from '../hooks/useWidgetLocalStorage';

const Chat = () => {
  useWidgetButtonActivityTimeout();
  useManualGroupChannelCreation();
  const { channelUrl } = useWidgetLocalStorage();
  const { botStudioEditProps } = useConstantState();
  const aiAttributesRef = useRef<object>();
  aiAttributesRef.current = botStudioEditProps?.aiAttributes;

  if (!channelUrl) return <></>;

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
      channelUrl={channelUrl}
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
