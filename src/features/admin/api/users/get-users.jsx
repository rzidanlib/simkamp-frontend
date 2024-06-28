import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useUsers = (userId = '') => {
  const queryKey = userId ? ['users', userId] : ['all-users'];
  const url = userId ? `/users/get/${userId}` : `/users/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
