'use client';

import Button from '@/components/common/Button';
import { Product } from '@/types/ProductsTypes';
import { useAppDispatch } from '@/store/store';
import { addProduct } from '../../store/cartSlice';

type AddToCartButtonProps = {
  className?: string;
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();

  return (
    <Button
      variant="primary"
      isFullWidth
      className="max-w-xs"
      onClick={() => dispatch(addProduct(product))}
    >
      Add to Cart
    </Button>
  );
}
