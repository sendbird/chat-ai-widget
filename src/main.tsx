import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const WidgetApp = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const appId = urlParams.get('app_id') ?? import.meta.env.VITE_CHAT_WIDGET_APP_ID;
  const botId = urlParams.get('bot_id') ?? import.meta.env.VITE_CHAT_WIDGET_BOT_ID;
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
  return <App applicationId={appId} botId={botId} locale={locale} apiHost={host.apiHost} wsHost={host.wsHost} />;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WidgetApp />
  </React.StrictMode>,
);
