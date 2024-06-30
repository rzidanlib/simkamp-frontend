import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/config/react-query-config';
import { postRequest } from '@/lib/apiHelper';

import localStorageHandler from '@/utils/localStorage';

export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials) =>
      postRequest({
        url: '/auth/login',
        data: credentials,
      }),
    onSuccess: (data) => {
      localStorageHandler.setItem('accessToken', data.accessToken);
      localStorageHandler.setItem('currentUser', data.user);
      // Invalidate user query to refetch data
      queryClient.invalidateQueries('current-user');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => postRequest({ url: '/auth/logout' }),
    onSuccess: () => {
      localStorageHandler.removeItem('accessToken');
      window.location.href = '/auth/login';
    },
    onError: (error) => {
      console.error(error);
      throw new Error('An unexpected error occurred during logout. Please try again later.');
    },
  });
};
