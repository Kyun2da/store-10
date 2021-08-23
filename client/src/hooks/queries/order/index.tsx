import { useQuery, useMutation } from 'react-query';
import { getOrder, postOrder, getOrders } from '@/lib/api/order';
import { IOrder } from '@/types';
import { useHistory } from '@/lib/Router';

export const useGetOrder = (id: number) => {
  return useQuery<IOrder, Error>('order', () => getOrder(id));
};

export const usePostOrder = () => {
  const { historyPush } = useHistory();
  return useMutation(postOrder, {
    onSuccess(data) {
      historyPush(`/order/${data.id}`);
    },
  });
};

export const useGetOrders = (monthAgo: number) => {
  return useQuery<IOrder[], Error>(
    ['orders', monthAgo],
    () => getOrders(monthAgo),
    { keepPreviousData: true }
  );
};
