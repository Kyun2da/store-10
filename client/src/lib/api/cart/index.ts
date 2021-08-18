import client from '../client';

export const getCarts = async () => {
  const res = await client.get('/api/cart');
  return res.data;
};

export const deleteCart = async (ids: number[]) => {
  const res = await client.delete(
    `/api/cart?productIds=${JSON.stringify(ids)}`
  );
  return res.data;
};

export const postCart = async ({
  count,
  productId,
}: {
  count: undefined | number;
  productId: number;
}) => {
  const res = await client.post('/api/cart', {
    count: count || 1,
    productId,
  });
  return res.data;
};
