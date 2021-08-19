import {
  getProductById,
  getBestProducts,
  getRecentProducts,
  getRecommandProducts,
} from '@/lib/api/product';
import {
  useQuery,
  useQueries,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import { IProducts, IProductDetail } from '@/types/index';

export const useGetProductById = (id: number) => {
  return useQuery<IProductDetail, Error>(
    ['productDetail', id],
    () => getProductById(id),
    { refetchOnWindowFocus: false }
  );
};

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export function useQueriesTyped<TQueries extends readonly UseQueryOptions[]>(
  queries: [...TQueries]
): {
  [ArrayElement in keyof TQueries]: UseQueryResult<
    TQueries[ArrayElement] extends { select: infer TSelect }
      ? TSelect extends (data: any) => any
        ? ReturnType<TSelect>
        : never
      : Awaited<
          ReturnType<
            NonNullable<
              Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']
            >
          >
        >
  >;
} {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useQueries(
    queries as UseQueryOptions<unknown, unknown, unknown>[]
  ) as any;
}

export const useGetMainProducts = () => {
  return useQueriesTyped([
    {
      queryKey: 'recommandProduct',
      queryFn: getRecommandProducts,
    },
    {
      queryKey: 'bestProducts',
      queryFn: getBestProducts,
    },
    {
      queryKey: 'recentProduct',
      queryFn: getRecentProducts,
    },
  ]);
};
// export const useGetRecommandProducts = () => {
//   return useQuery<IProducts, Error>('recommandProduct', getRecommandProducts);
// };

// export const useGetBestProducts = () => {
//   return useQuery<IProducts, Error>('bestProducts', getBestProducts);
// };

// export const useGetRecentProducts = () => {
//   return useQuery<IProducts, Error>('recentProduct', getRecentProducts);
// };
