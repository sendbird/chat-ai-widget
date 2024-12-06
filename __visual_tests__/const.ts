export const AppId = process.env.SNAPSHOT_TEST_APP_ID;
export const BotId = process.env.SNAPSHOT_TEST_BOT_ID;
export const ApiToken = process.env.SNAPSHOT_TEST_API_TOKEN;

export const ApiHost = `https://api-${AppId}.sendbird.com`;

export const TestUrl = `http://localhost:5173/chat-ai-widget/?app_id=${AppId}&bot_id=${BotId}&snapshot=true`;

export const WidgetComponentIds = {
  WIDGET: '#aichatbot-widget-window',
  WIDGET_BUTTON: '#aichatbot-widget-button',
  MESSAGE_INPUT: '#sendbird-message-input-text-field',
  SUGGESTED_REPLIES_OPTIONS: '.sendbird-suggested-replies__option',
  BUTTON: 'button.sendbird-button--primary',
  INPUT: '.sendbird-input__input',
  CHIPS_CONTAINER: '.sendbird-form-chip__container',
  FORM: '#aichatbot-widget-form',
  MARKDOWN: '.widget-markdown',
};
