import NumberInput from '@/components/forms/NumberInput';
import SubmitButton from '@/components/forms/SubmitButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import Form from '@/components/forms/Form';
import {
  CompleteCheckoutArgs,
  completeCheckoutArgsSchema,
  defaultCompleteCheckoutArgs,
} from '../../utils/CheckoutUtils';
import FormItem from '@/components/forms/FormItem';
import Input from '@/components/forms/Input';
import FormItemLabel from '@/components/forms/FormItemLabel';
import { zodResolver } from '@hookform/resolvers/zod';
import { ApiRequestError } from '@/types/ErrorHandlingTypes';
import { Maybe } from '@/types/CommonTypes';
import ErrorMessage from '@/components/error-handling/ErrorMessage';

type CheckoutFormProps = {
  error: Maybe<ApiRequestError>;
  onSubmit: SubmitHandler<CompleteCheckoutArgs>;
};

export default function CheckoutForm({ error, onSubmit }: CheckoutFormProps) {
  const { register, formState, handleSubmit } = useForm<CompleteCheckoutArgs>({
    resolver: zodResolver(completeCheckoutArgsSchema),
    defaultValues: defaultCompleteCheckoutArgs,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ErrorMessage error={error} />
      <FormItem error={formState.errors.nameSurname}>
        <FormItemLabel htmlFor="nameSurname">Name Surname</FormItemLabel>
        <Input
          id="nameSurname"
          placeholder="Name Surname"
          {...register('nameSurname')}
        />
      </FormItem>
      <FormItem error={formState.errors.cardNumber}>
        <FormItemLabel htmlFor="cardNumber">Card Number</FormItemLabel>
        <NumberInput
          id="cardNumber"
          format="#### #### #### ####"
          mask="_"
          placeholder="0000 0000 0000 0000"
          {...register('cardNumber')}
        />
      </FormItem>
      <div className="flex justify-between gap-4">
        <FormItem error={formState.errors.expiry}>
          <FormItemLabel htmlFor="expiry">Expiration Date</FormItemLabel>
          <NumberInput
            id="expiry"
            mask="_"
            format="##/##"
            placeholder="MM/YY"
            {...register('expiry')}
          />
        </FormItem>
        <FormItem error={formState.errors.cvc}>
          <FormItemLabel htmlFor="cvc">CVC</FormItemLabel>
          <NumberInput
            id="cvc"
            mask="_"
            format="###"
            placeholder="000"
            {...register('cvc')}
          />
        </FormItem>
      </div>
      <div className="flex justify-end">
        <SubmitButton formState={formState}>Complete Checkout</SubmitButton>
      </div>
    </Form>
  );
}
