import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useAgama = (agamaId = '') => {
  const queryKey = agamaId ? ['agama', agamaId] : ['all-agama'];
  const url = agamaId ? `/agama/get/${agamaId}` : `/agama/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
