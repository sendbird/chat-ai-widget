import { css } from '@linaria/core';

export const buttonContainer = css`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 24px;

  .sendbird-theme--light & {
    box-shadow: var(--sendbird-light-shadow-05);
    background-color: var(--sendbird-light-background-50);
    &:hover {
      background-color: var(--sendbird-light-background-100);
    }
    &:active {
      background-color: var(--sendbird-light-background-200);
    }
  }
  .sendbird-theme--dark & {
    box-shadow: var(--sendbird-light-shadow-05);
    background-color: var(--sendbird-dark-background-400);
    &:hover {
      background-color: var(--sendbird-dark-background-500);
    }
    &:active {
      background-color: var(--sendbird-dark-background-700);
    }
  }

  &:focus {
    outline: none;
  }
`;
