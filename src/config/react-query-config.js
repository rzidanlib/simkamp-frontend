import { QueryClient } from '@tanstack/react-query';

export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 5,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});
