import { UserMessageCreateParams, FileMessageCreateParams, MessageMetaArray } from '@sendbird/chat/message';

export function getImageAspectRatio(file: File) {
  return new Promise<number>((resolve) => {
    const img = new Image();

    img.onload = function () {
      const width = img.width;
      const height = img.height;

      URL.revokeObjectURL(img.src);
      resolve(width / height);
    };

    img.src = URL.createObjectURL(file);
  });
}

export async function getImageAspectRatioMetaArray(params: FileMessageCreateParams | UserMessageCreateParams) {
  if ('file' in params && params.file instanceof File && params.file.type.startsWith('image/')) {
    const ratio = await getImageAspectRatio(params.file);
    return new MessageMetaArray({
      key: META_ARRAY_ASPECT_RATIO_KEY,
      value: [`${ratio}`],
    });
  }
}

export const META_ARRAY_ASPECT_RATIO_KEY = 'KEY_IMG_ASPECT_RATIO';
