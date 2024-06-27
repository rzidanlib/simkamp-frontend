import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['current-user'],
    queryFn: () =>
      getRequest({
        url: '/auth/get-current',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};
