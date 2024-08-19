import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App
      applicationId={'5D27A98C-D935-4EDA-846A-BCCD90E8E55B'}
      botId={'onboarding_bot'}
    />
  </React.StrictMode>,
);
