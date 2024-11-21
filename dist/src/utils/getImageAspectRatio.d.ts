import { UserMessageCreateParams, FileMessageCreateParams, MessageMetaArray } from '@sendbird/chat/message';

export declare function getImageAspectRatio(file: File): Promise<number>;
export declare function getImageAspectRatioMetaArray(params: FileMessageCreateParams | UserMessageCreateParams): Promise<MessageMetaArray | undefined>;
export declare const META_ARRAY_ASPECT_RATIO_KEY = "KEY_IMG_ASPECT_RATIO";
