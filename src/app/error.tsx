'use client';

import CenteredLayout from '@/app-layout/CenteredLayout';
import ErrorContent from '@/error-handling/ErrorContent';
import { StatusCodes } from 'http-status-codes';

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <CenteredLayout>
      <ErrorContent
        statusCode={StatusCodes.INTERNAL_SERVER_ERROR}
        message={error.message}
      />
    </CenteredLayout>
  );
}
