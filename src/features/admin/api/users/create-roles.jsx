import API from '@/config/axios-config';
import { useMutation } from '@tanstack/react-query';

export const createRoles = async (data) => {
  try {
    const response = await API.post('/roles/create', data);
    return response.data;
  } catch (error) {
    // console.log(error.response.data.errors);
    throw new Error(error.response.data.errors);
  }
};

export const useCreateRoles = () => {
  return useMutation({
    mutationFn: createRoles,
    onSuccess: () => {
      window.location.href = '/manage-users/roles';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
