import { getRequest } from '@/lib/apiHelper';
import { useQuery } from '@tanstack/react-query';

export const useRoles = (roleId = '') => {
  const queryKey = roleId ? ['role', roleId] : ['all-roles'];
  const url = roleId ? `/roles/get/${roleId}` : `/roles/get-all`;

  return useQuery({
    queryKey,
    queryFn: () => getRequest({ url }),
    onError: (error) => {
      console.error(error);
    },
  });
};
