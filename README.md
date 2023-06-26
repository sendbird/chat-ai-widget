## What is this for?
It is for the Sendbird Chat AI Widget UiKit.

## How to use
0. Prepare Sendbird ***Application ID*** and ***Bot ID***
   If you need the Sendbird Application ID and Bot ID, See Below

1. Install Library
   ```bash
   npm install @sendbird/chat-ai-widget
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


## How to get Application ID and Bot ID
### Prerequisites
- **Sendbird Account:** Go to [Sendbird Dashboard](https://dashboard.sendbird.com/) and create an account for a free trial. If you already have a Sendbird account, sign into your account.
- **Create a Application:**
  1. Create a new application by clicking **Create +** at the bottom right of your screen.
  2. Enter a name for your application. Choose a **Product Type** and **Region**. Then, click **Confirm**.
  3. Click the application you just created under **Applications**. You will see the application's Application ID which you will need when initializing the Chat SDK.
- **Knowledge Base Source:** Prepare data for AI ChatBot to reference in `PDF` or `txt` format. This data will serve as the Knowledge Base Source that AI Chatbot will use to generate responses.
  - References for Tutorial

### 1. Navigate to Your Sendbird Application
1. Navigate to the application you created on the Sendbird Dashboard.
2. In the dashboard, navigate to the **Chat** menu and click on **AI Chatbot** under it.
   <img width="1000" alt="image" src="https://github.com/sf-luke-cha/ai-chatbot-tutorial/assets/104121286/e7d00cf0-fcf0-440b-8506-b46c077fff0d">

### 2. Set Up Your AI Chatbot
1. Click on the **Create Bot** button to set up a new AI chatbot.
2. In the **Bot Name** field, enter **Bot Name** you want, and make sure to select a unique **Bot ID**(will be used to invite Bot when creating a new Chat Room).
3. For the **Bot AI Engine**, select **OpenAI ChatGPT** for this time.
4. Specify the **Knowledge Base Source**. There are three options:
   - None: This uses the basic OpenAI Model, and you can adjust the specific parameters to suit your needs.
     <img width="300" alt="image" src="https://github.com/sf-luke-cha/ai-chatbot-tutorial/assets/104121286/c6912865-a88c-4e9f-b7cf-99569ffee8ae">

   - File: In this option, you can select a **PDF** or **txt** file as the Knowledge Base Source.
     <img width="600" alt="image" src="https://github.com/sf-luke-cha/ai-chatbot-tutorial/assets/104121286/7210bafe-1d42-4593-aae2-180cd6375689">

   - URL: In this option, the contents of a specified **URL** will be automatically analyzed and used as the Knowledge Base Source.
     <img width="600" alt="image" src="https://github.com/sf-luke-cha/ai-chatbot-tutorial/assets/104121286/356bd70d-9e47-4638-8687-1cd2f00abe56">

5. Click on the **Create** button to create your AI Chatbot.

### 3. Testing Your AI Chatbot
After your chatbot has been created, you can start testing conversations directly from the web interface.
<img width="800" alt="image" src="https://github.com/sf-luke-cha/ai-chatbot-tutorial/assets/104121286/f1d39df3-b50a-4c6d-a419-ef4bca5dcb87">
