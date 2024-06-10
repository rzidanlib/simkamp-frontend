import API from '@/config/axios-config';
import { useQuery } from '@tanstack/react-query';

export const fecthUser = async () => {
  const response = await API.get('/users/get-user');
  if (response.status !== 200) {
    throw new Error('Failed to fetch user');
  }
  return response.data.data;
};

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fecthUser,
    onError: (error) => {
      console.error(error);
    },
  });
};
