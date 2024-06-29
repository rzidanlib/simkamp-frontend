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

export const usePemilihKandidat = (kandidatId = '') => {
  const queryKey = kandidatId ? ['pemilih-kandidat', kandidatId] : ['all-pemilih-kandidat'];
  const url = kandidatId
    ? `/calon-pemilih/get-by-kandidat/${kandidatId}`
    : `/calon-pemilih/get-by-kandidat`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePemilihAdmin = (adminId = '') => {
  const queryKey = adminId ? ['pemilih-admin', adminId] : ['all-pemilih-admin'];
  const url = adminId ? `/calon-pemilih/get-by-admin/${adminId}` : `/calon-pemilih/get-by-admin`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
