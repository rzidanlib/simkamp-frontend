import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useLogistik = (logistikId = '') => {
  const queryKey = logistikId ? ['logistik', logistikId] : ['all-logistik'];
  const url = logistikId ? `/logistik/get/${logistikId}` : `/logistik/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useLogistikRelawan = (relawanId = '') => {
  const queryKey = relawanId ? ['logistik-relawan', relawanId] : ['all-logistik-relawan'];
  const url = relawanId ? `/logistik/get-by-relawan/${relawanId}` : `/logistik/get-by-relawan`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
