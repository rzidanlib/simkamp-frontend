import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useRelawan = (relawanId = '') => {
  const queryKey = relawanId ? ['relawan', relawanId] : ['all-relawan'];
  const url = relawanId ? `/relawan/get/${relawanId}` : `/relawan/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useRelawanKandidat = (kandidatId = '') => {
  const queryKey = kandidatId ? ['relawan-kandidat', kandidatId] : ['all-relawan-kandidat'];
  const url = kandidatId ? `/relawan/get-by-kandidat/${kandidatId}` : `/relawan/get-by-kandidat`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
