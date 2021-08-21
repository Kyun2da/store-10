import {
  getProductById,
  getBestProducts,
  getRecentProducts,
  getRecommandProducts,
  getCateogries,
  getProductReviewsById,
  getProductReviewsCountById,
  postProductReview,
} from '@/lib/api/product';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  ICategory,
  IProduct,
  IProductDetail,
  IProductReview,
  IReviewCount,
} from '@/types/index';
import { notify } from '@/components/Shared/Toastify';

export const useGetProductById = (id: string) => {
  return useQuery<IProductDetail, Error>(
    ['productDetail', id],
    () => getProductById(id),
    { refetchOnWindowFocus: false }
  );
};

export const useGetProductReviewsById = (id: string, offset: number) => {
  return useQuery<IProductReview[], Error>(
    ['productReview', id, offset],
    () => getProductReviewsById(id, offset),
    { keepPreviousData: true }
  );
};

export const useGetProductReviewsCount = (id: string) => {
  return useQuery<IReviewCount, Error>(['productReviewCount', id], () =>
    getProductReviewsCountById(id)
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

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postProductReview, {
    onSuccess: () => {
      notify('success', '리뷰를 작성했습니다!');
      queryClient.invalidateQueries('productReview');
      queryClient.invalidateQueries('productReviewCount');
    },
    onError: () => {
      notify('error', '에러가 발생했습니다!!');
    },
  });

  return mutation;
};
