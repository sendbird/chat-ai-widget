# Custom Session Configuration Guide

This guide explains how to configure a custom session handler for the `ChatAiWidget` component. This can be useful if you need to set up authentication with your own API.

### Step-by-Step Guide

#### Define the Session Configuration Function
We recommend to memoize the configure function with `useCallback`. This ensures that the function is not recreated on every render.
```jsx
const issueSessionToken = async (userId, ...) => {
  // Build your own API request handler here
};

const memoizedConfigureSession = useCallback(
  (sdk) => {
    const sessionHandler = new SessionHandler();

    sessionHandler.onSessionTokenRequired = (resolve, reject) => {
      console.warn('SessionHandler.onSessionTokenRequired()');
      // Replace USER_ID with your real user ID
      issueSessionToken(USER_ID)
        .then(token => {
          // Assign the token to the user's access token
          resolve(token);
        })
        .catch(err => reject(err));
    };

    sessionHandler.onSessionRefreshed = () => {
      // Handle session refresh
    };

    sessionHandler.onSessionError = (err) => {
      // Handle session error
    };

    sessionHandler.onSessionClosed = () => {
      // Handle session closure
    };

    return sessionHandler;
  }, []
);

```
#### Integrate the Session Configuration into the Component
Pass the memoizedConfigureSession function and USER_ID as props to the ChatAiWidget component.

```jsx
const App = () => {
  return (
    <ChatAiWidget
      /**
       * Pass other necessary props here
       */
      userId={USER_ID}
      configureSession={memoizedConfigureSession}
    />
  );
};

export default App;
```

### Need more detailed information?
For more information on setting up authentication with your own API, refer to the [Sendbird documentation](https://sendbird.com/docs/chat/v3/javascript/guides/authentication).

