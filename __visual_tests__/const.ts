const appId = process.env.SNAPSHOT_TEST_APP_ID;
const botId = process.env.SNAPSHOT_TEST_BOT_ID;

export const TEST_URL = `http://localhost:5173/chat-ai-widget/?app_id=${appId}&bot_id=${botId}&snapshot=true`;

export const WidgetComponentIds = {
  WIDGET: '#aichatbot-widget-window',
  WIDGET_BUTTON: '#aichatbot-widget-button',
  MESSAGE_INPUT: '#sendbird-message-input-text-field',
  SUGGESTED_REPLIES_OPTIONS: '.sendbird-suggested-replies__option',
  BUTTON: 'button.sendbird-button--primary',
  INPUT: '.sendbird-input__input',
  CHIPS_CONTAINER: '.sendbird-form-chip__container',
  FORM: '#aichatbot-widget-form',
};
