import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useKandidat = (kandidatId = '') => {
  const queryKey = kandidatId ? ['kandidat', kandidatId] : ['all-kandidat'];
  const url = kandidatId ? `/kandidat/get/${kandidatId}` : `/kandidat/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useKandidatAdmin = () => {
  const queryKey = ['kandidat-admin'];
  const url = `/kandidat/get-by-admin`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
