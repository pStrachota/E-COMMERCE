import { getMetadata } from '@/seo/SeoUtils';

type CheckoutLayoutProps = React.PropsWithChildren;

export const metadata = getMetadata({ title: 'Checkout' });

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  return children;
}
