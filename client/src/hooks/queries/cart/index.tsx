import { useQuery, useQueryClient, useMutation } from 'react-query';
import { getCarts, deleteCart, postCart } from '@/lib/api/cart';
import { ICarts } from '@/types';
import { notify } from '@/components/Shared/Toastify';

export const useGetCarts = () => {
  return useQuery<ICarts, Error>('carts', getCarts);
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteCart, {
    onSuccess: () => {
      notify('success', '성공! TODO: Toast');
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
      notify('success', '성공! TODO: Toast');
    },
    onError: () => {
      notify('error', '실패!');
    },
  });

  return mutation;
};
