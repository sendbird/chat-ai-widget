const DUMMY_MESSAGE1 = `I'd be happy to help! Here's an example of how to connect to Sendbird Chat SDK using JavaScript:

\`\`\`
const sb = new SendBird({ appId: APP_ID });
sb.connect(USER_ID, ACCESS_TOKEN, (user, error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(\`Connected as \`);
});
\`\`\`

This code initializes a new instance of the SendBird object with your app ID, then connects to the SDK using a user ID and access token. Once connected, the user ID is logged to the console. 

You can find more information about the Sendbird Chat SDK in the "Getting Started" guide at https://sendbird.com/docs/chat/v4/javascript/getting-started/send-first-message.`

const DUMMY_MESSAGE2 = `Sure! Here's an example of how to create a group channel using the Sendbird Chat SDK in JavaScript:

\`\`\`
const sb = new SendBird({ appId: APP_ID });
sb.connect(USER_ID, ACCESS_TOKEN, (user, error) => {
  if (error) {
    console.error(error);
    return;
  }
  const params = new sb.GroupChannelParams();
  params.addUserIds([USER_ID_1, USER_ID_2]);
  params.name = 'My Group Channel';
  params.coverUrl = 'https://example.com/my-group-channel-cover-image.jpg';
  sb.GroupChannel.createChannel(params, (channel, error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(\`Created group channel \`);
  });
});
\`\`\`

This code connects to the Sendbird Chat SDK using a user ID and access token, then creates a new group channel with the specified user IDs, name, and cover image URL. Once the channel is created, the channel URL is logged to the console.

You can find more information about creating group channels in the "Creating a channel" guide at https://sendbird.com/docs/chat/v4/javascript/channel/creating-a-channel/create-a-channel.`;


const DUMMY_MESSAGE3 = `Sure! Here are examples of how to get a list of users using the Sendbird Chat SDK in iOS and Android:

iOS:
\`\`\`
let query = SBDUser.createApplicationUserListQuery()
query?.loadNextPage(completionHandler: { (users, error) in
    if error != nil {
        print("Error: \\(error!.localizedDescription)")
        return
    }
    for user in users! {
        print("User ID: \\(user.userId)")
    }
})
\`\`\`

This code creates a query to get a list of application users, then loads the next page of users. Once the users are loaded, their user IDs are printed to the console.

Android:
\`\`\`
SendBird.queryUserList(new SendBird.UserListQuery(), new SendBird.UserListQueryHandler() {
    @Override
    public void onResult(Listusers, SendBirdException e) {
        if (e != null) {
            Log.e(TAG, "Error getting user list: " + e.getMessage());
            return;
        }
        for (User user : users) {
            Log.d(TAG, "User ID: " + user.getUserId());
        }
    }
});
\`\`\`

This code creates a query to get a list of users, then retrieves the list`;

export const DUMMIES = [DUMMY_MESSAGE1, DUMMY_MESSAGE2, DUMMY_MESSAGE3];