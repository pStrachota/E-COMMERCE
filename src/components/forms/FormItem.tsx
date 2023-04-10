import { Maybe } from '@/types/CommonTypes';
import { FieldError } from 'react-hook-form';

type FormItemProps = React.PropsWithChildren<{
  error?: Maybe<FieldError>;
}>;

export default function FormItem({ error, children }: FormItemProps) {
  return (
    <div>
      {children}
      {error && (
        <div role="alert" className="text-error-main">
          {error.message}
        </div>
      )}
    </div>
  );
}
