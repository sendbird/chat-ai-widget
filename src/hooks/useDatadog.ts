import { useEffect } from 'react';

import { useConstantState } from '../context/ConstantContext';

const DATADOG_APP_ID = import.meta.env.VITE_CHAT_AI_WIDGET_DATADOG_APP_ID;
const DATADOG_CLIENT_TOKEN = import.meta.env
  .VITE_CHAT_AI_WIDGET_DATADOG_CLIENT_TOKEN;
const isProd = import.meta.env.PROD ? 'prod' : 'dev';

const useDatadogRum = () => {
  const { serviceName } = useConstantState();
  useEffect(() => {
    if (DATADOG_APP_ID != null && DATADOG_CLIENT_TOKEN != null) {
      import('@datadog/browser-rum-slim').then(({ datadogRum }) => {
        datadogRum.init({
          applicationId: DATADOG_APP_ID,
          clientToken: DATADOG_CLIENT_TOKEN,
          site: 'datadoghq.com',
          sessionSampleRate: 10,
          sessionReplaySampleRate: 10,
          trackResources: false,
          trackLongTasks: false,
          trackUserInteractions: false,
          service: serviceName || 'genai-chatbot-widget',
          version: APP_VERSION,
          env: isProd ? 'production' : 'development',
        });
      });
    }
  }, []);
};

export default useDatadogRum;
