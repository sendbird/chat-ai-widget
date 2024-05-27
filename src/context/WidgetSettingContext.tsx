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
  // sessionToken is optional and is dynamically generated by configureSession provided by the user for a manual strategy.
  sessionToken?: string;
  // channelUrl is optional and is dynamically generated for a legacy manual strategy.
  channelUrl?: string;
}

export interface BotStyle {
  theme: 'light' | 'dark';
  accentColor: string;
  botMessageBGColor: string;
  /** @deprecated We no longer use the autoOpen value from the dashboard. **/
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
    botStudioEditProps,
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

    const reuseCachedSession = ((
      cache: typeof cachedSession
    ): cache is NonNullable<typeof cachedSession> => {
      if (!cache || cache.strategy !== strategy) return false;
      if (cache.strategy === 'manual') {
        // NOTE: There is no need to check the expiration of the session if it is managed manually.
        // However, since the existing logic has been regenerating the channel every 30 days due to this logic.
        return !isPastTime(cache.expireAt) && cache.userId === injectedUserId;
      }
      if (cache.strategy === 'auto') {
        return !isPastTime(cache.expireAt);
      }
      return false;
    })(cachedSession);

    const getConfigureSessionParams = async () => {
      if (strategy !== 'manual') return undefined;

      if (injectedUserId && configureSession && !reuseCachedSession) {
        const sessionHandler = configureSession();
        if (sessionHandler.onSessionTokenRequired) {
          try {
            const token = await new Promise(
              sessionHandler.onSessionTokenRequired
            );
            if (token) return { userId: injectedUserId, sessionKey: token };
          } catch {
            // NO-OP
          }
        }
      }
      return undefined;
    };

    const widgetSettingParams = {
      host: apiHost,
      appId,
      botId,
      createUserAndChannel: !reuseCachedSession,
      ...(await getConfigureSessionParams()),
    };
    const response = await getWidgetSetting(widgetSettingParams);
    setBotStyle(response.botStyle);

    if (reuseCachedSession) {
      setWidgetSession({
        strategy: sessionStrategy,
        userId: cachedSession.userId,
        expireAt: cachedSession.expireAt,
        sessionToken: cachedSession.sessionToken,
        channelUrl: cachedSession.channelUrl,
      });
    } else {
      if (sessionStrategy === 'auto' && response.user && response.channel) {
        const session = {
          strategy: sessionStrategy,
          userId: response.user.userId,
          expireAt: response.user.expireAt,
          sessionToken: response.user.sessionToken,
          channelUrl: response.channel.channelUrl,
        };
        setWidgetSession(session);
        saveWidgetSessionCache({ appId, botId, data: session });
      }

      if (sessionStrategy === 'manual' && injectedUserId) {
        if (response.channel) {
          const session = {
            strategy: sessionStrategy,
            userId: injectedUserId,
            expireAt: getDateNDaysLater(30),
            sessionToken: widgetSettingParams.sessionKey,
            channelUrl: response.channel.channelUrl,
          };
          setWidgetSession(session);
          saveWidgetSessionCache({ appId, botId, data: session });
        } else {
          /**
           * TODO: Remove this after the widget_setting deployed to all region.
           * NOTE: We don't fully initialize the legacy manual strategy session here.
           *  After the uikit is initialized, we should call the `initManualSession` function.
           * */
          const session = {
            strategy: sessionStrategy,
            userId: injectedUserId,
            expireAt: 0,
            sessionToken: widgetSettingParams.sessionKey,
            channelUrl: undefined,
          };
          setWidgetSession(session);
        }
      }
    }
    setInitialized(true);
  }

  // TODO: Remove this after the widget_setting deployed to all region.
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
        userId: injectedUserId,
        expireAt: getDateNDaysLater(30),
        sessionToken: widgetSession?.sessionToken,
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
      value={{
        initialized,
        botStyle: {
          ...botStyle,
          ...botStudioEditProps?.styles,
          accentColor:
            botStudioEditProps?.styles?.accentColor ??
            botStudioEditProps?.styles?.primaryColor ??
            botStyle.accentColor,
        },
        widgetSession,
        initManualSession,
      }}
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
