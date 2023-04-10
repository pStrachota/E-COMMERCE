import 'server-only';

import { completeCheckoutArgsSchema } from '../utils/CheckoutUtils';

export const checkoutService = {
  completeCheckout: async (args: unknown) => {
    await completeCheckoutArgsSchema.parse(args);
  },
};
