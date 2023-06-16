## What is this for?
It is for the Sendbird Chat AI bot demo that works like the one by [Intercom](https://www.intercom.com/view-demos).

## Figma Design
- https://www.figma.com/file/erSI3APLBfcFB8sILvFAVt/WIP_Docs-update?type=design&node-id=3553-21703&t=FU0XUVlgSII88yg0-0
- https://www.figma.com/proto/erSI3APLBfcFB8sILvFAVt/WIP_Docs-update?page-id=3442%3A16641&type=design&node-id=3473-21902&viewport=1063%2C880%2C0.27&scaling=min-zoom&starting-point-node-id=3450%3A17924&show-proto-sidebar=1

## API Request workflow
- https://sendbird.atlassian.net/wiki/spaces/PLAT/pages/2087026747/Web+demo+verion+2

## Deploy to gh-pages (#deprecated)
```bash
npm run deploy
```
## Run locally
```bash
npm run dev
```
## Test urls

There are 2 envs. in netlify
* Prod
    *
    *
* Preprod
    *
    *
`is_widget` flag optimizes Chat UI for widget view

### Web demo link(prod)
https://sendbird-chat-ai-bot-demo.netlify.app/?hashed_key=${token}

### Widget demo link(prod)
https://sendbird-chat-ai-bot-demo.netlify.app/?hashed_key=${token}&is_widget=true

### Web demo link (preprod)
https://sendbird-chat-ai-bot-demo-preprod.netlify.app/?hashed_key=${token_preprod}

### Widget demo link (preprod)
https://sendbird-chat-ai-bot-demo-preprod.netlify.app/?hashed_key=${token_preprod}&is_widget=true

## How to find secrets
Go to 1password
sendbird-chat-ai-bot-demo (engineering team has access to it)

## Add .env file locally with below info
```
# Vite prefix is required for Vite to load the env variables
# https://vitejs.dev/guide/env-and-mode.html#env-files
# Sendbird App ID
VITE_WEB_DEMO_APP_ID=
VITE_WIDGET_DEMO_APP_ID=
```

### How to deploy to netlify
Go to branch (main for prod and preprod for preprod)
Env variables are already set in netlify
Prod: https://app.netlify.com/sites/sendbird-chat-ai-bot-demo/overview
Preprod: https://app.netlify.com/sites/sendbird-chat-ai-bot-demo-preprod/overview
