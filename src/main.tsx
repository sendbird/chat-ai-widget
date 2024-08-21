import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App
      applicationId={'9910068C-17BA-4038-8EB2-E2359068D351'}
      botId={'onboarding_bot'}
    />
  </React.StrictMode>,
);
