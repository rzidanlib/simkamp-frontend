import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useArusKasStatisticsRelawan = () => {
  return useQuery({
    queryKey: ['stats-aruskas'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/aruskas-relawan',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useArusKasStatisticsKandidat = () => {
  return useQuery({
    queryKey: ['stats-aruskas'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/aruskas-kandidat',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useArusKasStatisticsAdmin = () => {
  return useQuery({
    queryKey: ['stats-aruskas'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/aruskas-admin',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};
