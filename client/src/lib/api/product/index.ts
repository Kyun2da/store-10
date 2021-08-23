import client from '../client';
import {
  ICategory,
  IProduct,
  IProductDetail,
  ISearchData,
  IProductReview,
  IReviewCountAndRating,
  IReview,
  IProductQuestion,
  IQuestionCount,
} from '@/types';

export const getProductById = async (id: string) => {
  return await client.get<IProductDetail>(`/product/${id}`);
};

export const getProductReviewsById = async (id: string, offset: number) => {
  return await client.get<IProductReview[]>(`/product/review/${id}/${offset}`);
};

export const getProductQuestionById = async (id: string, offset: number) => {
  return await client.get<IProductQuestion[]>(
    `/product/question/${id}/${offset}`
  );
};

export const getProductReviewsCountById = async (id: string) => {
  return await client.get<IReviewCountAndRating>(`/product/review/count/${id}`);
};

export const getProductQuestionCountById = async (id: string) => {
  return await client.get<IQuestionCount>(`/product/question/count/${id}`);
};

export const getRecommandProducts = async () => {
  return await client.get<IProduct[]>(`/product/recommand?limit=8`);
};

export const getRecentProducts = async () => {
  return await client.get<IProduct[]>(`/product?limit=8`);
};

export const getBestProducts = async () => {
  return await client.get<IProduct[]>(`/product/best?limit=8`);
};

export const getElasticProducts = async (searchString: string) => {
  return await client.get<ISearchData[]>(`/product/elastic/search?q=${searchString}`);
};

export const getSearchProducts = async (searchString: string) => {
  return await client.get<IProduct[]>(`/product/search?search=${searchString}`);
};

export const getCateogries = async () => {
  return await client.get<ICategory[]>(`/product/category-list`);
};
export const getCategoryProducts = async ({
  pageParam = {
    start: 0,
    subCateogry: 1,
    orderType: 'createdAt',
  },
}) => {
  return await client.get<
    IProduct[]
  >(`/product/category?subCategoryId=${pageParam.subCateogry}&start=${pageParam.start}&
  orderType=${pageParam.orderType}`);
};

export const postProductReview = async (data: IReview) => {
  return await client.post<IReview>(`/product/review`, data);
};

export const deleteProductReview = async (id: number) => {
  return await client.delete(`/product/review/${id}`);
};
