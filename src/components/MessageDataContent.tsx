import styled from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import { ReactComponent as ChevronRightIcon } from '../icons/icon-chevron-right.svg';
import { ReactComponent as EllipsisIcon } from '../icons/icon-ellipsis.svg';
import { ReactComponent as MessageBubbleIcon } from '../icons/icon-message-bubble.svg';
import { ViewDetailData } from '../interfaces';
import {noop} from '../utils';

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
`;

const ViewDetails = styled.div`
  display: flex;
  align-items: center;
  color: #6210cc;
  path {
    fill: #6210cc;
  }
  &:hover {
    color: #4e11a1;
    cursor: pointer;
    path {
      fill: #4e11a1;
    }
  }
  &:focus {
    border: 1px solid #6210cc;
  }
  &:active {
    color: #0d0d0d;
    path {
      fill: #0d0d0d;
    }
  }
  &:disabled {
    color: #a6a6a6;
    path {
      fill: #a6a6a6;
    }
  }
`;

const WorkFlowType = styled.div`
  border-radius: 2px;
  border: 1px solid #ccc;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
  margin-left: 36px;
`;

const SideBar = styled.div`
  width: 4px;
  border-radius: 100px;
  background-color: #e0e0e0;
  margin-left: 8px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
  margin-left: 16px;
`;

const DataRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const AdditionalInfo = styled.div`
  color: #858585;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

interface MessageDataContentProps {
  messageData: string;
}
interface MessageDataObject {
  function_calls: object[];
}

interface FunctionCallRenderData {
  name: string;
  onClick: () => void;
}

export default function MessageDataContent({
  messageData,
}: MessageDataContentProps) {
  const { callbacks } = useConstantState();
  const onViewDetailClick = callbacks?.onViewDetailClick;

  function getFunctionCallsData() {
    try {
      const messageDataObject: MessageDataObject = JSON.parse(messageData);
      const functionCallsData = messageDataObject?.function_calls;
      const newFunctionCalls: FunctionCallRenderData[] = [];
      if (
        functionCallsData &&
        Array.isArray(functionCallsData) &&
        functionCallsData.length > 0
      ) {
        (functionCallsData as ViewDetailData[]).forEach(
          (functionCallData: ViewDetailData) => {
            const response = functionCallData.response;
            if (response.name) {
              const functionCall =
                onViewDetailClick && typeof onViewDetailClick === 'function'
                  ? onViewDetailClick
                  : noop;
              newFunctionCalls.push({
                name: response.name,
                onClick: () => functionCall(functionCallData),
              });
            }
          }
        );
      }
      return newFunctionCalls;
    } catch (e) {
      return [];
    }
  }

  const functionCalls: FunctionCallRenderData[] = getFunctionCallsData();
  if (functionCalls.length === 0) return null;

  return (
    <Root>
      <SideBar />
      <DataContainer>
        <DataRow>
          <MessageBubbleIcon id="aichatbot-widget-ellipsis-icon" />
          <Text>{}</Text>
          <WorkFlowType>{}</WorkFlowType>
        </DataRow>
        {functionCalls.map((renderData, index) => (
          <DataRow key={index}>
            <EllipsisIcon id="aichatbot-widget-message-bubble-icon" />
            <Text>{renderData.name}</Text>
            <ViewDetails onClick={renderData.onClick}>
              <Text>View details</Text>
              <ChevronRightIcon id="aichatbot-widget-chevron-right-icon" />
            </ViewDetails>
          </DataRow>
        ))}
        <AdditionalInfo>Only visible in the dashboard widget</AdditionalInfo>
      </DataContainer>
    </Root>
  );
}
