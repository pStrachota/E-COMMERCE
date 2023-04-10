import { Maybe } from '@/types/CommonTypes';
import { ApiRequestError } from '../../types/ErrorHandlingTypes';
import { DEFAULT_ERROR_MESSAGE } from '../../utils/ErrorHandlingUtils';

type ErrorMessageProps = {
  error: Maybe<Error | ApiRequestError>;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) {
    return null;
  }

  const message = error.message ?? DEFAULT_ERROR_MESSAGE;

  return (
    <div className="bg-error-lighter text-error-dark border border-error-main rounded-md p-4">
      {message}
    </div>
  );
}
