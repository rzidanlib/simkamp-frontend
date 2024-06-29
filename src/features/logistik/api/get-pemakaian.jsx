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
