export interface SendbirdChatAICallbacks {
  onViewDetailClick?: (data: FunctionCallData) => void;
  /**
   * @private Callback to be called when the widget expand state changes.
   */
  onWidgetExpandStateChange?: (isExpanded: boolean) => void;
  onWidgetSettingFailure?: (error: Error) => void;
}

export interface FunctionCallRequest {
  headers: object;
  method: string;
  query_params: object;
  request_body: object;
  url: string;
}

export interface FunctionCallData {
  name: string;
  request: FunctionCallRequest;
  response_text: string;
  status_code: number;
}

export interface WidgetCarouselItem {
  title: string;
  url: string;
  featured_image: string;
}

export interface FunctionCallAdapterParams {
  name: string;
  request: FunctionCallRequest;
  response: unknown;
}

export interface FunctionCallAdapter<T> {
  (params: FunctionCallAdapterParams): T;
}
