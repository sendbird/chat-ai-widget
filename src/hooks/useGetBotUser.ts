import SendbirdChat, { ApplicationUserListQuery, User } from '@sendbird/chat';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import { useEffect, useState } from 'react';

import { useHashedKey } from '../context/HashedKeyContext';

export function useGetBotUser(
  currentUser: User | null,
  sendbirdBotId: string
): User | null {
  const [botUser, setBotUser] = useState<User | null>(null);
  const store = useSendbirdStateContext();
  const { hashedKey } = useHashedKey();
  const sb: SendbirdChat = store.stores.sdkStore.sdk;

  useEffect(() => {
    if (currentUser && sendbirdBotId) {
      const query: ApplicationUserListQuery = sb.createApplicationUserListQuery(
        {
          userIdsFilter:
            hashedKey != null ? [sendbirdBotId, hashedKey] : [sendbirdBotId],
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
            console.error('## useGetBotUser error: ', err);
          });
      }, 0);
    }
  }, [currentUser?.userId, sendbirdBotId, hashedKey]);
  return botUser;
}
