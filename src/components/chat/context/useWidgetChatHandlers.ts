import type { FileMessageCreateParams, UserMessageCreateParams } from '@sendbird/chat/message';
import { useRef } from 'react';

import { useConstantState } from '../../../context/ConstantContext';

export interface WidgetChatHandlers {
  onBeforeSendMessage: <T extends UserMessageCreateParams | FileMessageCreateParams>(params: T) => T;
  onAfterSendMessage: () => void;
}

export const useWidgetChatHandlers = (params: { onScrollToBottom: () => void }) => {
  const { botStudioEditProps } = useConstantState();
  const aiAttributesRef = useRef(botStudioEditProps?.aiAttributes);
  aiAttributesRef.current = botStudioEditProps?.aiAttributes;

  return {
    onBeforeSendMessage: <T extends UserMessageCreateParams | FileMessageCreateParams>(params: T) => {
      if (aiAttributesRef.current) {
        return {
          ...params,
          data: JSON.stringify({ ai_attrs: aiAttributesRef.current }),
        };
      } else {
        return params;
      }
    },
    onAfterSendMessage: params.onScrollToBottom,
  } satisfies WidgetChatHandlers;
};
