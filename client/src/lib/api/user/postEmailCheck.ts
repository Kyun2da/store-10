import client from '../client';

export async function postEmailCheck(user_id: string) {
  const response = await client.post('/user/check', { user_id });
  return response.data;
}
