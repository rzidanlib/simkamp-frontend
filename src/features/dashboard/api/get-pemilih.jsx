import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const usePemilihStatisticsRelawan = () => {
  return useQuery({
    queryKey: ['stats-pemilih-relawan'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/total-pemilih-relawan',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePemilihStatisticsKandidat = () => {
  return useQuery({
    queryKey: ['stats-pemilih-kandidat'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/total-pemilih-kandidat',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePemilihStatisticsAdmin = () => {
  return useQuery({
    queryKey: ['stats-pemilih-admin'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/total-pemilih-admin',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useTablePemilihRelawan = () => {
  return useQuery({
    queryKey: ['table-pemilih-dashboard-relawan'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/pemilih-relawan',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useTablePemilihKandidat = () => {
  return useQuery({
    queryKey: ['table-pemilih-dashboard-kandidat'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/pemilih-kandidat',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useTablePemilihAdmin = () => {
  return useQuery({
    queryKey: ['table-pemilih-dashboard-admin'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/pemilih-admin',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};
