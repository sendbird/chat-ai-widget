## What is this for?
It is for the Sendbird Chat AI Widget UiKit.

## How to use
0. Prepare Sendbird ***Application ID*** and ***Bot ID***
   If you need the Sendbird Application ID and Bot ID, you can visit the [Sendbird AI Chatbot Tutorial](https://github.com/sf-luke-cha/ai-chatbot-tutorial/blob/main/README.md) for detailed instructions.

1. Install Library
```bash
> npm install @sendbird/chat-ai-widget
```

2. Add `import ...` and `<ChatAiWidget/>` Component to your Code.
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

## Run locally
```bash
npm run dev
```

## Demo URL
https://sendbird.github.io/chat-ai-widget/

