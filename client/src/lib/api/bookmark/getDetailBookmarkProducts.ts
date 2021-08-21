import { IBookmarkProduct } from '@/types';
import client from '../client';

export const getDetailBookmarkProducts = async () => {
  return await client.get<IBookmarkProduct[]>(`/bookmark/detail`);
};
