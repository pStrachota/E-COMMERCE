import { createHandler } from '@/api/ApiUtils';
import { searchService } from '@/search/searchService';
import { getProductFilterArgs } from '@/search/SearchUtils';
import { NextResponse } from 'next/server';

export const GET = createHandler(async (request) => {
  const productFilterArgs = getProductFilterArgs(request.nextUrl.searchParams);
  const response = await searchService.filterProducts(productFilterArgs);

  return NextResponse.json(response);
});
