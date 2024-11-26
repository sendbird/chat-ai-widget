import {
  GroupChannel,
  GroupChannelCollectionParams,
  GroupChannelFilter,
  GroupChannelFilterParams,
} from '@sendbird/chat/groupChannel';
import { useGroupChannelList } from '@sendbird/uikit-tools';
import React, { createContext, useContext, useEffect, useState } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { useWidgetSession, useWidgetSetting } from './WidgetSettingContext';

// TODO: open public
export type ChannelListQueryParamsType = Omit<GroupChannelCollectionParams, 'filter'> & GroupChannelFilterParams;

type Context = {
  channels?: GroupChannel[];
  currentChannel?: GroupChannel;
  setCurrentChannel: React.Dispatch<React.SetStateAction<GroupChannel | undefined>>;
};

const ChannelsContext = createContext<Context | null>(null);

export const ChannelsProvider = ({ children }: React.PropsWithChildren) => {
  const { stores } = useSendbirdStateContext();
  const sdk = stores.sdkStore.sdk;
  const { initialized, initManualSession, widgetSession } = useWidgetSetting();
  const { strategy, channelUrl } = useWidgetSession();
  const { initialized: collectionInitialized, groupChannels } = useGroupChannelList(sdk, {
    collectionCreator: (defaultParams: ChannelListQueryParamsType) => {
      const params = defaultParams;
      return sdk.groupChannel.createGroupChannelCollection({
        ...params,
        filter: new GroupChannelFilter(params),
      });
    },
    // TODO: implement markAsDelivered.
    // TODO: implement onChannelsDeleted. Need to update cached channel url.
  });

  const [currentChannel, setCurrentChannel] = useState<GroupChannel | undefined>(getCurrentChannel());

  // Initialize the manual session if channelUrl is not set.
  useEffect(() => {
    if (initialized && stores.sdkStore.initialized) {
      if (strategy === 'manual' && !channelUrl) {
        initManualSession(stores.sdkStore.sdk);
      }
    }
  }, [initialized, strategy, channelUrl, sdk, stores.sdkStore.initialized]);

  function getCurrentChannel(): GroupChannel | undefined {
    if (!collectionInitialized || !Array.isArray(groupChannels) || groupChannels.length === 0) return undefined;

    const index = groupChannels.findIndex((channel) => channel.url === channelUrl);
    return groupChannels[index > -1 ? index : 0];
  }

  return (
    <ChannelsContext.Provider
      value={{
        channels: groupChannels,
        currentChannel,
        setCurrentChannel,
      }}
    >
      {widgetSession && collectionInitialized ? children : null}
    </ChannelsContext.Provider>
  );
};

export const useChannels = () => {
  const context = useContext(ChannelsContext);
  if (!context) {
    throw new Error('Not found ChannelsContext, useChannels must be used within an ChannelsProvider');
  }
  return context;
};
