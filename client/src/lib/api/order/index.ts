import client from '../client';
import { IOrder, IOrderPost } from '@/types';

export const postOrder = async (order: IOrderPost) => {
  return await client.post<IOrderPost>('/order', order);
};

export const getOrder = async (id: number) => {
  return await client.get<IOrder>(`/order/${id}`);
};

export const getOrders = async (monthAgo: number) => {
  return await client.get<IOrder[]>(`/order?month_ago=${monthAgo}`);
};
