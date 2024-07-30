import { css } from '@linaria/core';

export const infiniteListContainer = css`
  display: flex;
  position: relative;
  flex: 1;
  overflow: hidden;
`;

export const infiniteListInner = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
`;

export const infiniteListOverlayContainer = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
`;
export const infiniteListOverlay = css`
  pointer-events: auto;
`;
