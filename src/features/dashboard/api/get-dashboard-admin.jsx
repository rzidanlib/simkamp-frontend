import { useQuery } from '@tanstack/react-query';
import { getRequest } from '@/lib/apiHelper';

export const useDashboardAdmin = () => {
  return useQuery({
    queryKey: ['dashboard-admin'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/get',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};
