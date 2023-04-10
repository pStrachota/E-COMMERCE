'use client';

import { Maybe } from '@/types/CommonTypes';
import PaperTitle from '@/components/common/PaperTitle';
import Paper from '@/components/common/Paper';
import CheckboxGroup from '@/components/forms/CheckboxGroup';
import RadioGroup from '@/components/forms/RadioGroup';
import {
  ProductFilterData,
  ProductFilterOptionItem,
  ProductFilterOptions,
} from '@/types/SearchTypes';
import {
  getValuesOfSelectedOptions,
  ProductFilterKey,
} from '@/utils/SearchUtils';
import { useRouter } from 'next/navigation';
import { useProductFilterArgs } from '@/hooks/SearchHooks';
import { useFilterProducts } from '@/hooks/SearchHooks';
import { routes } from '@/routing/RoutingUtils';

const defaultOptions: ProductFilterOptions = {
  sortings: {
    title: 'Sorting',
    options: [],
    filterKey: ProductFilterKey.SORTING,
  },
  categories: {
    title: 'Categories',
    options: [],
    filterKey: ProductFilterKey.CATEGORIES,
  },
  priceRanges: {
    title: 'Price',
    options: [],
    filterKey: ProductFilterKey.PRICE_RANGES,
  },
};

export default function ProductFilter() {
  const { data, isLoading, isValidating } = useFilterProducts({
    revalidateIfStale: false,
  });

  const isDisabled = isValidating;
  const values = getValuesOfSelectedOptions(data?.selectedOptions);
  const router = useRouter();
  const filterArgs = useProductFilterArgs();

  const handleChange = (
    filterKey: ProductFilterData['filterKey'],
    newValue: Maybe<string | string[]>,
  ) => {
    router.push(
      routes.search({
        query: {
          ...filterArgs,
          [filterKey]: newValue,
        },
      }),
    );
  };

  const isFirstLoading = isLoading && !data;

  return (
    <div className="pb-6 flex flex-col gap-4">
      {Object.values(data?.filterOptions ?? defaultOptions).map((filter) => {
        let filterInput = null;

        switch (filter.filterKey) {
          case ProductFilterKey.CATEGORIES:
          case ProductFilterKey.PRICE_RANGES:
            filterInput = (
              <CheckboxGroup<ProductFilterOptionItem>
                isLoading={isFirstLoading}
                isDisabled={isDisabled}
                options={filter.options}
                getOptionLabel={(option) => option.title}
                getOptionValue={(option) => option.value}
                value={values[filter.filterKey]}
                onChange={(newValue) => {
                  handleChange(filter.filterKey, newValue);
                }}
              />
            );
            break;
          case ProductFilterKey.SORTING:
            filterInput = (
              <RadioGroup<ProductFilterOptionItem>
                isLoading={isFirstLoading}
                isDisabled={isDisabled}
                options={filter.options}
                getOptionLabel={(option) => option.title}
                getOptionValue={(option) => option.value}
                value={values[filter.filterKey]}
                onChange={(newValue) => {
                  handleChange(filter.filterKey, newValue);
                }}
              />
            );
        }

        return (
          <div key={filter.filterKey}>
            <PaperTitle>{filter.title}</PaperTitle>
            <Paper>{filterInput}</Paper>
          </div>
        );
      })}
    </div>
  );
}
