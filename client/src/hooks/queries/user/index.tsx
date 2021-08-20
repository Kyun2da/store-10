import { getCurrentUser } from '@/lib/api/user/getCurrentUser';
import { IUser } from '@/types';
import { useQuery } from 'react-query';

export const useGetUser = () => {
  return useQuery<IUser, Error>('username', getCurrentUser, {
    enabled: false,
    retry: false,
  });
};
