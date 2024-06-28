import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const usePosisiCalon = (posisiCalonId = '') => {
  const queryKey = posisiCalonId ? ['posisi', posisiCalonId] : ['all-posisi-calon'];
  const url = posisiCalonId
    ? `/posisi-calon-tetap/get/${posisiCalonId}`
    : `/posisi-calon-tetap/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
