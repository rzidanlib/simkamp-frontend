import { useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import localStorageHandler from '@/utils/localStorage';

export const configureAuth = (config) => {
  const { userFn, userKey = ['authenticated-user'], loginFn, logoutFn } = config;

  const useUser = (options) => useQuery(userKey, userFn, options);

  const useLogin = (options) => {
    const queryClient = useQueryClient();

    const setUser = useCallback((data) => queryClient.setQueryData(userKey, data), [queryClient]);

    return useMutation({
      mutationFn: loginFn,
      ...options,
      onSuccess: (data, ...rest) => {
        setUser(data.user);
        if (data.user && data.user.accessToken) {
          localStorageHandler.setItem('accessToken', data.user.accessToken);
        }
        if (options && options.onSuccess) {
          options.onSuccess(data.user, ...rest);
        }
      },
    });
  };

  const useLogout = (options) => {
    const queryClient = useQueryClient();

    const setUser = useCallback((data) => queryClient.setQueryData(userKey, data), [queryClient]);

    return useMutation({
      mutationFn: logoutFn,
      ...options,
      onSuccess: (...args) => {
        localStorageHandler.removeItem('accessToken');
        setUser(null);
        if (options && options.onSuccess) {
          options.onSuccess(...args);
        }
      },
    });
  };

  const AuthLoader = ({
    children,
    renderLoading,
    renderUnauthenticated,
    renderError = (error) => <>{JSON.stringify(error)}</>,
  }) => {
    const { isSuccess, isFetched, status, data, error } = useUser();

    if (isSuccess) {
      if (renderUnauthenticated && !data) {
        return renderUnauthenticated();
      }
      return <>{children}</>;
    }

    if (!isFetched) {
      return renderLoading();
    }

    if (status === 'error') {
      return renderError(error);
    }

    return null;
  };

  return {
    useUser,
    useLogin,
    useLogout,
    AuthLoader,
  };
};
