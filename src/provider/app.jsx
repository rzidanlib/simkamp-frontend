import * as React from 'react';

import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/config/react-query-config';

import { LayoutControllerProvider } from '@/context/LayoutContext';
import { ThemeProvider } from '@material-tailwind/react';
import { LoadingSpinner } from '@/components/Elements/Spinner';

import PropTypes from 'prop-types';

export const AppProvider = ({ children }) => {
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
              {/* <AuthProvider>{children}</AuthProvider> */}
              {children}
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
