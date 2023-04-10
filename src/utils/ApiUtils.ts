import { handleErrors } from '@/utils/ErrorHandlingUtils';
import { NextRequest, NextResponse } from 'next/server';

export const createHandler =
  (handler: (request: NextRequest) => Promise<NextResponse>) =>
  (request: NextRequest) => {
    return handleErrors(handler)(request);
  };
