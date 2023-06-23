## What is this for?
It is for the Sendbird Chat AI Widget UiKit.


## How to use
```bash
npm install @sendbird/chat-ai-widget-uikit
```

```jsx
import { ChatAiWidget } from '@sendbird/chat-ai-widget-uikit';
const App = () => {
  return (
      <ChatAiWidget
              applicationId="AE8F7EEA-4555-4F86-AD8B-5E0BD86BFE67"
              botId="korean-food-master"
      />
  );
}
```

## Deploy to gh-pages
```bash
npm run deploy
```
## Run locally
```bash
npm run dev
```

## Test urls
https://sendbird-chat-ai-bot-demo.netlify.app/?hashed_key=${token}

