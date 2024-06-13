import API from '@/config/axios-config';
import { useQuery } from '@tanstack/react-query';

export const fetchUser = async () => {
  const response = await API.get('/users/get-user');
  if (response.status !== 200) {
    throw new Error('Failed to fetch user');
  }
  return response.data.data;
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
