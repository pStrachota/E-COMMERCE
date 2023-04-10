import '@/styles/global.css';
import { Inter } from 'next/font/google';
import ModalRoot from '@/components/modals/ModalRoot';
import StoreProvider from '@/store/StoreProvider';
import BaseSWRConfig from '@/http-client/BaseSWRConfig';
import { getMetadata } from '@/utils/SeoUtils';
import React from 'react';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = getMetadata();

type RootLayoutProps = React.PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="font-sans">
        <BaseSWRConfig>
          <StoreProvider>
            {children}
            <ModalRoot />
          </StoreProvider>
        </BaseSWRConfig>
      </body>
    </html>
  );
}
