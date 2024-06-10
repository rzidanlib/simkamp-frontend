import API from '@/config/axios-config';
import localStorageHandler from '@/utils/localStorage';
import { useMutation } from '@tanstack/react-query';

export const login = async (credentials) => {
  const response = await API.post('/auth/login', credentials);

  if (response.status !== 200) {
    throw new Error('Login failed');
  }

  return response.data.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorageHandler.setItem('token', data.user.accessToken);
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const logout = async () => {
  const response = await API.post('/auth/logout');

  if (response.status !== 200) {
    throw new Error('Logout failed');
  }

  return response.data.data;
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorageHandler.removeItem('token');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
