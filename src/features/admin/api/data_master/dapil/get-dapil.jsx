import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useDapil = (dapilId = '') => {
  const queryKey = dapilId ? ['dapil', dapilId] : ['all-dapil'];
  const url = dapilId ? `/dapil/get/${dapilId}` : `/dapil/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
