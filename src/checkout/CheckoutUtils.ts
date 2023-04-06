import cardValidator from 'card-validator';
import { ERROR_MESSAGES } from '@/error-handling/ErrorHandlingUtils';
import { z } from 'zod';

// card validation is for now manually disabled in order to simplify checkout form
export const completeCheckoutArgsSchema = z.object({
  nameSurname: z
    .string()
    .min(1, ERROR_MESSAGES.required('Name Surname'))
    .refine(
      (value) => cardValidator.cardholderName(value).isValid,
      ERROR_MESSAGES.invalid('Name Surname'),
    ),
  cardNumber: z.string().length(19, ERROR_MESSAGES.invalid('Card Number')),
  // .min(1, ERROR_MESSAGES.required('Card Number'))
  // .refine(
  //   (value) => cardValidator.number(value).isValid,
  //   ERROR_MESSAGES.invalid('Card Number'),
  // ),
  expiry: z.string().length(5, ERROR_MESSAGES.invalid('Expiration Date')),

  // .min(1, ERROR_MESSAGES.required('Expiration Date'))

  // .refine(
  //   (value) => cardValidator.expirationDate(value).isValid,
  //   ERROR_MESSAGES.invalid('Expiration Date'),
  // ),
  cvc: z.string().length(3, ERROR_MESSAGES.invalid('CVC')),
  // .min(1, ERROR_MESSAGES.required('CVC')),
  // .refine(
  //   (value) => cardValidator.cvv(value).isValid,
  //   ERROR_MESSAGES.invalid('CVC'),
  // ),
});

export type CompleteCheckoutArgs = z.infer<typeof completeCheckoutArgsSchema>;

export const defaultCompleteCheckoutArgs: CompleteCheckoutArgs = {
  nameSurname: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
};
