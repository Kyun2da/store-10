import client from '../client';

export const getProductById = async (id: number) => {
  const res = await client.get(`/product/${id}`);
  return res.data;
};

export const getRecommandProducts = async () => {
  const res = await client.get(`/product/recommand?limit=8`);
  return res.data;
};

export const getRecentProducts = async () => {
  const res = await client.get(`/product?limit=8`);
  return res.data;
};

export const getBestProducts = async () => {
  const res = await client.get(`/product/best?limit=8`);
  return res.data;
};
