import { getCurrentUser } from '@/lib/api/user/getCurrentUser';
import { useQuery } from 'react-query';

export const useGetUser = () => {
  return useQuery('username', getCurrentUser, {
    enabled: false,
    suspense: false,
    retry: false,
  });
};
