import {useEffect, useState} from "react";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";
import SendbirdChat, {ApplicationUserListQuery, User} from "@sendbird/chat";

export function useGetBotUser(currentUser: User, hashedKey: string): User {
  const [botUser, setBotUser] = useState<User>(null);
  const store = useSendbirdStateContext();
  const sb: SendbirdChat = store.stores.sdkStore.sdk;

  useEffect(() => {
    // console.log('## useGetBotUser: ', { hashedKey, id: currentUser?.userId });
    if (currentUser && hashedKey) {
      // console.log('## useGetBotUser hashedKey: ', hashedKey);

      const query: ApplicationUserListQuery = sb.createApplicationUserListQuery({
        userIdsFilter: [hashedKey],
      });
      query.next().then((users: User[]) => {
        if (users.length <= 0) {
          // console.log('## useGetBotUserId fetched 0 users!');
        } else {
          // console.log('## useGetBotUserId fetched users: ', users);
          setBotUser(users[0]);
        }
      }).catch((err) => {
        console.log('## useGetBotUser error: ', err);
      });
    }
  }, [currentUser?.userId, hashedKey]);
  return botUser;
}