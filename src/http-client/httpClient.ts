import { ApiRequestError } from '@/types/ErrorHandlingTypes';
import { HttpClientError } from '@/http-client/HttpClientError';

async function handleResponse<Data>(response: Response) {
  if (!response.ok) {
    const errorJson = (await response.json()) as ApiRequestError;

    throw new HttpClientError(
      errorJson.statusCode,
      errorJson.message ?? response.statusText,
    );
  }

  return (await response.json()) as Data;
}

export const httpClient = {
  get: async <Data>(url: string): Promise<Data> => {
    const response = await fetch(url, {});
    return await handleResponse<Data>(response);
  },
  post: async <Data>(url: string, body: object): Promise<Data> => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await handleResponse<Data>(response);
  },
};
