import { postRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (data) => postRequest({ url: '/users/create', data }),
    onSuccess: () => {
      window.location.href = '/manage-users/users';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
