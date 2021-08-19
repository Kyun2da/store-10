import { getProductById } from '@/lib/api/product';
import { useQuery } from 'react-query';
import { IProductDetail } from '@/types/index';

export const useGetProductById = (id: number) => {
  return useQuery<IProductDetail, Error>(
    ['productDetail', id],
    () => getProductById(id),
    { refetchOnWindowFocus: false }
  );
};
