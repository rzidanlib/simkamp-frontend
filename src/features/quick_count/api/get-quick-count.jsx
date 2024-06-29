import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useQuickCount = (quickCountId = '') => {
  const queryKey = quickCountId ? ['quick-count', quickCountId] : ['all-quick-count'];
  const url = quickCountId ? `/quick-count/get/${quickCountId}` : `/quick-count/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useQuickCountRelawan = (relawanId = '') => {
  const queryKey = relawanId ? ['quick-count-relawan', relawanId] : ['all-quick-count-relawan'];
  const url = relawanId
    ? `/quick-count/get-by-relawan/${relawanId}`
    : `/quick-count/get-by-relawan`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
