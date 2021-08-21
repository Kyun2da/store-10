import { ICategory } from '@/types';
import client from '../client';

export async function getCateogries() {
  const res = await client.get<ICategory[]>(`/category`);
  return res.data;
}
