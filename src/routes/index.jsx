import * as React from 'react';
import { Outlet, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';

import { lazyImport } from '@/utils/lazyImport';

import { MainLayout } from '@/components/Layout';
import { LoadingSpinner } from '@/components/Elements/Spinner';

import { NotFound } from '@/features/misc/ErrorPage';
import { Login } from '@/features/auth/pages/Login';
import { MainRoutes } from './Routes';

const { Landing } = lazyImport(() => import('@/features/misc/Landing'), 'Landing');

const App = () => {
  return (
    <MainLayout>
      <React.Suspense
        fallback={
          <div className="flex h-[calc(100vh-81px)] w-full items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        }
      >
        <Outlet />
      </React.Suspense>
    </MainLayout>
  );
};

const routes = createRoutesFromElements(
  <React.Fragment>
    <Route index element={<Landing />} />
    <Route path="/session/404" element={<NotFound />} />

    <Route element={<AuthGuard />}>
      <Route element={<App />}>{MainRoutes}</Route>
    </Route>

    <Route element={<AuthGuard guardType="unauthenticated" />}>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/login/admin" element={<Login />} />
    </Route>
  </React.Fragment>
);

export const AppRoutes = createBrowserRouter(routes);
