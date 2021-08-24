import {
  getProductById,
  getBestProducts,
  getRecentProducts,
  getRecommandProducts,
  getCateogries,
  getProductReviewsById,
  getProductReviewsCountById,
  postProductReview,
  deleteProductReview,
  getProductQuestionById,
  getProductQuestionCountById,
  getSearchProducts,
  getProductReviewsByUser,
  postProductQuestion,
  getProductQuestionByUser,
  getProductSelectedReview,
  putProductReview,
  deleteProductReviewImage,
  deleteProductQuestion,
} from '@/lib/api/product';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  ICategory,
  IProduct,
  IProductDetail,
  IProductQuestion,
  IProductReview,
  IReviewCountAndRating,
  IQuestionCount,
  IMyReview,
  IMyQuestion,
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

export const useGetProductReviewsByUser = (offset: number) => {
  return useQuery<IMyReview, Error>(
    ['productReviewUser', offset],
    () => getProductReviewsByUser(offset),
    { keepPreviousData: true }
  );
};

export const useGetProductQuestionsByUser = (offset: number) => {
  return useQuery<IMyQuestion, Error>(
    ['productQuestionUser', offset],
    () => getProductQuestionByUser(offset),
    { keepPreviousData: true }
  );
};

export const useGetSelectedReviewById = (id: number) => {
  return useQuery<IProductReview, Error>(['selectedReview', id], () =>
    getProductSelectedReview(id)
  );
};

export const useGetProductQuestionById = (id: string, offset: number) => {
  return useQuery<IProductQuestion[], Error>(
    ['productQuestion', id, offset],
    () => getProductQuestionById(id, offset),
    { keepPreviousData: true }
  );
};

export const useGetProductReviewsCount = (id: string) => {
  return useQuery<IReviewCountAndRating, Error>(
    ['productReviewCount', id],
    () => getProductReviewsCountById(id)
  );
};

export const useGetProductQuestionCount = (id: string) => {
  return useQuery<IQuestionCount, Error>(['productQuestionCount', id], () =>
    getProductQuestionCountById(id)
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

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postProductQuestion, {
    onSuccess: () => {
      notify('success', '문의를 등록했습니다!');
      queryClient.invalidateQueries('productQuestion');
      queryClient.invalidateQueries('productQuestionCount');
    },
    onError: () => {
      notify('error', '에러가 발생했습니다!!');
    },
  });

  return mutation;
};

export const useUpdateReview = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(putProductReview, {
    onSuccess: () => {
      notify('success', '해당 리뷰를 성공적으로 수정했습니다.');
      queryClient.invalidateQueries('productReviewUser');
    },
    onError: () => {
      notify('error', '리뷰를 수정하는데 실패했습니다..!');
    },
  });

  return mutation;
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteProductReview, {
    onSuccess: () => {
      notify('success', '해당 리뷰를 성공적으로 제거했습니다.');
      queryClient.invalidateQueries('productReviewUser');
    },
    onError: () => {
      notify('error', '리뷰를 제거하는데 실패했습니다..!');
    },
  });

  return mutation;
};

export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteProductQuestion, {
    onSuccess: () => {
      notify('success', '해당 문의를 성공적으로 제거했습니다.');
      queryClient.invalidateQueries('productReviewUser');
    },
    onError: () => {
      notify('error', '문의를 제거하는데 실패했습니다..!');
    },
  });

  return mutation;
};

export const useDeleteReviewImage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteProductReviewImage, {
    onSuccess: () => {
      notify('success', '해당 리뷰 이미지를 성공적으로 제거했습니다.');
      queryClient.invalidateQueries('productReviewUser');
    },
    onError: () => {
      notify('error', '리뷰 이미지를 제거하는데 실패했습니다..!');
    },
  });

  return mutation;
};
