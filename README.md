## What is this for?
It is for the Sendbird Chat AI Widget UiKit.

## How to use
Prepare Sendbird `Application ID` and `Bot ID`, If you want to know more, See [this](https://github.com/sf-luke-cha/ai-chatbot-tutorial/blob/main/README.md)!

```bash
> npm install @sendbird/chat-ai-widget
```

```jsx
import {ChatAiWidget} from "@sendbird/chat-ai-widget";
const App = () => {
  return (
      <ChatAiWidget
              applicationId="AE8F7EEA-4555-4F86-AD8B-5E0BD86BFE67" // Your Sendbird Application ID
              botId="khan-academy-bot" // Your Bot ID
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

## Test url
https://sendbird.github.io/chat-ai-widget/

