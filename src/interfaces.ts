export interface ViewDetailData {
  request: object;
  response: ViewDetailResponse;
}

export interface SendbirdChatAICallbacks {
  onViewDetailClick?: (data: ViewDetailData) => void;
}

export interface ViewDetailResponse {
  name: string;
  response_text: string;
  status_code: number;
}