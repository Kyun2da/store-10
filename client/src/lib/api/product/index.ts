import client from '../client';

export const getProductById = async (id: number) => {
  const res = await client.get(`/product/${id}`);
  return res.data;
};
