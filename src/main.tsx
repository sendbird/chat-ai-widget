import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { DEFAULT_CONSTANT } from './const';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App firstMessageData={DEFAULT_CONSTANT.firstMessageData} />
);
