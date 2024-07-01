import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useTotalLogistikRelawan = () => {
  return useQuery({
    queryKey: ['total-logistik-relawan'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/total-logistik-relawan',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useTotalLogistikKandidat = () => {
  return useQuery({
    queryKey: ['total-logistik-kandidat'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/total-logistik-kandidat',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useTotalLogistikAdmin = () => {
  return useQuery({
    queryKey: ['total-logistik-admin'],
    queryFn: () =>
      getRequest({
        url: '/dashboard/total-logistik-admin',
      }),
    onError: (error) => {
      console.error(error);
    },
  });
};
