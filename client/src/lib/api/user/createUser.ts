import { ISignUpUser } from '@/types';
import client from '../client';

export async function createUser(data: ISignUpUser) {
  const response = await client.post<ISignUpUser>('/user', data);
  return response.data;
}
