import { UserMessage } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import ImageRenderer from '@sendbird/uikit-react/ui/ImageRenderer';
import ReactionButton from '@sendbird/uikit-react/ui/ReactionButton';
import { useState, MouseEvent } from 'react';
import styled from 'styled-components';

type EmojiMap = {
  [emoji: string]: string;
};
const emojiMap: EmojiMap = {
  sendbird_emoji_thumbsup:
    'https://static.sendbird.com/icons/emoji_thumbsup.png',
  sendbird_emoji_thumbsdown:
    'https://static.sendbird.com/icons/emoji_thumbsdown.png',
};

const Container = styled.div`
  display: inline-block;
  margin-top: -12px;
  margin-left: 6px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  .sendbird-reaction-button--selected {
    border: none;
    background-color: transparent;
  }
`;

type Props = {
  message: UserMessage;
};

function ReactionItem({
  reacted,
  onClick,
  emoji,
  url,
}: {
  reacted: boolean;
  onClick: (e: MouseEvent) => void;
  emoji: string;
  url: string;
}) {
  return (
    <ReactionButton
      width="24px"
      height="24px"
      selected={reacted}
      onClick={onClick}
      dataSbId={`ui_emoji_reactions_menu_${emoji}`}
    >
      <ImageRenderer url={url} width="18px" height="18px" />
    </ReactionButton>
  );
}
export function ReactionContainer({ message }: Props) {
  const { toggleReaction } = useChannelContext();
  const [reactionState, setReactionState] = useState<{
    [emoji: string]: boolean;
  }>(
    Object.keys(emojiMap).reduce(
      (acc, emoji) => ({
        ...acc,
        [emoji]: false,
      }),
      {}
    )
  );
  const clickedEmoji = Object.entries(reactionState).find(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, reacted]) => reacted
  )?.[0];

  return (
    <Container>
      {clickedEmoji != null ? ( // display only the selected emoji
        <ReactionItem
          reacted={true}
          emoji={clickedEmoji}
          url={emojiMap[clickedEmoji]}
          onClick={(e: MouseEvent): void => {
            setReactionState((prevState) => ({
              ...prevState,
              [clickedEmoji]: false,
            }));
            toggleReaction?.(message, clickedEmoji, true);
            e?.stopPropagation();
          }}
        />
      ) : (
        // display all emojis if none is selected
        Object.entries(emojiMap).map(([emoji, url]) => {
          const reacted = reactionState[emoji] || false;
          return (
            <ReactionItem
              key={emoji}
              reacted={reacted}
              emoji={emoji}
              url={url}
              onClick={(e): void => {
                setReactionState((prevState) => ({
                  ...prevState,
                  [emoji]: !prevState[emoji],
                }));
                toggleReaction?.(message, emoji, reacted);
                e?.stopPropagation();
              }}
            />
          );
        })
      )}
    </Container>
  );
}
