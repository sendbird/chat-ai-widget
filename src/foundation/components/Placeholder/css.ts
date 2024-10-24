import { css } from '@linaria/core';

export const placeholderContainer = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const placeholderBody = css`
  display: flex;
  flex-direction: column;
  min-height: 104px;
  align-items: center;
  gap: 20px;
`;

export const actionButtonContainer = css`
  all: unset;
  display: flex;
  cursor: pointer;
  gap: 4px;
`;
