import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App
      applicationId={import.meta.env.VITE_CHAT_WIDGET_APP_ID}
      botId={import.meta.env.VITE_CHAT_WIDGET_BOT_ID}
    />
  </React.StrictMode>
);
