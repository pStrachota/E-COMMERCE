import { useSearchParams } from 'next/navigation';
import { ProductFilterResponse } from '@/types/SearchTypes';
import useSWR, { SWRConfiguration } from 'swr';
import { HttpClientError } from '@/http-client/HttpClientError';
import { getProductFilterArgs } from '@/utils/SearchUtils';

export function useFilterProducts(config?: SWRConfiguration) {
  const searchParams = useSearchParams() || new URLSearchParams();
  const queryString = searchParams.toString();
  return useSWR<ProductFilterResponse, HttpClientError>(
    `/search/api${queryString ? `?${queryString}` : ''}`,
    { ...config, keepPreviousData: true },
  );
}

export function useProductFilterArgs() {
  const searchParams = useSearchParams() || new URLSearchParams();
  const productFilterArgs = getProductFilterArgs(searchParams);
  return productFilterArgs;
}
