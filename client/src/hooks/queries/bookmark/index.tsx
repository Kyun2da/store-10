import { notify } from '@/components/Shared/Toastify';
import { addBookmark } from '@/lib/api/bookmark/addBookmark';
import { deleteBookmark } from '@/lib/api/bookmark/deleteBookmark';
import { getBookmarkProducts } from '@/lib/api/bookmark/getBookmarkProducts';
import { getDetailBookmarkProducts } from '@/lib/api/bookmark/getDetailBookmarkProducts';
import { IBookmarkProduct } from '@/types';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useGetDetailBookmarkProducts = () => {
  return useQuery<IBookmarkProduct[], Error>(
    'detailBookmarkedProduct',
    getDetailBookmarkProducts
  );
};

export const useGetBookmarkIds = () => {
  return useQuery<number[], Error>('bookmarkedProduct', getBookmarkProducts);
};

export const useAddBookmark = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addBookmark, {
    onSuccess: () => {
      notify('success', '해당 상품을 찜하였습니다.');
      queryClient.invalidateQueries('bookmarkedProduct');
    },
    onError: () => {
      notify('error', '알수 없는 이유로 해당 상품 찜에 실패하였습니다.');
    },
  });

  return mutation;
};

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteBookmark, {
    onSuccess: () => {
      notify('success', '해당 상품을 찜목록에서 삭제하였습니다.');
      queryClient.invalidateQueries('bookmarkedProduct');
    },
    onError: () => {
      notify(
        'error',
        '알수 없는 이유로 해당 상품을 찜목록에서 삭제에 실패하였습니다.'
      );
    },
  });

  return mutation;
};

export const useDeleteDetailBookmark = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteBookmark, {
    onSuccess: () => {
      notify('success', '해당 상품을 찜목록에서 삭제하였습니다.');
      queryClient.invalidateQueries('detailBookmarkedProduct');
    },
    onError: () => {
      notify(
        'error',
        '알수 없는 이유로 해당 상품을 찜목록에서 삭제에 실패하였습니다.'
      );
    },
  });

  return mutation;
};
