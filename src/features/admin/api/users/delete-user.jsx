import API from '@/config/axios-config';
import { useMutation } from '@tanstack/react-query';

export const fetchDeleteUser = async (id) => {
  try {
    const response = await API.delete(`/users/remove-user/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: fetchDeleteUser,
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
