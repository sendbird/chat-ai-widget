import styled from 'styled-components';

import { useConstantState } from '../context/ConstantContext';
import ChevronRightIcon from '../icons/icon-chevron-right.svg';
import EllipsisIcon from '../icons/icon-ellipsis.svg';
import MessageBubbleIcon from '../icons/icon-message-bubble.svg';
import { FunctionCallData } from '../types';
import { noop } from '../utils';

const ICON_WIDTH = 16;
const RIGHT_CONTENT_WIDTH = 92;
const DATA_ROW_GAP = 8;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  max-width: calc(
    100% - ${ICON_WIDTH}px - ${DATA_ROW_GAP}px - ${DATA_ROW_GAP}px -
      ${RIGHT_CONTENT_WIDTH}px
  );
`;

const TextButton = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  white-space: nowrap;
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

const LineHeightWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`;

const WorkFlowType = styled.div`
  border-radius: 2px;
  border: 1px solid #ccc;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  padding: 0 4px;
  white-space: nowrap;
`;

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
  padding-left: 36px;
  //width: calc(100% - 36px);
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
  width: calc(100% - 28px);
  margin-left: 16px;
`;

const DataRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${DATA_ROW_GAP}px;
  width: 100%;
`;

const AdditionalInfo = styled.div`
  color: #858585;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 5px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 20px;
`;

interface MessageDataContentProps {
  messageData: string;
}

enum IntentPayload {
  EXACT_MATCHED = 'exact_question_match',
  KEYWORD_MATCHED = 'keyword_match',
  SIMILAR_MATCHED = 'similar_question_match',
}

interface WorkflowObject {
  name: string;
  intent_type: IntentPayload;
}

interface MessageDataObject {
  function_calls: object[];
  workflow: WorkflowObject;
}

interface FunctionCallRenderData {
  name: string;
  onClick: () => void;
}

interface WorkflowData {
  name: string;
  type: string;
}

const INTENT_MAP = {
  exact_question_match: 'Exact match',
  keyword_match: 'Keyword',
  similar_question_match: 'Intent classified',
};

function isObjectOfViewDetailData(object: any): object is FunctionCallData {
  const { name, request, response_text, status_code } = object ?? {};
  return (
    typeof name === 'string' &&
    typeof request === 'object' &&
    typeof response_text === 'string' &&
    typeof status_code === 'number'
  );
}

function isValidFunctionCalls(
  functionCallsData: object | undefined
): functionCallsData is FunctionCallData[] {
  return (
    Array.isArray(functionCallsData) &&
    functionCallsData.length > 0 &&
    functionCallsData.every((functionCallData) =>
      isObjectOfViewDetailData(functionCallData)
    )
  );
}

function isValidWorkflowData(object: any): object is WorkflowObject {
  const { name, intent_type } = object ?? {};
  return (
    typeof name === 'string' &&
    Object.values(IntentPayload).includes(intent_type)
  );
}

export default function MessageDataContent({
  messageData,
}: MessageDataContentProps) {
  const { callbacks } = useConstantState();
  const onViewDetailClick = callbacks?.onViewDetailClick;

  function getMessageContentData(): [
    WorkflowData | null,
    FunctionCallRenderData[]
  ] {
    let newWorkflow: WorkflowData | null = null;
    const newFunctionCalls: FunctionCallRenderData[] = [];

    try {
      const messageDataObject: MessageDataObject = JSON.parse(messageData);
      const functionCallsData = messageDataObject?.function_calls;

      if (
        Array.isArray(functionCallsData) &&
        functionCallsData.length > 0 &&
        isValidFunctionCalls(functionCallsData)
      ) {
        functionCallsData.forEach((functionCallData) => {
          if (functionCallData.name) {
            const functionCall =
              typeof onViewDetailClick === 'function'
                ? onViewDetailClick
                : noop;
            newFunctionCalls.push({
              name: functionCallData.name,
              onClick: () => functionCall(functionCallData),
            });
          }
        });
      }
      const workflowData = messageDataObject?.workflow;
      if (isValidWorkflowData(workflowData)) {
        newWorkflow = {
          name: workflowData.name,
          type: INTENT_MAP[workflowData.intent_type],
        } as WorkflowData;
      }
      return [newWorkflow, newFunctionCalls];
    } catch (e) {
      return [newWorkflow, newFunctionCalls];
    }
  }
  const [workflow, functionCalls] = getMessageContentData();

  if (!workflow && functionCalls.length === 0) return null;

  return (
    <Root>
      <SideBar />
      <DataContainer>
        {workflow && (
          <DataRow>
            <Icon>
              <MessageBubbleIcon id="aichatbot-widget-ellipsis-icon" />
            </Icon>
            <Text>{workflow.name}</Text>
            <LineHeightWrapper>
              <WorkFlowType>{workflow.type}</WorkFlowType>
            </LineHeightWrapper>
          </DataRow>
        )}
        {functionCalls.map((renderData, index) => (
          <DataRow key={index}>
            <Icon>
              <EllipsisIcon id="aichatbot-widget-message-bubble-icon" />
            </Icon>
            <Text>{renderData.name}</Text>
            <ViewDetails onClick={renderData.onClick}>
              <TextButton>View details</TextButton>
              <ChevronRightIcon id="aichatbot-widget-chevron-right-icon" />
            </ViewDetails>
          </DataRow>
        ))}
        <AdditionalInfo>Only visible in the dashboard widget</AdditionalInfo>
      </DataContainer>
    </Root>
  );
}
