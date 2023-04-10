import NextLink from '@/routing/NextLink';
import { APP_TITLE } from '@/utils/CommonUtils';
import Center from '@/components/common/Center';
import CartInfo from '@/components/cart/CartInfo';

export default function AppHeader() {
  return (
    <header className="fixed w-full h-app-header z-10 bg-background-main px-6 shadow-sm flex">
      <Center maxWidth="xl" className="flex items-center">
        <NextLink href="/" className="font-bold text-2xl text-primary-main">
          {APP_TITLE}
        </NextLink>
        <div className="flex-grow" />
        <CartInfo />
      </Center>
    </header>
  );
}
