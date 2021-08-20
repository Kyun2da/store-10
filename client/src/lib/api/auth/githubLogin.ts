import client from '../client';

export async function githubLogin() {
  return await client.get<string>('/auth');
}
