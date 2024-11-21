import { themedColors } from '../../colors/css';
import { SBUFoundationProps } from '../../types';

/**
 * icon-add.svg
 * icon-arrow-left.svg
 * icon-attach.svg
 * icon-audio-on-lined.svg
 * icon-ban.svg
 * icon-broadcast.svg
 * icon-camera.svg
 * icon-channels.svg
 * icon-chat.svg
 * icon-chat-filled.svg
 * icon-chevron-down.svg
 * icon-chevron-right.svg
 * icon-close.svg
 * icon-collapse.svg
 * icon-copy.svg
 * icon-create.svg
 * icon-delete.svg
 * icon-disconnected.svg
 * icon-document.svg
 * icon-done.svg
 * icon-done-all.svg
 * icon-download.svg
 * icon-edit.svg
 * icon-emoji-more.svg
 * icon-error.svg
 * icon-expand.svg
 * icon-feedback-dislike.svg
 * icon-feedback-like.svg
 * icon-file-audio.svg
 * icon-file-document.svg
 * icon-freeze.svg
 * icon-gif.svg
 * icon-info.svg
 * icon-leave.svg
 * icon-members.svg
 * icon-message.svg
 * icon-moderations.svg
 * icon-more.svg
 * icon-mute.svg
 * icon-notifications.svg
 * icon-notifications-off-filled.svg
 * icon-operator.svg
 * icon-photo.svg
 * icon-play.svg
 * icon-plus.svg
 * icon-question.svg
 * icon-refresh.svg
 * icon-remove.svg
 * icon-reply-filled.svg
 * icon-search.svg
 * icon-send.svg
 * icon-settings-filled.svg
 * icon-slide-left.svg
 * icon-spinner.svg
 * icon-supergroup.svg
 * icon-thread.svg
 * icon-thumbnail-none.svg
 * icon-toggleoff.svg
 * icon-toggleon.svg
 * icon-user.svg
 * */
export type IconType = 'spinner' | 'chat' | 'message' | 'error' | 'refresh' | 'chevron-down' | 'feedback-like' | 'feedback-dislike' | 'done' | 'file-document';
type Props = SBUFoundationProps<{
    type: IconType;
    color?: string | keyof typeof themedColors;
    size?: number | string;
}>;
export declare const Icon: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
