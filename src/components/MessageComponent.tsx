import styled from 'styled-components';

export const SentTime = styled.span`
  width: fit-content;
  color: ${({ theme }) => theme.textColor.sentTime};
  font-size: 12px;
  line-height: 1;
  margin-bottom: 6px;
  margin-left: 2px;
  min-width: 56px;
`;

export const BodyContainer = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textColor.incomingMessage};
  max-width: calc(100% - 40px);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`;

export const BodyComponent = styled.div`
  background-color: ${({ theme }) => theme.bgColor.outgoingMessage};
  &:hover {
    background-color: ${({ theme }) => theme.bgColor.hover.outgoingMessage};
  }
  color: ${({ theme }) => theme.textColor.outgoingMessage};
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 12px;
  border-radius: 16px;
  white-space: pre-wrap;
`;
