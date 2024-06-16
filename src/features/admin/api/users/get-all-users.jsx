import API from '@/config/axios-config';
import { useQuery } from '@tanstack/react-query';

export const fetchAllUsers = async () => {
  try {
    const response = await API.get('/users/get-all-users');

    if (response.status !== 200) {
      throw new Error('Failed to fetch users');
    }

    return response.data.data;
  } catch (error) {
    console.error('Fetch users error:', error);
    throw new Error('An unexpected error occurred while fetching users. Please try again later.');
  }
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['all-users'],
    queryFn: fetchAllUsers,
    onError: (error) => {
      console.error(error);
    },
  });
};
