import { createMockArray } from '@/utils/CommonUtils';
import ListItem from '@/components/common/ListItem';
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton';

export default function SearchResultsSkeleton() {
  return (
    <>
      {createMockArray(8).map((i) => {
        return (
          <ListItem key={i}>
            <ProductCardSkeleton />
          </ListItem>
        );
      })}
    </>
  );
}
