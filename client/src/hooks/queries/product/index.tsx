import {
  getProductById,
  getBestProducts,
  getRecentProducts,
  getRecommandProducts,
  getCateogries,
} from '@/lib/api/product';
import { useQuery } from 'react-query';
import { ICategory, IProduct, IProductDetail } from '@/types/index';

export const useGetProductById = (id: number) => {
  return useQuery<IProductDetail, Error>(
    ['productDetail', id],
    () => getProductById(id),
    { refetchOnWindowFocus: false }
  );
};

export const useGetRecommandProducts = () => {
  return useQuery<IProduct[], Error>('recommandProduct', getRecommandProducts);
};

export const useGetBestProducts = () => {
  return useQuery<IProduct[], Error>('bestProducts', getBestProducts);
};

export const useGetRecentProducts = () => {
  return useQuery<IProduct[], Error>('recentProduct', getRecentProducts);
};

export const useGetCateogries = () => {
  return useQuery<ICategory[], Error>('categories', () => getCateogries(), {
    refetchOnWindowFocus: false,
  });
};
