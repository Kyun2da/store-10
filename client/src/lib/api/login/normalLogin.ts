import { ILoginUser } from '@/types';
import client from '../client';

export async function normalLogin(data: ILoginUser) {
  const response = await client.post('/auth/login', data);
  return response.data;
}
