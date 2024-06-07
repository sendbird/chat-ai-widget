# Custom Session Configuration Guide

This guide provides detailed instructions on configuring a custom session handler for the `ChatAiWidget` component, particularly useful for integrating authentication with your own API.

## Prerequisites

Before you can manage sessions independently, you must obtain session tokens using the Sendbird Platform API. For detailed instructions on preparing to use the Platform API, please refer to the [official documentation](https://sendbird.com/docs/chat/platform-api/v3/prepare-to-use-api).

## Step-by-Step Guide

### Defining a Function to Issue Session Tokens

Define a function to issue session tokens. The following TypeScript code is an example; in practice, you should issue session tokens from your server. For more information, please see the [Sendbird documentation](https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token).

**Note:** You must [create a Sendbird user](https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user) before issuing a token.

```ts
const APP_ID = "YOUR_APP_ID";
const API_TOKEN = "YOUR_API_TOKEN";

const issueSessionToken = async (
  userId: string,
  expiryDuration = 10 * 60 * 1000
): Promise<string> => {
  const url = `https://api-${APP_ID}.sendbird.com/v3/users/${userId}/token`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      "Api-Token": API_TOKEN,
    },
    body: JSON.stringify({ expires_at: Date.now() + expiryDuration }),
  });

  const data = await response.json();
  if (response.ok) {
    return data.token as string;
  } else {
    throw new Error("Failed to issue a session token");
  }
};
```

### Defining a Session Configuration Function

```tsx
const USER_ID = "USER_ID";

const configureSession = () => ({
  onSessionTokenRequired: (resolve, reject) => {
    // Action to take when a session token is required
    issueSessionToken(USER_ID)
      .then((token) => resolve(token))
      .catch((err) => reject(err));
  },
  onSessionRefreshed: () => {
    // Action to take when session is refreshed
  },
  onSessionError: (err) => {
    // Action to take when session encounters an error
  },
  onSessionClosed: () => {
    // Action to take when session is closed
  },
});
```

### Passing Session Configuration Data to the Widget

Pass the user ID, session token, and session configuration function to the widget. The widget will now manage the session for the specified user ID, issuing session tokens as needed.

```tsx
const App = () => {
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  
  useEffect(() => {
    issueSessionToken(USER_ID).then(token => setSessionToken(token));
  }, [USER_ID]);
  
  if (!sessionToken) return null;
  
  return (
    <ChatAiWidget
      /**
       * Include other necessary properties here
       */
      userId={USER_ID}
      sessionToken={sessionToken}
      configureSession={configureSession}
    />
  );
};

export default App;
```

## Further Information

For additional details on setting up authentication with your own API, please consult the following resources:

- [JavaScript SDK Overview](https://sendbird.com/docs/chat/sdk/v4/javascript/overview)
  - [Connecting to the Sendbird server using a user ID and token](https://sendbird.com/docs/chat/sdk/v4/javascript/application/authenticating-a-user/authentication#2-connect-to-the-sendbird-server-with-a-user-id-and-a-token)
  - [Setting a session handler](https://sendbird.com/docs/chat/sdk/v4/javascript/application/authenticating-a-user/authentication#2-set-a-session-handler)

- [Platform API Overview](https://sendbird.com/docs/chat/platform-api/v3/overview)
  - [Preparing to use the API](https://sendbird.com/docs/chat/platform-api/v3/prepare-to-use-api)
  - [Issuing a session token](https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token)

## Real World Example

For practical implementation, you can refer to this sample repository which demonstrates the integration of a custom session handler with the `ChatAiWidget` component. This example provides a hands-on approach to understand how the concepts outlined in this guide can be applied in a real-world scenario.

[View the example repository on GitHub](https://github.com/sendbird/chat-ai-widget-session-sample)
