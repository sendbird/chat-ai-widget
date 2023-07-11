import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const CHAT_WIDGET_APP_ID = import.meta.env.VITE_CHAT_WIDGET_APP_ID;
const CHAT_WIDGET_BOT_ID = import.meta.env.VITE_CHAT_WIDGET_BOT_ID;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App
      applicationId={CHAT_WIDGET_APP_ID}
      botId={CHAT_WIDGET_BOT_ID}
    />
  </React.StrictMode>
);
