import { FeedbackRating, Feedback } from '@sendbird/chat/message';
import { useState } from 'react';

import FeedbackIconButton from '@uikit/ui/FeedbackIconButton';
import Icon, { IconTypes } from '@uikit/ui/Icon';
import MessageFeedbackFailedModal from '@uikit/ui/MessageFeedbackFailedModal';
import MessageFeedbackModal from '@uikit/ui/MessageFeedbackModal';
import MobileFeedbackMenu from '@uikit/ui/MobileFeedbackMenu';
import { CoreMessageType } from '@uikit/utils';

import { useConstantState } from '../context/ConstantContext';

function BotMessageFeedback({ message }: { message: CoreMessageType }) {
  const { stringSet, isMobileView } = useConstantState();
  const [showFeedbackOptionsMenu, setShowFeedbackOptionsMenu] =
    useState<boolean>(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false);
  const [feedbackFailedText, setFeedbackFailedText] = useState<string>('');

  const openFeedbackFormOrMenu = () => {
    if (isMobileView) {
      setShowFeedbackOptionsMenu(true);
    } else {
      setShowFeedbackModal(true);
    }
  };

  const onCloseFeedbackForm = () => {
    setShowFeedbackModal(false);
  };

  return (
    <>
      {/** Feedback icons */}
      <div className="sendbird-message-content__middle__body-container__feedback-buttons-container">
        <FeedbackIconButton
          aria-label="Like the bot answer"
          isSelected={message?.myFeedback?.rating === FeedbackRating.GOOD}
          onClick={async () => {
            if (!message?.myFeedback?.rating) {
              try {
                await message.submitFeedback({
                  rating: FeedbackRating.GOOD,
                });
                openFeedbackFormOrMenu();
              } catch (error) {
                console.error?.('Channel: Submit feedback failed.', error);
                setFeedbackFailedText(stringSet.FEEDBACK_FAILED_SUBMIT);
              }
            } else {
              openFeedbackFormOrMenu();
            }
          }}
          disabled={
            message?.myFeedback != null &&
            message.myFeedback.rating !== FeedbackRating.GOOD
          }
        >
          <Icon type={IconTypes.FEEDBACK_LIKE} width="24px" height="24px" />
        </FeedbackIconButton>
        <FeedbackIconButton
          aria-label="Dislike the bot answer"
          isSelected={message?.myFeedback?.rating === FeedbackRating.BAD}
          onClick={async () => {
            if (!message?.myFeedback?.rating) {
              try {
                await message.submitFeedback({
                  rating: FeedbackRating.BAD,
                });
                openFeedbackFormOrMenu();
              } catch (error) {
                console.error?.('Channel: Submit feedback failed.', error);
                setFeedbackFailedText(stringSet.FEEDBACK_FAILED_SUBMIT);
              }
            } else {
              openFeedbackFormOrMenu();
            }
          }}
          disabled={
            message?.myFeedback != null &&
            message.myFeedback.rating !== FeedbackRating.BAD
          }
        >
          <Icon type={IconTypes.FEEDBACK_DISLIKE} width="24px" height="24px" />
        </FeedbackIconButton>
      </div>
      {
        // Feedback menu
        message.myFeedback?.rating && showFeedbackOptionsMenu && (
          <MobileFeedbackMenu
            hideMenu={() => {
              setShowFeedbackOptionsMenu(false);
            }}
            onEditFeedback={() => {
              setShowFeedbackOptionsMenu(false);
              setShowFeedbackModal(true);
            }}
            onRemoveFeedback={async () => {
              try {
                if (message.myFeedback?.id == null) {
                  throw new Error('Invalid feedback id');
                }
                await message.deleteFeedback(message.myFeedback.id);
              } catch (error) {
                console.error?.('Channel: Delete feedback failed.', error);
                setFeedbackFailedText(stringSet.FEEDBACK_FAILED_DELETE);
              }
              setShowFeedbackOptionsMenu(false);
            }}
          />
        )
      }
      {
        // Feedback modal
        message.myFeedback != null &&
          message?.myFeedback?.rating &&
          showFeedbackModal && (
            <MessageFeedbackModal
              selectedFeedback={message.myFeedback.rating}
              message={message}
              onUpdate={async (
                selectedFeedback: FeedbackRating,
                comment: string
              ) => {
                if (message.myFeedback) {
                  const newFeedback: Feedback = new Feedback({
                    id: message.myFeedback.id,
                    rating: selectedFeedback,
                    comment,
                  });
                  try {
                    await message.updateFeedback(newFeedback);
                  } catch (error) {
                    console.error('Channel: Update feedback failed.', error);
                    setFeedbackFailedText(stringSet.FEEDBACK_FAILED_SAVE);
                  }
                }
                onCloseFeedbackForm();
              }}
              onClose={onCloseFeedbackForm}
              onRemove={async () => {
                if (message.myFeedback) {
                  try {
                    await message.deleteFeedback(message.myFeedback.id);
                  } catch (error) {
                    console.error('Channel: Delete feedback failed.', error);
                    setFeedbackFailedText(stringSet.FEEDBACK_FAILED_DELETE);
                  }
                }
                onCloseFeedbackForm();
              }}
            />
          )
      }
      {
        // Feedback failed modal
        feedbackFailedText && (
          <MessageFeedbackFailedModal
            text={feedbackFailedText}
            onCancel={() => {
              setFeedbackFailedText('');
            }}
          />
        )
      }
    </>
  );
}

export default BotMessageFeedback;
