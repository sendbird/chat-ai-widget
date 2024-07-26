import { css } from '@linaria/core';

export const typingDotContainer = css`
  align-items: center;
  border-radius: 16px;
  display: flex;
  gap: 6px;
  justify-content: center;
  padding: 16px 12px;
`;

export const typingDot = css`
  animation: blink 1.4s infinite;
  animation-fill-mode: both;
  border-radius: 50%;
  height: 8px;
  width: 8px;
  @keyframes blink {
    0% {
      opacity: 0.12;
      transform: scale(1);
    }
    21.43% {
      opacity: 0.38;
      transform: scale(1.2);
    }
    42.86% {
      opacity: 0.12;
      transform: scale(1);
    }
    100% {
      opacity: 0.12;
      transform: scale(1);
    }
  }
  &:nth-child(1) {
    animation-delay: 0.4s;
  }
  &:nth-child(2) {
    animation-delay: 0.6s;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
  }
`;
