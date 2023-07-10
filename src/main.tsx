import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App
      applicationId="AE8F7EEA-4555-4F86-AD8B-5E0BD86BFE67"
      botId="khan-academy-bot"
    />
  </React.StrictMode>
);
