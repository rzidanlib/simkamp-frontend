import API from '@/config/axios-config';
import { useQuery } from '@tanstack/react-query';

export const fetchUser = async () => {
  try {
    const response = await API.get('/users/get-user');

    if (response.status !== 200) {
      throw new Error('Failed to fetch user data');
    }

    return response.data.data;
  } catch (error) {
    console.error('Fetch user error:', error);
    throw new Error('An unexpected error occurred while fetching user data');
  }
};

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    onError: (error) => {
      console.error(error);
    },
  });
};
