import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const WidgetApp = () => {
  console.log('Hi')
  const urlParams = new URLSearchParams(window.location.search);
  const appId = urlParams.get('app_id') ?? import.meta.env.VITE_CHAT_WIDGET_APP_ID;
  const botId = urlParams.get('bot_id') ?? import.meta.env.VITE_CHAT_WIDGET_BOT_ID;
  const isSnapshot = urlParams.get('snapshot') === 'true';

  const locale = urlParams.get('locale') ?? undefined;
  const region = urlParams.get('region') ?? undefined;

  function getHost(region?: string) {
    if (region && region.startsWith('no')) {
      return { apiHost: `https://api-${region}.sendbirdtest.com`, wsHost: `wss://ws-${region}.sendbirdtest.com` };
    }
    return {
      apiHost: region ? `https://api-cf-${region}.sendbird.com` : undefined,
      wsHost: undefined,
    };
  }

  if (!appId || !botId) {
    return null;
  }

  const host = getHost(region);
  return (
    <App
      applicationId={appId}
      botId={botId}
      locale={locale}
      apiHost={host.apiHost}
      wsHost={host.wsHost}
      stringSet={
        isSnapshot
          ? {
              DATE_FORMAT__MESSAGE_LIST__DATE_SEPARATOR: "'DATE SEPARATOR'",
              DATE_FORMAT__MESSAGE_TIMESTAMP: "'00:00 AM'",
            }
          : undefined
      }
      enableMessageGrouping={!isSnapshot}
    />
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WidgetApp />
  </React.StrictMode>,
);
