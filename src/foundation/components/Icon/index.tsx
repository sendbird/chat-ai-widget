import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import React, { useEffect, useState } from 'react';

import { themedColors, themedColorVars } from '../../colors/css';
import { useLocalProps } from '../../hooks/useLocalProps';
import { resolveSize } from '../../resolveSize';
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

export type IconType = 'spinner' | 'chat' | 'message';
type SVG = React.FC<React.SVGProps<SVGSVGElement>>;
type Props = {
  type: IconType;
  color?: string | keyof typeof themedColors;
  size?: number | string;
};

const components: Record<IconType, { module: null | SVG; load: () => Promise<SVG> }> = {
  spinner: {
    module: null,
    load: () => import('../../../../packages/uikit/src/svgs/icon-spinner.svg').then((it) => it.default),
  },
  chat: {
    module: null,
    load: () => import('../../../../packages/uikit/src/svgs/icon-chat.svg').then((it) => it.default),
  },
  message: {
    module: null,
    load: () => import('../../../../packages/uikit/src/svgs/icon-message.svg').then((it) => it.default),
  },
};

export const Icon = (props: SBUFoundationProps<Props>) => {
  const [state, setState] = useState(components);
  const localProps = useLocalProps(props);

  const { type = 'spinner', size = 24, className, color } = props;
  const helper = state[type];
  const Component = helper.module;

  const themedColor = themedColors[color as keyof typeof themedColors];
  const colorStr = color && !themedColor ? color : undefined;
  const colorValue = themedColor ?? colorStr ?? themedColors.primary;

  useEffect(() => {
    if (helper && !helper.module) {
      helper.load().then((m) => {
        helper.module = m;
        setState({ ...state, [type]: helper });
      });
    }
  }, [helper]);

  return (
    <Container
      className={cx('sendbird-icon', themedColorVars, className)}
      size={size}
      color={colorValue}
      role={'button'}
      tabIndex={0}
      {...localProps}
    >
      {Component && <Component />}
    </Container>
  );
};

const Container = styled.div<{ size: number | string; color: string }>`
  width: ${resolveSize};
  height: ${resolveSize};

  [class*='fill'] {
    fill: ${({ color }) => color};
  }

  [class*='stroke'] {
    stroke: ${({ color }) => color};
    stroke-width: 2px;
    stroke-linejoin: round;
  }
`;
