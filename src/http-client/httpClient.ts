import { ApiRequestError } from '@/error-handling/ErrorHandlingTypes';
import { HttpClientError } from '@/http-client/HttpClientError';

async function handleResponse<Data>(response: Response) {
  if (!response.ok) {
    const errorJson = (await response.json()) as ApiRequestError;

    throw new HttpClientError(
      errorJson.statusCode,
      errorJson.message ?? response.statusText,
    );
  }

  const data = (await response.json()) as Data;
  return data;
}

export const httpClient = {
  get: async <Data>(url: string): Promise<Data> => {
    const response = await fetch(url, {});
    const data = await handleResponse<Data>(response);
    return data;
  },
  post: async <Data>(url: string, body: object): Promise<Data> => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await handleResponse<Data>(response);
    return data;
  },
};
