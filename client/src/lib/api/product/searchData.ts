import client from '../client';
import { ISearchData } from '@/types';

export async function searchRealTimeData(searchString: string) {
  return await client.get<ISearchData[]>(`/product/search?q=${searchString}`);
}
