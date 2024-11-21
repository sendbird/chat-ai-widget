import styled from 'styled-components';

import { customizedDemoSettings } from '../../../../../const';
import { Label as UILabel } from '../../../../../foundation/components/Label';
import ChevronDownIcon from '../../../../../icons/chevron-down.svg';

interface InputContainerProps {
  category?: string;
  isFolded: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  background: #e0e7fb;
  background-size: cover;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const CommonInnerContainerStyles = `
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

export const InnerContainer = styled.div`
  ${CommonInnerContainerStyles}
  background-color: ${customizedDemoSettings['healthcare'].color.chatInputBackground};
`;

interface TopInnerContainerProps {
  isFolded?: boolean;
}

export const TopInnerContainer = styled.div<TopInnerContainerProps>`
  ${CommonInnerContainerStyles}
  background: transparent;
`;

export const TopChevronDownIcon = styled(ChevronDownIcon)`
  & path {
    fill: #000000;
  }
`;

interface InputProps {
  isActive: boolean;
  category?: string;
}

export const InputComponent = styled.textarea<InputProps>`
  width: ${(props: InputProps) => (props.isActive ? 'calc(100% - 30px)' : '100%')};
  transition: ${(props: InputProps) => (props.isActive ? 'none' : 'width 0.5s')};
  transition-timing-function: ease;
  padding: 8px 16px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.88);
  resize: none;
  border: none;
  outline: none;
  max-height: 116px;
  background: rgba(255, 255, 255, 0.38);
  border-radius: 8px;
  height: auto;
  ::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
`;

export const ToggleText = styled.div`
  font-weight: 600;
  padding-top: 14px;
  padding-bottom: 14px;
  cursor: pointer;
  text-align: center;
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #007bff;
  }
`;

export const AIAssistantContainer = styled.div``;

export const AIAssistantBodyContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  max-height: 260px;
  overflow-y: auto;
`;

export const AIContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  max-height: 200px;
`;

export const PatientHistoryListBody = styled.div`
  display: flex;
  height: 154px;
  flex-direction: column;
  overflow-y: auto;
`;

export const PatientHistoryListContainer = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 12px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
`;

interface SecondardButtonContainerInputProps {
  showTip: boolean;
}

export const SecondardButtonContainer = styled.div<SecondardButtonContainerInputProps>`
  display: flex;
  flex-direction: ${({ showTip }) => (showTip ? 'column' : 'row')};
  justify-content: space-between;
  gap: 8px;
  flex: 1 1 auto;

  > div {
    width: 100%;
  }
`;

export const PrimaryButton = styled.div`
  padding: 4px 12px;
  background-color: var(--sendbird-light-primary-300); // Blue background
  color: var(--sendbird-light-background-50-0); // White text
  border: 1px solid var(--sendbird-light-primary-300);
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

export const SecondaryButton = styled.div<SecondardButtonContainerInputProps>`
  padding: 4px 12px;
  background-color: transparent;
  color: var(--sendbird-light-primary-300);
  border: 1px solid var(--sendbird-light-primary-300); // Blue border
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  ${({ showTip }) => !showTip && 'width: 100%;'}
`;

export const TextContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  height: 140px;
  color: black;
  border-radius: 8px;
  text-align: start;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
`;

export const Button = styled.div`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AIAssistantHeadText = styled(UILabel)`
  font-weight: 700;
`;

export const AIAssistantBodyText = styled(UILabel)`
  padding: 12px;
  font-weight: 500;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: auto;
`;

export const AIAssistantBodyHeadText = styled(UILabel)`
  font-weight: 700;
  font-size: 11px;
  //  not draggable
  user-select: none;
`;

export const NewInput = styled.textarea`
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
  border: none;
  border-radius: 8px;
  outline: none;
  resize: none;
  height: 36px;
  background: rgba(255, 255, 255, 0.4);

  ::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
`;

export const SendButton = styled.button`
  padding: 4px 12px;
  background-color: ${(props) => (props.disabled ? 'rgba(0, 0, 0, 0.12)' : '#007bff')};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PendingSendButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 12px;
  background-color: rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  cursor: not-allowed;
`;

export const CancelButton = styled.button`
  padding: 4px 12px;
  background: transparent;
  border: 1px solid var(--sendbird-light-primary-300);
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PatientHistoryLabel = styled(UILabel)`
  padding-bottom: 10px;
`;

export const ListItemContainer = styled.div`
  line-height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cccccc; /* Hover 시 회색으로 배경색 변경 */

    &:first-child {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    &:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  &:last-child > div {
    border-bottom: none;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.38);
`;
