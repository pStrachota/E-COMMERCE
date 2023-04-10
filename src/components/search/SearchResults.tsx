'use client';

import ProductCard from '@/components/products/ProductCard';
import ListItem from '@/components/common/ListItem';
import Paper from '@/components/common/Paper';
import List from '@/components/common/List';
import { useFilterProducts } from '@/hooks/SearchHooks';
import SearchResultsSkeleton from './SearchResultsSkeleton';

export default function SearchResults() {
  const { data, isValidating } = useFilterProducts();

  return (
    <Paper>
      <List className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {isValidating ? (
          <SearchResultsSkeleton />
        ) : (
          data?.products.map((product) => {
            return (
              <ListItem key={product.id}>
                <ProductCard product={product} />
              </ListItem>
            );
          })
        )}
      </List>
    </Paper>
  );
}
