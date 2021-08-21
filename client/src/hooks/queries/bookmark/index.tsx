import { notify } from '@/components/Shared/Toastify';
import { deleteBookmark } from '@/lib/api/bookmark/deleteBookmark';
import { getDetailBookmarkProducts } from '@/lib/api/bookmark/getDetailBookmarkProducts';
import { IBookmarkProduct } from '@/types';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useGetDetailBookmarkProducts = () => {
  return useQuery<IBookmarkProduct[], Error>(
    'bookmarkedProduct',
    getDetailBookmarkProducts
  );
};

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteBookmark, {
    onSuccess: () => {
      notify('success', '성공! TODO: Toast');
      queryClient.invalidateQueries('bookmarkedProduct');
    },
    onError: () => {
      console.log('에러');
    },
  });

  return mutation;
};
