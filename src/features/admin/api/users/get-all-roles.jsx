// fetch data untuk mendapatkan semua role dan gunakan hook useQuery

import API from '@/config/axios-config';
import { useQuery } from '@tanstack/react-query';

export const fetchRoles = async () => {
  try {
    const response = await API.get('/roles/get-all-roles');
    if (response.status !== 200) {
      throw new Error('Failed to fetch roles');
    }

    return response.data.data;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
};

export const useRoles = () => {
  return useQuery({
    queryKey: ['all-roles'],
    queryFn: fetchRoles,
    onError: (error) => {
      console.error(error);
    },
  });
};
