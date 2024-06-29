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

export const useLogistikKandidat = (kandidatId = '') => {
  const queryKey = kandidatId ? ['logistik-kandidat', kandidatId] : ['all-logistik-kandidat'];
  const url = kandidatId ? `/logistik/get-by-kandidat/${kandidatId}` : `/logistik/get-by-kandidat`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useLogistikAdmin = (adminId = '') => {
  const queryKey = adminId ? ['logistik-admin', adminId] : ['all-logistik-admin'];
  const url = adminId ? `/logistik/get-by-admin/${adminId}` : `/logistik/get-by-admin`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
