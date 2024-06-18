import API from '@/config/axios-config';
import { useMutation } from '@tanstack/react-query';

export const createUser = async (data) => {
  try {
    const response = await API.post('/users/create', data);
    return response.data;
  } catch (error) {
    // console.log(error.response.data.errors);
    throw new Error(error.response.data.errors);
  }
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      window.location.href = '/dashboard';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
