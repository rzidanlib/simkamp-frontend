import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const usePemilih = (calonPemilihId = '') => {
  const queryKey = calonPemilihId ? ['calon-pemilih', calonPemilihId] : ['all-calon-pemilih'];
  const url = calonPemilihId ? `/calon-pemilih/get/${calonPemilihId}` : `/calon-pemilih/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePemilihRelawan = (relawanId = '') => {
  const queryKey = relawanId ? ['pemilih-relawan', relawanId] : ['all-pemilih-relawan'];
  const url = relawanId
    ? `/calon-pemilih/get-by-relawan/${relawanId}`
    : `/calon-pemilih/get-by-relawan`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
