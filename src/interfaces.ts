export interface SendbirdChatAICallbacks {
  onViewDetailClick?: (data: FunctionCallData) => void;
}

export interface FunctionCallRequestInfo {
  headers: {
    'Api-Token': string;
  };
  method: string;
  query_params: object;
  request_body: object;
}

export interface FunctionCallData {
  name: string;
  request: FunctionCallRequestInfo;
  response_text: string;
  status_code: number;
}
