import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const usePemakaian = (pemakaianId = '') => {
  const queryKey = pemakaianId ? ['pemakaian-logistik', pemakaianId] : ['all-pemakaian-logistik'];
  const url = pemakaianId
    ? `/pemakaian-logistik/get/${pemakaianId}`
    : `/pemakaian-logistik/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePemakaianRelawan = (relawanId = '') => {
  const queryKey = relawanId ? ['pemakaian-relawan', relawanId] : ['all-pemakaian-relawan'];
  const url = relawanId
    ? `/pemakaian-logistik/get-by-relawan/${relawanId}`
    : `/pemakaian-logistik/get-by-relawan`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePemakaianKandidat = (kandidatId = '') => {
  const queryKey = kandidatId ? ['pemakaian-kandidat', kandidatId] : ['all-pemakaian-kandidat'];
  const url = kandidatId
    ? `/pemakaian-logistik/get-by-kandidat/${kandidatId}`
    : `/pemakaian-logistik/get-by-kandidat`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePemakaianAdmin = (adminId = '') => {
  const queryKey = adminId ? ['pemakaian-admin', adminId] : ['all-pemakaian-admin'];
  const url = adminId
    ? `/pemakaian-logistik/get-by-admin/${adminId}`
    : `/pemakaian-logistik/get-by-admin`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
