import { SendbirdChatWith } from '@sendbird/chat';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';
import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';

import { useConstantState } from './ConstantContext';
import { getWidgetSetting } from '../libs/api/widgetSetting';
import {
  getWidgetSessionCache,
  saveWidgetSessionCache,
} from '../libs/storage/widgetSessionCache';
import { getDateNDaysLater, isPastTime } from '../utils';

interface WidgetSession {
  strategy: 'auto' | 'manual';
  userId: string;
  expireAt: number;
  // channelUrl is optional and is dynamically generated for a manual strategy.
  channelUrl?: string;
  // sessionToken is optional and is dynamically generated by configureSession provided by the user for a manual strategy.
  sessionToken?: string;
}

interface BotStyle {
  theme: 'light' | 'dark';
  accentColor: string;
  botMessageBGColor: string;
  autoOpen: boolean;
}

type Context = {
  initialized: boolean;
  botStyle: BotStyle;
  widgetSession: WidgetSession | null;
  initManualSession: (sdk: SendbirdChatWith<[GroupChannelModule]>) => void;
};

const WidgetSettingContext = createContext<Context | null>(null);
export const WidgetSettingProvider = ({
  children,
}: React.PropsWithChildren) => {
  const {
    createGroupChannelParams,
    firstMessageData,
    userId: injectedUserId,
    configureSession,
    applicationId: _appId,
    botId: _botId,
    apiHost,
  } = useConstantState();

  const appId = _appId as string;
  const botId = _botId as string;

  if (!appId || !botId) {
    throw new Error('applicationId or botId is not defined');
  }

  const sessionStrategy: 'auto' | 'manual' =
    typeof configureSession === 'function' && !!injectedUserId
      ? 'manual'
      : 'auto';

  const inProgress = React.useRef(false);
  const [initialized, setInitialized] = useState(false);
  const [botStyle, setBotStyle] = useState<BotStyle>({
    theme: 'light',
    accentColor: '#742DDD',
    botMessageBGColor: '#EEEEEE',
    autoOpen: false,
  });
  const [widgetSession, setWidgetSession] = useState<WidgetSession | null>(
    null
  );

  async function initSessionByStrategy(strategy: 'auto' | 'manual') {
    const cachedSession = getWidgetSessionCache({
      appId,
      botId,
    });

    const reuseCachedSession =
      !!cachedSession &&
      cachedSession.strategy === strategy &&
      !isPastTime(cachedSession.expireAt);

    const response = await getWidgetSetting({
      host: apiHost,
      appId,
      botId,
      createUserAndChannel: reuseCachedSession ? false : strategy === 'auto',
    });

    if (reuseCachedSession) {
      setBotStyle(response.botStyle);
      setWidgetSession({
        strategy: sessionStrategy,
        userId: cachedSession.userId,
        expireAt: cachedSession.expireAt,
        channelUrl: cachedSession.channelUrl,
        sessionToken: cachedSession.sessionToken,
      });
    } else {
      setBotStyle(response.botStyle);

      if (sessionStrategy === 'auto' && response.user && response.channel) {
        const session = {
          strategy: sessionStrategy,
          expireAt: response.user.expireAt,
          userId: response.user.userId,
          sessionToken: response.user.sessionToken,
          channelUrl: response.channel.channelUrl,
        };
        setWidgetSession(session);
        saveWidgetSessionCache({ appId, botId, data: session });
      }

      /**
       * NOTE: We don't fully initialize the manual strategy session here.
       * After the uikit is initialized, we should call the `initManualSession` function.
       * */
      if (sessionStrategy === 'manual' && injectedUserId) {
        const session = {
          strategy: sessionStrategy,
          userId: injectedUserId,
          sessionToken: undefined,
          channelUrl: undefined,
          expireAt: 0,
        }
        setWidgetSession(session);
      }
    }

    setInitialized(true);
  }

  async function initManualSession(
    sdk: SendbirdChatWith<[GroupChannelModule]>
  ) {
    if (sessionStrategy === 'manual' && injectedUserId) {
      const data = firstMessageData
        ? JSON.stringify({ first_message_data: firstMessageData })
        : undefined;

      const channel = await sdk.groupChannel.createChannel({
        name: createGroupChannelParams.name ?? 'AI Chatbot Widget Channel',
        coverUrl: createGroupChannelParams.coverUrl,
        invitedUserIds: [injectedUserId, botId],
        isDistinct: false,
        data,
      });

      const session = {
        strategy: sessionStrategy,
        expireAt: getDateNDaysLater(30),
        userId: injectedUserId,
        sessionToken: undefined,
        channelUrl: channel.url,
      };
      setWidgetSession(session);
      saveWidgetSessionCache({ appId, botId, data: session });
    }
  }

  useLayoutEffect(() => {
    // Trick to prevent duplicated request in strict mode.
    if (inProgress.current) return;
    inProgress.current = true;
    initSessionByStrategy(sessionStrategy).finally(() => {
      inProgress.current = false;
    });
  }, [sessionStrategy]);

  return (
    <WidgetSettingContext.Provider
      value={{ initialized, botStyle, widgetSession, initManualSession }}
    >
      {widgetSession ? children : null}
    </WidgetSettingContext.Provider>
  );
};

export const useWidgetSetting = () => {
  const context = useContext(WidgetSettingContext);
  if (!context) {
    throw new Error(
      'Not found WidgetSettingContext, useWidgetSetting must be used within an WidgetSettingProvider'
    );
  }
  return context;
};

export const useWidgetSession = () => {
  const { widgetSession } = useWidgetSetting();
  if (!widgetSession) {
    throw new Error(
      "WidgetSession is not initialized. Please make sure to use useWidgetSession under the WidgetSettingProvider's children components."
    );
  }
  return widgetSession;
};
