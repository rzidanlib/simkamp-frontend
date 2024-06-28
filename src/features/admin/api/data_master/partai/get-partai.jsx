import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const usePartai = (partaiId = '') => {
  const queryKey = partaiId ? ['partai', partaiId] : ['all-partai'];
  const url = partaiId ? `/partai/get/${partaiId}` : `/partai/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
