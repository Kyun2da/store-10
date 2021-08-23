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
  return await client.get<ISearchData[]>(`/product/search?q=${searchString}`);
};

export const getCateogries = async () => {
  return await client.get<ICategory[]>(`/product/category`);
};

export const postProductReview = async (data: IReview) => {
  return await client.post<IReview>(`/product/review`, data);
};

export const deleteProductReview = async (id: number) => {
  return await client.delete(`/product/review/${id}`);
};
