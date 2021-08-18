import { useQuery, useQueryClient, useMutation } from 'react-query';
import { getCarts, deleteCart, postCart } from '@/lib/api/cart';
import { ICart } from '@/types';

export const useGetCarts = () => {
  return useQuery<ICart[], Error>('carts', getCarts);
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteCart, {
    onSuccess: () => {
      alert('성공! TODO: Toast');
    },
    onError: () => {
      queryClient.invalidateQueries('carts');
    },
  });

  return mutation;
};

export const usePostCart = () => {
  const mutation = useMutation(postCart, {
    onSuccess: () => {
      alert('성공! TODO: Toast');
    },
    onError: () => {
      alert('실패!');
    },
  });

  return mutation;
};
