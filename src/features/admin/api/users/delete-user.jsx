import { deleteRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (userId) => deleteRequest({ url: `/users/delete/${userId}` }),
    onSuccess: (data) => {
      alert(data.message);
      window.location.href = '/manage-users/users';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
