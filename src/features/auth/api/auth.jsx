import API from '@/config/axios-config';
import { queryClient } from '@/config/react-query-config';
import localStorageHandler from '@/utils/localStorage';
import { useMutation } from '@tanstack/react-query';

export const login = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);

    if (response.status !== 200) {
      throw new Error('Login failed');
    }

    return response.data.data;
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Login error:', error);
    // Throw a custom error or return a default error message
    throw new Error('An unexpected error occurred during login. Please try again later.');
  }
};

export const logout = async () => {
  const response = await API.post('/auth/logout');

  if (response.status !== 200) {
    throw new Error('Logout failed');
  }

  return response.data.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      localStorageHandler.setItem('accessToken', data.user.accessToken);
      // Invalidate user query to refetch data
      queryClient.invalidateQueries('user');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorageHandler.removeItem('accessToken');
      window.location.href = '/auth/login';
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
