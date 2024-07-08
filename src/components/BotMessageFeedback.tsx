import { Feedback, FeedbackRating } from '@sendbird/chat/message';
import { useReducer } from 'react';

import FeedbackIconButton from '@uikit/ui/FeedbackIconButton';
import Icon, { IconTypes } from '@uikit/ui/Icon';
import MessageFeedbackFailedModal from '@uikit/ui/MessageFeedbackFailedModal';
import MessageFeedbackModal from '@uikit/ui/MessageFeedbackModal';
import MobileFeedbackMenu from '@uikit/ui/MobileFeedbackMenu';
import { CoreMessageType } from '@uikit/utils';

import { elementIds } from '../const';
import { useConstantState } from '../context/ConstantContext';

type State = Partial<{
  errorText: string;
  modalVisible: boolean;
  menuVisible: boolean;
}>;

function BotMessageFeedback({ message }: { message: CoreMessageType }) {
  const { stringSet } = useConstantState();
  const [state, setState] = useReducer((p: State, a: State) => ({ ...p, ...a }), {
    errorText: '',
    modalVisible: false,
    menuVisible: false,
  });

  const openFeedbackMenu = () => setState({ menuVisible: true });
  const closeFeedbackModal = () => setState({ modalVisible: false });

  return (
    <>
      {/** Feedback icons */}
      <div className="sendbird-message-content__middle__body-container__feedback-buttons-container">
        <FeedbackIconButton
          aria-label="Like the bot answer"
          isSelected={message.myFeedback?.rating === FeedbackRating.GOOD}
          onClick={async () => {
            if (message.myFeedback) {
              openFeedbackMenu();
            } else {
              try {
                await message.submitFeedback({ rating: FeedbackRating.GOOD });
              } catch (error) {
                console.error?.('Channel: Submit feedback failed.', error);
                setState({ errorText: stringSet.FEEDBACK_FAILED_SUBMIT });
              }
            }
          }}
          disabled={!!message.myFeedback && message.myFeedback.rating !== FeedbackRating.GOOD}
        >
          <Icon type={IconTypes.FEEDBACK_LIKE} width="24px" height="24px" />
        </FeedbackIconButton>
        <FeedbackIconButton
          aria-label="Dislike the bot answer"
          isSelected={message.myFeedback?.rating === FeedbackRating.BAD}
          onClick={async () => {
            if (message.myFeedback) {
              openFeedbackMenu();
            } else {
              try {
                await message.submitFeedback({ rating: FeedbackRating.BAD });
              } catch (error) {
                console.error?.('Channel: Submit feedback failed.', error);
                setState({ errorText: stringSet.FEEDBACK_FAILED_SUBMIT });
              }
            }
          }}
          disabled={!!message.myFeedback && message.myFeedback.rating !== FeedbackRating.BAD}
        >
          <Icon type={IconTypes.FEEDBACK_DISLIKE} width="24px" height="24px" />
        </FeedbackIconButton>
      </div>
      {
        // Feedback bottom sheet menu
        message.myFeedback && state.menuVisible && (
          <MobileFeedbackMenu
            rootElementId={elementIds.widgetWindow}
            hideMenu={() => {
              setState({ menuVisible: false });
            }}
            onEditFeedback={() => {
              setState({ menuVisible: false, modalVisible: true });
            }}
            onRemoveFeedback={async () => {
              if (!message.myFeedback) return;
              try {
                await message.deleteFeedback(message.myFeedback.id);
              } catch (error) {
                console.error?.('Channel: Delete feedback failed.', error);
                setState({ errorText: stringSet.FEEDBACK_FAILED_DELETE });
              }
              setState({ menuVisible: false });
            }}
          />
        )
      }
      {
        // Feedback comment modal
        message.myFeedback && state.modalVisible && (
          <MessageFeedbackModal
            isMobile
            rootElementId={elementIds.widgetWindow}
            selectedFeedback={message.myFeedback.rating}
            message={message}
            onUpdate={async (selectedFeedback, comment) => {
              if (message.myFeedback) {
                try {
                  const feedback = new Feedback({
                    id: message.myFeedback.id,
                    rating: selectedFeedback,
                    comment,
                  });
                  await message.updateFeedback(feedback);
                } catch (error) {
                  console.error('Channel: Update feedback failed.', error);
                  setState({ errorText: stringSet.FEEDBACK_FAILED_SAVE });
                }
              }
              closeFeedbackModal();
            }}
            onClose={closeFeedbackModal}
            onRemove={async () => {
              if (message.myFeedback) {
                try {
                  await message.deleteFeedback(message.myFeedback.id);
                } catch (error) {
                  console.error('Channel: Delete feedback failed.', error);
                  setState({ errorText: stringSet.FEEDBACK_FAILED_DELETE });
                }
              }
              closeFeedbackModal();
            }}
          />
        )
      }
      {
        // error modal
        !!state.errorText && (
          <MessageFeedbackFailedModal
            text={state.errorText}
            rootElementId={elementIds.widgetWindow}
            onCancel={() => setState({ errorText: '' })}
          />
        )
      }
    </>
  );
}

export default BotMessageFeedback;
