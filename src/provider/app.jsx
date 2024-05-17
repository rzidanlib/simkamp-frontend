import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { LayoutControllerProvider } from '@/context/LayoutContext';
import { ThemeProvider } from '@material-tailwind/react';
import { LoadingSpinner } from '@/components/Elements/Spinner';

import { queryConfig } from '@/lib/react-query';

import PropTypes from 'prop-types';

export const AppProvider = ({ children }) => {
  const [queryClient] = React.useState(() => {
    return new QueryClient({
      defaultOptions: queryConfig,
    });
  });

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <LoadingSpinner size="xl" />
        </div>
      }
    >
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <LayoutControllerProvider>
              <Router>{children}</Router>
            </LayoutControllerProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.Suspense>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
