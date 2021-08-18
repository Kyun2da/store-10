import { IUser } from '@/types';
import client from '../client';

export async function getCurrentUser() {
  const response = await client.get<IUser>('/auth/check');
  return response.data;
}
