export interface SendbirdChatAICallbacks {
  onViewDetailClick?: (data: FunctionCallData) => void;
  /**
   * @private Callback to be called when the widget expand state changes.
   */
  onWidgetExpandStateChange?: (isExpanded: boolean) => void;
}

export interface FunctionCallRequestInfo {
  headers: {
    'Api-Token': string;
  };
  method: string;
  query_params: object;
  request_body: object;
  url: string;
}

export interface FunctionCallData {
  name: string;
  request: FunctionCallRequestInfo;
  response_text: string;
  status_code: number;
}
