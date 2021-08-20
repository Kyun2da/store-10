import client from '../client';

export async function logout() {
  const response = await client.post('/auth/logout');
  return response.data;
}
