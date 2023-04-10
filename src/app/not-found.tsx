import CenteredLayout from '@/layout/CenteredLayout';
import ErrorContent from '@/components/error-handling/ErrorContent';
import { StatusCodes } from 'http-status-codes';

export default function NotFoundPage() {
  return (
    <CenteredLayout>
      <ErrorContent
        statusCode={StatusCodes.NOT_FOUND}
        message="This page could not be found"
      />
    </CenteredLayout>
  );
}
