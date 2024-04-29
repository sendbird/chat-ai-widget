export interface SendbirdChatAICallbacks {
  onViewDetailClick?: (data: ViewDetailData) => void;
}

export interface ViewDetailRequestInfo {
  headers: {
    'Api-Token': string;
  };
  method: string;
  query_params: object;
  request_body: object;
}

export interface ViewDetailData {
  name: string;
  request: ViewDetailRequestInfo;
  response_text: string;
  status_code: number;
}
