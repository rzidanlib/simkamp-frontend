import API from '@/config/axios-config';
import { useUser } from './get-current-user';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/config/react-query-config';

export const updateUser = async (data) => {
  try {
    const response = await API.post('/users/update-user', data);

    if (response.status !== 200) {
      throw new Error('Update failed');
    }

    return response.data.data;
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Update error:', error);
    // Throw a custom error or return a default error message
    throw new Error('An unexpected error occurred during update. Please try again later.');
  }
};

export const useUpdateUser = () => {
  const { refetch: refecthUser } = useUser();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: async () => {
      // Invalidate user query to refetch data
      await queryClient.invalidateQueries('user');
      window.location.href = '/dashboard';
      refecthUser();
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
