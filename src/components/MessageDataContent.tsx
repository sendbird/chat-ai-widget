import styled from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import {MessageDataFunctionCall, MessageDataFunctionCallProps} from '../App';
import { useEffect, useState } from 'react';
import { ReactComponent as EllipsisIcon } from '../icons/icon-ellipsis.svg';
import { ReactComponent as MessageBubbleIcon } from '../icons/icon-message-bubble.svg';
import { ReactComponent as ChevronRightIcon } from '../icons/icon-chevron-right.svg';

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
`;

const ViewDetails = styled.div`
  display: flex;
  align-items: center;
  color: #6210CC;
  path {
    fill: #6210CC;
  }
  &:hover {
    color: #4E11A1;
    cursor: pointer;
    path {
      fill: #4E11A1;
    }
  }
  &:focus {
    border: 1px solid #6210CC;
  }
  &:active {
    color: #0D0D0D;
    path {
      fill: #0D0D0D;
    }
  }
  &:disabled {
    color: #A6A6A6;
    path {
      fill: #A6A6A6;
    }
  }
`;

const WorkFlowType = styled.div`
  border-radius: 2px;
  border: 1px solid #CCC;
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
  background-color: #E0E0E0;
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
};
interface MessageDataObject {
  function_calls: object[];
}

interface FunctionCallRenderData {
  name: string;
  onClick: () => void;
}

export default function MessageDataContent({ messageData }: MessageDataContentProps) {
  const { messageDataFunctionCalls } = useConstantState();

  // console.log('## messageData: ', messageData);

  const [functionCalls, setFunctionCalls] = useState<FunctionCallRenderData[]>([]);

  useEffect(() => {
    const messageDataObject: MessageDataObject = JSON.parse(messageData);
    const functionCallsData = messageDataObject?.function_calls;

    console.log('## functionCallsData: ', functionCallsData, !!messageDataFunctionCalls);
    if (
      functionCallsData
      && Array.isArray(functionCallsData)
      && functionCallsData.length > 0
      // && messageDataFunctionCalls
    ) {
      const newFunctionCalls: FunctionCallRenderData[] = [];

      (functionCallsData as MessageDataFunctionCallProps[])
        .forEach((functionCallData: MessageDataFunctionCallProps) => {
          if (functionCallData.name) {
            let functionCall: MessageDataFunctionCall = () => {};
            if (messageDataFunctionCalls && typeof messageDataFunctionCalls[functionCallData.name] === 'function') {
              functionCall = messageDataFunctionCalls[functionCallData.name];
            }
            newFunctionCalls.push({
              name: functionCallData.name,
              onClick: () => functionCall(functionCallData),
            });
          }
        });
      if (newFunctionCalls.length > 0) {
        setFunctionCalls(newFunctionCalls);
      }
    }
  }, [messageDataFunctionCalls, messageData]);

  if (functionCalls.length === 0) return null;

  return (
    <Root>
      <SideBar/>
      <DataContainer>
        <DataRow>
          <MessageBubbleIcon id="aichatbot-widget-ellipsis-icon"/>
          <Text>{}</Text>
          <WorkFlowType>{}</WorkFlowType>
        </DataRow>
        {
          functionCalls.map((renderData) => (
            <DataRow>
              <EllipsisIcon id="aichatbot-widget-message-bubble-icon"/>
              <Text>{renderData.name}</Text>
              <ViewDetails
                onClick={renderData.onClick}
              >
                <Text>View details</Text>
                <ChevronRightIcon
                  id="aichatbot-widget-chevron-right-icon"
                />
              </ViewDetails>
            </DataRow>
          ))
        }
        <AdditionalInfo>
          Only visible in the dashboard widget
        </AdditionalInfo>
      </DataContainer>
    </Root>
  );
}
