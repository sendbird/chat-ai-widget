import type { FileMessageCreateParams, UserMessageCreateParams } from '@sendbird/chat/message';
import { useRef } from 'react';

import { useConstantState } from '../../../context/ConstantContext';
import { getImageAspectRatioMetaArray } from '../../../utils/getImageAspectRatio';

export interface WidgetChatHandlers {
  onBeforeSendMessage: <T extends UserMessageCreateParams | FileMessageCreateParams>(params: T) => Promise<T>;
  onAfterSendMessage: () => void;
}

export const useWidgetChatHandlers = (params: { onScrollToBottom: () => void }) => {
  const { botStudioEditProps } = useConstantState();
  const aiAttributesRef = useRef(botStudioEditProps?.aiAttributes);
  aiAttributesRef.current = botStudioEditProps?.aiAttributes;

  return {
    onBeforeSendMessage: async <T extends UserMessageCreateParams | FileMessageCreateParams>(params: T) => {
      const metaArray = await getImageAspectRatioMetaArray(params);
      if (aiAttributesRef.current) {
        return {
          ...params,
          metaArrays: metaArray ? [metaArray] : undefined,
          data: JSON.stringify({ ai_attrs: aiAttributesRef.current }),
        };
      } else {
        return {
          ...params,
          metaArrays: metaArray ? [metaArray] : undefined,
        };
      }
    },
    onAfterSendMessage: params.onScrollToBottom,
  } satisfies WidgetChatHandlers;
};
