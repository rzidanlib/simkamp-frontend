import { putRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (data) => putRequest({ url: '/users/update-current', data }),
    onSuccess: () => {
      window.location.href = '/dashboard';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
