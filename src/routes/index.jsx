import { Suspense } from 'react';
import { useRoutes, Outlet } from 'react-router-dom';

import { ProtectedRoutes } from './ProtectedRoutes';
import { PublicRoutes } from './PublicRoutes';
import { lazyImport } from '@/utils/lazyImport';

import { MainLayout } from '@/components/Layout';
import { LoadingSpinner } from '@/components/Elements/Spinner';

import { NotFound } from '@/features/misc/ErrorPage';
import { useAuth } from '@/provider/auth';

const { Landing } = lazyImport(() => import('@/features/misc/Landing'), 'Landing');

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="flex h-[calc(100vh-81px)] w-full items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const AppRoutes = () => {
  const { user } = useAuth();

  const commonRoutes = [
    { path: '/', element: <Landing /> },
    { path: '/session/404', element: <NotFound /> },
  ];

  const ProtectedAppRoute = [{ element: <App />, children: ProtectedRoutes }];

  const routes = user ? ProtectedAppRoute : PublicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
