import client from '../client';

export async function githubLogin() {
  const response = await client.get('/api/auth');
  return response.data;
}
