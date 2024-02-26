## [v1.2.0] (Feb 26 2024)
#### Feat:
- Introduced mobile view support: Users can now enable mobile view compatibility using the enableMobileView prop. To enable, simply set `enableMobileView={true}`. Default value is true.
```
  <ChatAiWidget
    {...other props}
    enableMobileView={true / false}
  />
```
- Implemented Sendbird ChatAiWidget self-service integration: Detailed instructions for self-service integration can be found at here.
  - [Shopify](https://sendbird.com//docs/ai-chatbot/guide/v1/widget-integration/shopify)
  - [Wix](https://sendbird.com//docs/ai-chatbot/guide/v1/widget-integration/wix)
  - [Wordpress](https://sendbird.com//docs/ai-chatbot/guide/v1/widget-integration/wordpress)
- Removed `startingPage` related logic and props:
  - These options, present since the early versions of the widget, have been deprecated due to extensive error pruning and lack of utilization in core functionalities. [Related PR Link](https://github.com/sendbird/chat-ai-widget/pull/92)


## [v1.1.3] (Feb 13 2024)
#### Fix:
- Changed source display indexing from the last item to the first
- Added a filtering option for the source list by `source_type`

## [v1.1.2] (Feb 7 2024)
#### Fix:
- Fixed text alignment issue with sendbird-message-input-text-field
- Fixed autoOpen & betaMark prop behavior issue

## [v1.1.1] (Feb 2 2024)
#### Feat:
- Added missing profile URL image prop
- Used bot profileUrl & nickname in the channel header
- Applied text overflow attribute to message input element

#### Chore:
- Excluded Pull Request option from Github.io deployment configuration

## [v1.1.0] (Nov 9 2023)
#### Feat:
- Renamed `quick_replies` to `suggested_replies`
- Renamed `extendedMessage` to `extendedMessagePayload` in the message data
- Added a feedback response with thumbs up and down emojis
  - Introduced a boolean parameter, `enableEmojiFeedback`, to control emoji display
- Changed scroll block option to `end` from `nearest` in the useScrollOnStreaming hook
- Merged sender profile when messages are sent in a short span of time
- Made profile image invisible only when consecutive message senders are the same
- Added form message UI components: `<FormInput />` & `<FormMessage />`
- Supported user conversations with 3 or more participants in the chatbot
- Enabled user(bot) mention

#### Fixes:
- Fixed URL parsing in the first message

## [v1.0.8] (Aug 31 2023)

#### Feat:
- Implemented quick reply UI attachment to the bottom of bot messages.
- Introduced a new feature for quick reply UI.
- Introduce ai widget script loading for non-react users.

#### Improvements:
- Removed redundant styles to enhance the user interface.
- Improved the BETA logo UI.

#### Fixes:
- Corrected the format of quick replies.
- Addressed an issue with incorrect quick replies format.
- Removed an unnecessary `isStartingPage` condition.

#### Chores:
- Moved url-webdemo to the packages directory for improved organization.


## [v1.0.7] (Aug 10 2023)
#### Feat:
- Added support for mobile devices.
- Set `instantConnect: true` as default
  - If instantConnect set is `true`, the SDK connection will be established right after mounting the <Chat /> or <ChatAiWidget /> component

#### Fixes:
- Fixed issues related to AdminMessage handling and introduced an option for source messages.
- Fixed an issue where scrolling in the parent element was not prevented.

## [v1.0.6] (Aug 7 2023)

#### Improvements:
- Some users experienced slow loading of the chat AI widget due to the large bundle size of react-code-blocks.So we implemented lazy loading for the <CodeBlock /> component, resulting in faster and more efficient initialization.

#### Chores:
- Pass customExtensionParams to SBProvider for logging purpose.

## [v1.0.5] (July 31 2023)
#### Fixes:
- Resolved an issue where the suggested reply panel overlapped the last message when streaming reply was enabled. By adding a 50px buffer to the scroll, the suggested reply panel now displays correctly without obstructing the last message.

#### Feat:
- Added an interface to enable users to utilize their custom session handler.
  Introducing new props: configureSession and userId, which can now be passed into the <SendbirdProvider /> component.

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
