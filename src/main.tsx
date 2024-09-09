import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const WidgetApp = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const appId = urlParams.get('app_id') ?? import.meta.env.VITE_CHAT_WIDGET_APP_ID;
  const botId = urlParams.get('bot_id') ?? import.meta.env.VITE_CHAT_WIDGET_BOT_ID;
  const locale = urlParams.get('locale') ?? undefined;

  if (!appId || !botId) {
    return null;
  }

  return <App applicationId={appId} botId={botId} locale={locale} />;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WidgetApp />
  </React.StrictMode>,
);
