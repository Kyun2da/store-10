import client from '../client';
import { ICategory, IProduct, IProductDetail, ISearchData } from '@/types';

export const getProductById = async (id: string) => {
  return await client.get<IProductDetail>(`/product/${id}`);
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
