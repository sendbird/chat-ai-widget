## [v1.0.4] (July 27 2023)
#### Enhancement
- Improved Channel Refresh Icon Control:
  - Previously, the refresh icon and the expand + close icons were placed separately, causing alignment issues. To address this, the <EmptyContainer /> was used to prevent overlapping.
  - Introduced a new prop, `customRefreshComponent`, which allows users to provide their own custom refresh icon component for better control.

#### Bug fix:
- Detailed Waiting Logic for Pending Bot Messages:
  - Implemented a logic to wait until the last message in the group channel is not null, with a timeout of up to 3 seconds. This fix addresses issues where Bot's messages were pending after sending the first message.

## [v1.0.3] (July 25 2023)
1. Added a hashedKey handling feature for using the chat-ai-widget in [ai-bot-url-webdemo](https://github.com/sendbird/ai-bot-url-webdemo).
2. Introduced new props and exported the `Chat` component with the following features:
   - `instantConnect`: When set to `true`, the SDK connection will be established right after mounting the Chat or ChatAiWidget component.
   - `customBetaMarkText`: Allows customization of the `BETA` tag text in the Channel header.


## [v1.0.2] (July 21 2023)
1. Fixed Channel Refresh Issue:
   - Even after merging #11, the channel was still being refreshed due to the sdk reconnection.
   - Added a new option, sdkInitParams, to the UIKit sendbird/sendbird-uikit-react#692, allowing the passing of sdk init option params.
   - By passing appStateToggleEnabled: false when sdk.init() is called, the unnecessary channel refresh is now prevented.
2. Version 1.0.1 Issue Resolution:
   - Fixed an issue where the default applicationId and botId values were incorrectly set when building with an existing .env file.
   - Implemented logic to temporarily change .env to .env_temp before the build and revert it back post-build.
   - Additionally, resolved the problem with the chat message sender's text_align being set to center.

## [v1.0.1] (July 18 2023)
1. Ported some recent changes from the web-demo repository:
  - [791e390](https://github.com/sendbird/ai-bot-url-webdemo/commit/791e390c7cc1cd70cf9d1b1e48e6c45c59ae58cb)
  - [38425cd](https://github.com/sendbird/ai-bot-url-webdemo/commit/38425cd0898a410fac69a11325d67a6a035f37aa)
  - [729a40a](https://github.com/sendbird/ai-bot-url-webdemo/commit/729a40a92904a24ecdd569f9aa3a3aebef52892d)
2. The connection will not be established until a user sends the first message to the chat AI widget.
3. Added userNickname prop to provide a distinctive name along with botName.
