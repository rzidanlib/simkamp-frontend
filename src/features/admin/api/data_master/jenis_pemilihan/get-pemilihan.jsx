import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useJenisPemilihan = (jenisPemilihanId = '') => {
  const queryKey = jenisPemilihanId ? ['pemilihan', jenisPemilihanId] : ['all-pemilihan'];
  const url = jenisPemilihanId
    ? `/jenis-pemilihan/get/${jenisPemilihanId}`
    : `/jenis-pemilihan/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
