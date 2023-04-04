import { AnyFunction, Id, Maybe } from '@/common/CommonTypes';
import { isNil } from '@/common/CommonUtils';
import { ProductFilterArgs } from '@/search/SearchTypes';

function parseToSearchParams(
  params: Maybe<Record<string, Maybe<string | string[]>>>,
) {
  const searchParams = new URLSearchParams();

  function appendParam(key: string, value: Maybe<string>) {
    if (!isNil(value)) {
      searchParams.append(key, value);
    }
  }

  Object.entries(params ?? {}).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((valueItem) => {
        appendParam(key, valueItem);
      });
    } else {
      appendParam(key, value);
    }
  });

  return searchParams;
}

type RequiredKeys<T> = {
  [K in keyof T]-?: object extends { [P in K]: T[K] } ? never : K;
}[keyof T];

type HasRequiredField<T> = RequiredKeys<T> extends never ? false : true;

type CreateRouteArgs = {
  params?: unknown;
  query?: Record<string, Maybe<string | string[]>>;
};

type CreateRouteResult<RouteArgs extends CreateRouteArgs> = (
  ...args: HasRequiredField<RouteArgs> extends true ? [RouteArgs] : [RouteArgs?]
) => string;

function createRoute<RouteArgs extends CreateRouteArgs>(
  getPathname: (pathParams: RouteArgs['params']) => string,
): CreateRouteResult<RouteArgs> {
  return (...args) => {
    const [routeArgs] = args;
    const pathname = getPathname(routeArgs?.params);
    const search = parseToSearchParams(routeArgs?.query).toString();
    return `${pathname}${search ? `?${search}` : ''}`;
  };
}

type RouteArgs<T extends AnyFunction> = NonNullable<Parameters<T>[0]>;

export const routes = {
  home: createRoute<{ query?: ProductFilterArgs }>(() => '/home'),
  product: createRoute<{ params: { productId: Id } }>(
    (params) => `/products/${params.productId}`,
  ),
  checkout: createRoute(() => '/checkout'),
};
