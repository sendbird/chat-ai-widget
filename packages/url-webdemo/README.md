## What is this for?
It is for the Sendbird Chat AI bot demo that works like the one by [Intercom](https://www.intercom.com/view-demos).

## Figma Design
- https://www.figma.com/file/erSI3APLBfcFB8sILvFAVt/WIP_Docs-update?type=design&node-id=3553-21703&t=FU0XUVlgSII88yg0-0
- https://www.figma.com/proto/erSI3APLBfcFB8sILvFAVt/WIP_Docs-update?page-id=3442%3A16641&type=design&node-id=3473-21902&viewport=1063%2C880%2C0.27&scaling=min-zoom&starting-point-node-id=3450%3A17924&show-proto-sidebar=1

## API Request workflow
- https://sendbird.atlassian.net/wiki/spaces/PLAT/pages/2087026747/Web+demo+verion+2

```
## Run locally
```bash
npm run dev
```
## Test urls
### Web demo link
 - prod: https://chat-ai-widget.netlify.app/?hashed_key=${token}
 - preprod: https://develop--chat-ai-widget.netlify.app/?hashed_key=${token}

### Widget demo link
 - prod: https://chat-ai-widget.netlify.app/?hashed_key=${token}&is_widget=true
 - preprod: https://develop--chat-ai-widget.netlify.app/?hashed_key=${token}

## How to find secrets
Go to 1password
sendbird-chat-ai-bot-demo (engineering team has access to it)

## Create your own .env from .env.example
```
# Vite prefix is required for Vite to load the env variables
# https://vitejs.dev/guide/env-and-mode.html#env-files
# Sendbird App ID
VITE_WEB_DEMO_APP_ID=
VITE_WIDGET_DEMO_APP_ID=
```

### How to deploy to Netlify
Go to branch (`main` for prod and `develop` for preprod)
Env variables are already set in netlify:
- https://app.netlify.com/sites/chat-ai-widget/overview

## Services that use this repo
* Prod:
    * Web: https://sendbird.com/products/demos/clark?hashed_key=${token}
    * Widget: https://docs.sendbird.com?hashed_key=${token}&is_widget=true
* Preprod: ^^ same urls but use staging URL instead of sendbird.com
`is_widget` flag optimizes Chat UI for widget view
