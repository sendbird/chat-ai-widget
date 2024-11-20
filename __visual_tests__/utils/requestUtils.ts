import { ApiHost, ApiToken, PlatformApiPath } from '../const';

interface RequestParams {
  url: string;
  headers?: object;
  data?: object;
}

function uuid() {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function createQueryString(params: any): string {
  const items: string[] = [];
  for (const key in params) {
    items.push(`${key}=${encodeURIComponent(params[key])}`);
  }
  return items.join('&');
}

function createHeaders(): object {
  return {
    'Api-Token': ApiToken,
    'Content-Type': 'application/json',
  };
}

async function requestDelete(requestParams: RequestParams) {
  const response = await fetch(
    `${ApiHost}${requestParams.url}?${createQueryString({
      ...requestParams.data,
      sendbird: uuid(),
    })}`,
    {
      method: 'DELETE',
      headers: createHeaders() as Headers,
      body: JSON.stringify(requestParams.data) || null,
    },
  );
  return await response.json();
}

export async function deleteChannel(channelUrl: string): Promise<object[]> {
  return await requestDelete({
    url: PlatformApiPath.GROUP_CHANNELS + encodeURIComponent(channelUrl),
  });
}

export async function deleteUser(userId: string): Promise<object[]> {
  return await requestDelete({
    url: PlatformApiPath.USERS + encodeURIComponent(userId),
  });
}
