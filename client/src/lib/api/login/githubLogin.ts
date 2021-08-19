import client from '../client';

export async function githubLogin() {
  const response = await client.get('/auth');
  return response.data;
}
