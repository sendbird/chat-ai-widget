import { ApiHost, ApiToken } from '../const';

interface RequestParams {
  url: string;
  headers?: object;
  data?: object;
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
    url: `/v3/group_channels/${encodeURIComponent(channelUrl)}`,
  });
}

export async function deleteUser(userId: string): Promise<object[]> {
  return await requestDelete({
    url: `/v3/users/${encodeURIComponent(userId)}`,
  });
}
