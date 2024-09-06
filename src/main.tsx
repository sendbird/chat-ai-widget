import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const WidgetApp = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const appId = urlParams.get('app_id') ?? import.meta.env.VITE_CHAT_WIDGET_APP_ID;
  const botId = urlParams.get('bot_id') ?? import.meta.env.VITE_CHAT_WIDGET_BOT_ID;

  if (!appId || !botId) {
    return null;
  }

  return <App applicationId={appId} botId={botId} />;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WidgetApp />
  </React.StrictMode>,
);
