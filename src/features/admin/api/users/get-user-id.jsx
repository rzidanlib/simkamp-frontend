import API from '@/config/axios-config';
import { useQuery } from '@tanstack/react-query';

export const fetchUserById = async (userId) => {
  try {
    const response = await API.get(`/users/get-user/${userId}`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch users');
    }

    return response.data.data;
  } catch (error) {
    console.error('Fetch users error:', error);
    throw new Error('An unexpected error occurred while fetching users. Please try again later.');
  }
};

export const useUserById = (userId) => {
  return useQuery({
    queryKey: ['userById', userId],
    queryFn: () => fetchUserById(userId),
    onError: (error) => {
      console.error(error);
    },
  });
};
