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

export const useQuickCountKandidat = (kandidatId = '') => {
  const queryKey = kandidatId ? ['quick-count-kandidat', kandidatId] : ['all-quick-count-kandidat'];
  const url = kandidatId
    ? `/quick-count/get-by-kandidat/${kandidatId}`
    : `/quick-count/get-by-kandidat`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useQuickCountAdmin = (adminId = '') => {
  const queryKey = adminId ? ['quick-count-admin', adminId] : ['all-quick-count-admin'];
  const url = adminId ? `/quick-count/get-by-admin/${adminId}` : `/quick-count/get-by-admin`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
