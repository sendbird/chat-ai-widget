import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { DEFAULT_CONSTANT } from './const';

/**
 * Please keep below comments for easy local testing.
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App
      firstMessageData={DEFAULT_CONSTANT.firstMessageData}
      // customUserAgentParam={{
      //   'chat-ai-widget-preview': 'True',
      // }}
    />
  </React.StrictMode>
);
