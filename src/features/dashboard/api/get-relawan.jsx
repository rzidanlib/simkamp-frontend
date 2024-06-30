import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useRelawanStatisticsKandidat = () => {
  return useQuery({
    queryKey: ['stats-relawan'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/total-relawan-kandidat',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useRelawanStatisticsAdmin = () => {
  return useQuery({
    queryKey: ['stats-relawan'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/total-relawan-admin',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useTableRelawanKandidat = () => {
  return useQuery({
    queryKey: ['table-relawan-dashboard-kandidat'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/relawan-kandidat',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useTableRelawanAdmin = () => {
  return useQuery({
    queryKey: ['table-relawan-dashboard-admin'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/relawan-admin',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};
