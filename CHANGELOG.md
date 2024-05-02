## [1.5.2] (May 2 2024)
#### Fix:
- Fixed an accidental disconnect issue.

## [1.5.1] (April 30 2024)
#### Chore:
- Reduced chat-ai-widget bundle size 402.12 kB -> 292.90 kB (gzip); 27.36%
  - Removed `@sendbird/uikit-react` dependency from `package.json`.
  - Linked the necessary code from `sendbird/uikit-react` github repository directly into `packages/uikit/` dir through a Git submodule.
  - Updated our build process(Github workflow / Circleci config) to initialize and update the Git submodule, ensuring that the latest version of the code is always used.

## [Deprecated] [1.5.0]

## [1.4.7] (April 30 2024)
#### Feat:
- Added `serviceName` to chatbot configs

#### Fix:
- Added missing property `url` in `FunctionCallRequestInfo`

## [1.4.6] (April 30 2024)
#### Fix:
- Added missing `callbacks` property to `Constant`  

## [1.4.5] (April 29 2024)
#### Feat:
- Added new properties `apiHost`, and `wsHost` in `Constant`
- Added `FileMessage` for displaying a file message content as image
- Added a new property `callbacks` in `ConstantContextProps`

## [1.4.4] (April 25 2024)
#### Feat:
- Added missing aria-label attributes to enhance accessibility, with corresponding ESLint rule settings to ensure continued compliance.
- Removed the expand/collapse button from the WidgetWindow.

#### Fix:
- Incremented the specifications for messageInputWrapper style to improve UI consistency.

#### Revert:
- Reverted the addition of the slim version of Datadog RUM, removing related code. This reverts the changes initially introduced in commit f2bfe362.


## [1.4.3] (April 24 2024)
#### Feat:
- Integrated Datadog RUM (Real User Monitoring) in a slimmed-down version to optimize performance monitoring without heavily impacting the application's load time.

#### Fix:
- Made `children` prop type optional for <ChatAiWidget /> component.


## [1.4.2] (April 23 2024)
#### Fix:
- Fixed a DOMException issue in useDynamicAttachModal hook.

#### Chore:
- Replaced a Sendbird AI Chatbot website link in ChatBottom component.


## [1.4.1] (April 22 2024)
#### Feat:
- Implemented safe parsing of message.data to prevent errors in data handling.
- Enhanced efficiency by reusing user and channel information stored in localStorage, reducing redundant data requests and improving user experience.
- Established functionality to connect the ChatAiWidget upon component mounting, improving real-time interaction capabilities. This includes various improvements such as managing connections and handling UI behavior between mobile and desktop platforms.

#### Fix:
- Corrected the position of the feedback dialog which used to be incorrectly placed after bumping up UIKit version.

#### Chore:
- Updated key structures to include appId and boId, which allows better identification and tracking of business objects.
  - LocalStorage key format: `@sendbird/chat-ai-widget/${appId}/${botId}`
- Cleanup of Unused Files and Dependencies: Removed unnecessary files and dependencies like dompurify to streamline the codebase.


## [Deprecated] [v1.4.0]

## [1.3.9] (April 19 2024)
#### Feat:
- Created an upload_to_s3 pipeline to facilitate file transfers to AWS S3.
- Added automated workflows for publishing, enhancing deployment efficiency.
  - [workflows/package-publish.yml](./.github/workflows/package-publish.yml)

#### Fix:
- Corrected the positioning of the feedback icon in the bot message UI

#### Chore:
- Modified the build output path for better management of build artifacts.
- Removed `react-popper-tooltip` library from the project dependencies to streamline the bundle size.


## [1.3.8] (Mar 28 2024)
#### Feat:
- Apply text and icon color variations based on theme settings to the `<ErrorContainer />` component, enhancing the visual coherence across different application themes.
- Introduce a message feedback feature that allows users to provide feedback on messages directly within the application. This feature is aimed at enhancing user engagement and interaction.
  - As part of this update, the previous 👍🏻👎 emoji reactions have been replaced with a new UI
- Update the bot icon to a modern and more visually appealing design.

## [1.3.7] (Mar 26 2024)
#### Feat:
- Apply UIKit classNames to user message text & suggested replies
  - styled-components.d.ts has been added to override `DefaultTheme`

## [1.3.6] (Mar 25 2024)
#### Feat:
- Dismiss mobile keyboard after sending a message

## [1.3.5] (Mar 22 2024)
#### Chore:
- Inject className; `sendbird-word` to the message bubble component to make it customizable

#### Feat:
- Enable passing `stringSet` prop from ChatAiWiget to UIKit
  - Available `stringSet` can be found at https://github.com/sendbird/sendbird-uikit-react/blob/main/src/ui/Label/stringSet.ts.

## [1.3.4] (Mar 19 2024)
#### Feat:
- Drop `react-code-block` library & add new CodeBlock component.
  - This update introduces a new component for displaying code blocks in a more efficient and stylized manner.

#### Fix:
- Fix mobile UX issues to enhance UX on mobile devices by addressing various UI and interaction problems.
- Fix visibility of empty elements handling to ensure that empty elements in the application do not interfere with the user's experience by being incorrectly visible.


## [v1.3.3] (Mar 15 2024)
#### Feat:
- Put the manual suggested reply component back for enhanced user interaction.

#### Chore:
- Apply dynamic import for index script caching to improve performance and caching.
- Add [self-service script publish guide](./packages/self-service/script-publish.md).

## [v1.3.2] (Mar 12 2024)
#### Feat:
- Added support for simple markdown formats in bot messages
  - Supports bold format (`**bold**`)
  - Supports link format (`[text](url)`)

#### Fix:
- Addressed issues related to rendering bot messages

## [v1.3.1] (Mar 8 2024)
#### Fix:
- Hide unused button icons
- Removed inherited margin and background-color from global CSS in the form
- Fixed a scroll issue in safari browser
- Added z-index to mobile container

## [Internal] [v1.3.0]

## [v1.2.5] (Mar 5 2024)
#### Chore:
- Internal change

## [Deprecated] [v1.2.4] 

## [Deprecated] [v1.2.3]

## [v1.2.2] (Mar 4 2024)
#### Feat:
- Reduced initial loading time:
  - by changing delay time from 1000ms to 200ms when autoOpen is set to true.
  - by eliminating unintended duplicated initial API calls.


## [v1.2.1] (Feb 27 2024)
#### Feat:
- Improved user experience based on customer feedback:
  - Excluded display of 👍👎 emojis during message streaming.
  - Modified URL text messages from bots to be parsed as links.
  - Fixed display of code snippets which had been broken since the self-service https://github.com/sendbird/chat-ai-widget/pull/87.
- Added `renderWidgetToggleButton` prop to support custom widget toggle button rendering.

#### Fix:
- Replaced Channel module with GroupChannel to address issues.
- Used `isLoading` and `isPending` along with `isFetching` in `useChannelStyle` query hook to get the loading status.


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
