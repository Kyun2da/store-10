import { ISearchData } from '@/types';
import client from '../client';

export async function searchRealTimeData(searchString: string) {
  const response = await client.get<ISearchData[]>(
    `/product/search?q=${searchString}`
  );
  return response.data;
}
