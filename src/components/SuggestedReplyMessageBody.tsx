import { User } from '@sendbird/chat';
// eslint-disable-next-line import/named
import { SendbirdGroupChat } from '@sendbird/chat/groupChannel';
import { UserMessage } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import styled from 'styled-components';

import { SuggestedReply, USER_ID } from '../const';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 8px;
  border-radius: 16px;
  background-color: #eeeeee;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SupportChatButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  height: 32px;
  background: #6210cc;
  border-radius: 16px;
  color: white;
  cursor: pointer;
  margin: 4px 0;
  text-decoration: none;
  width: 100%;
`;

const LinkButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  height: 32px;
  background: #6210cc;
  border-radius: 16px;
  color: white;
  cursor: pointer;
  margin: 4px 0;
  text-decoration: none;
  width: 100%;
`;

const Text = styled.div`
  text-align: left;
  white-space: pre-line;
  word-break: break-word;
  line-height: 1.43;
  width: 100%;
  max-width: 600px;
`;

type Props = {
  botUser: User;
  message: UserMessage;
};

export default function SuggestedReplyMessageBody(props: Props) {
  const { botUser, message } = props;
  const data: SuggestedReply = JSON.parse(message.data ?? '');
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const channelStore = useChannelContext();
  const currentGroupChannel = channelStore.currentGroupChannel;

  const handleClick = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await currentGroupChannel.banUser(botUser).then(
      (res) => {
        console.log('banUser result is: ', res);
      },
      (err) => {
        console.log('banUser error is: ', err);
      }
    );

    try {
      const response = await fetch(
        'https://sendbird36-dev-ed.develop.my.salesforce-sites.com/services/apexrest/cases/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: JSON.stringify({
            subject: 'chat',
            sendbirdUserId: USER_ID,
            sendbirdChannelUrl: message.channelUrl,
            isEinsteinBotsCase: false,
          }),
        }
      );

      if (!response.ok) {
        console.error('response is not ok', response);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Root>
      <Text>{data.text}</Text>
      <ButtonContainer>
        {data.buttonText === 'Talk to expert' && (
          <LinkButton href={data.link} id={data.buttonText} target="_blank">
            {data.buttonText}
          </LinkButton>
        )}
        {data.buttonText !== 'Talk to expert' && (
          <SupportChatButton
            id={data.buttonText}
            target="_blank"
            onClick={handleClick}
          >
            {data.buttonText}
          </SupportChatButton>
        )}
      </ButtonContainer>
    </Root>
  );
}
