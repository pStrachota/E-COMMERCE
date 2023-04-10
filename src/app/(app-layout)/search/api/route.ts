import { createHandler } from '@/utils/ApiUtils';
import { searchService } from '@/service/searchService';
import { getProductFilterArgs } from '@/utils/SearchUtils';
import { NextResponse } from 'next/server';

export const GET = createHandler(async (request) => {
  const productFilterArgs = getProductFilterArgs(request.nextUrl.searchParams);
  const response = await searchService.filterProducts(productFilterArgs);

  return NextResponse.json(response);
});
