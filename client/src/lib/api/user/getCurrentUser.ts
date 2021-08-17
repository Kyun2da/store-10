import { IUser } from '@/types';
import client from '../client';

export async function getCurrentUser() {
  const response = await client.get<IUser>('/api/auth/check');
  return response.data;
}
