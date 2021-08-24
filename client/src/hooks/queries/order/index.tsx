import { useQuery, useMutation } from 'react-query';
import { getOrder, postOrder, getOrders, updateOrder } from '@/lib/api/order';
import { IOrder } from '@/types';
import { useHistory } from '@/lib/Router';

export const useGetOrder = (id: number) => {
  return useQuery<IOrder, Error>('order', () => getOrder(id), { retry: false });
};

export const usePostOrder = () => {
  const { historyPush } = useHistory();
  return useMutation(postOrder, {
    onSuccess(data) {
      historyPush(`/order/${data.id}`);
    },
  });
};

export const useGetOrders = (year: number | null) => {
  return useQuery<IOrder[], Error>(['orders', year], () => getOrders(year), {
    keepPreviousData: true,
  });
};

export const useUpdateOrder = () => {
  const { historyPush } = useHistory();
  return useMutation(updateOrder, {
    onSuccess(data) {
      historyPush(`/order/${data.id}/paid`);
    },
  });
};
