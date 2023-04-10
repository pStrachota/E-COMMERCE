'use client';

import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import { useDrawer } from '@/components/common/Drawer';
import { CartIcon } from '@/components/common/Icons';
import Price from '@/components/common/Price';
import { useAppSelector } from '@/store/store';
import CartDrawer from './CartDrawer';
import { selectProductsCount, selectTotalPrice } from '../../store/cartSlice';

export default function CartInfo() {
  const totalPrice = useAppSelector(selectTotalPrice);
  const productsCount = useAppSelector(selectProductsCount);

  const { isOpen, open, close } = useDrawer();

  return (
    <>
      <Badge value={productsCount}>
        <Button aria-label="Open Cart Info" icon={<CartIcon />} onClick={open}>
          <Price value={totalPrice} />
        </Button>
      </Badge>
      <CartDrawer isOpen={isOpen} onClose={close} />
    </>
  );
}
