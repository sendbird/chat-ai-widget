import SendbirdChat, { ApplicationUserListQuery, User } from '@sendbird/chat';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import { useEffect, useState } from 'react';

export function useGetBotUser(
  currentUser: User,
  sendbirdBotId: string
): User | null {
  const [botUser, setBotUser] = useState<User | null>(null);
  const store = useSendbirdStateContext();
  const sb: SendbirdChat = store.stores.sdkStore.sdk;

  useEffect(() => {
    // console.log('## useGetBotUser: ', { hashedKey: sendbirdBotId, id: currentUser?.userId });
    if (currentUser && sendbirdBotId) {
      // console.log('## useGetBotUser hashedKey: ', hashedKey);
      const query: ApplicationUserListQuery = sb.createApplicationUserListQuery(
        {
          userIdsFilter: [sendbirdBotId],
        }
      );
      setTimeout(() => {
        query
          .next()
          .then((users: User[]) => {
            if (users.length <= 0) {
              // console.log('## useGetBotUserId fetched 0 users!');
            } else {
              // console.log('## useGetBotUserId fetched users: ', users);
              setBotUser(users[0]);
            }
          })
          .catch((err) => {
            console.log('## useGetBotUser error: ', err);
          });
      }, 2000);
    }
  }, [currentUser?.userId, sendbirdBotId]);
  return botUser;
}
