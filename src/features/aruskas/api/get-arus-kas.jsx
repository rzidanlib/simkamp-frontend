import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useArusKas = (arusKasId = '') => {
  const queryKey = arusKasId ? ['aruskas', arusKasId] : ['all-aruskas'];
  const url = arusKasId ? `/aruskas/get/${arusKasId}` : `/aruskas/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useArusKasRelawan = (relawanId = '') => {
  const queryKey = relawanId ? ['aruskas-relawan', relawanId] : ['all-aruskas-relawan'];
  const url = relawanId ? `/aruskas/get-by-relawan/${relawanId}` : `/aruskas/get-by-relawan`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
