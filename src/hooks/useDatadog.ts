import { datadogRum } from '@datadog/browser-rum';
import { useEffect } from 'react';

import { useConstantState } from '../context/ConstantContext';

const DATADOG_APP_ID = import.meta.env.VITE_CHAT_AI_WIDGET_DATADOG_APP_ID;
const DATADOG_CLIENT_TOKEN = import.meta.env
  .VITE_CHAT_AI_WIDGET_DATADOG_CLIENT_TOKEN;


const useDatadogRum = () => {
  const { serviceName } = useConstantState();
  useEffect(() => {
    if (DATADOG_APP_ID != null && DATADOG_CLIENT_TOKEN != null) {
      datadogRum.init({
        applicationId: DATADOG_APP_ID,
        clientToken: DATADOG_CLIENT_TOKEN,
        site: 'datadoghq.com',
        sessionSampleRate: 100,
        sessionReplaySampleRate: 100,
        trackResources: true,
        trackLongTasks: true,
        trackUserInteractions: true,
      });

      datadogRum.startSessionReplayRecording();

      datadogRum.setGlobalContextProperty(
        'service',
        serviceName || 'genai-chatbot-widget'
      );
      datadogRum.setGlobalContextProperty('version', APP_VERSION);
    }

    return () => {
      datadogRum.stopSessionReplayRecording();
    };
  }, []);
};

export default useDatadogRum;
