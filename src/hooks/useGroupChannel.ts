import { useQuery } from '@tanstack/react-query';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { saveToLocalStorage } from './useWidgetLocalStorage';
import { useConstantState } from '../context/ConstantContext';
import { getDateNDaysLater, assert } from '../utils';

/**
 * This hook is used to create a group channel manually
 * when configureSession and userId are provided via ChatAiWidget props
 */
export const useManualGroupChannelCreation = () => {
  const {
    instantConnect,
    firstMessageData,
    createGroupChannelParams,
    applicationId: appId,
    botId,
    configureSession,
    userId: customUserId,
  } = useConstantState();

  const store = useSendbirdStateContext();
  const sb = store.stores.sdkStore.sdk;

  useQuery({
    enabled:
      sb?.groupChannel != null &&
      botId != null &&
      customUserId != null &&
      configureSession != null &&
      typeof configureSession === 'function',
    queryKey: ['createChannel', customUserId, botId],
    retry: 0,
    queryFn: async () => {
      try {
        const paramData =
          instantConnect && firstMessageData
            ? JSON.stringify({
                first_message_data: firstMessageData,
              })
            : undefined;

        assert(
          botId != null && customUserId != null,
          'botId and customUserId must be provided'
        );
        const channel = await sb?.groupChannel?.createChannel({
          name: createGroupChannelParams?.name,
          invitedUserIds: [customUserId, botId],
          isDistinct: false,
          coverUrl: createGroupChannelParams?.coverUrl,
          data: paramData,
        });
        saveToLocalStorage(
          { appId, botId },
          {
            channelUrl: channel.url,
            expireAt: getDateNDaysLater(30),
            userId: customUserId,
            // there's no sessionToken in this case since we don't know the value of it
            // but instead, it should be handled by configureSession that user provides
            sessionToken: undefined,
          }
        );
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create a new channel');
      }
    },
  });
};
