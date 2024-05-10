import { Suspense } from 'react';
import { useRoutes, Outlet } from 'react-router-dom';

import { protectedRoute } from './protected';
import { publicRoute } from './public';
import { lazyImport } from '@/utils/lazyImport';

import { MainLayout } from '@/components/Layout';
import { LoadingSpinner } from '@/components/Elements/Spinner';

import { NotFound } from '@/features/misc/ErrorPage';

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

// const authorizedRoutes = (userRole) => {
//   return protectedRoute.filter((route) => {
//     if (!route.authorize) {
//       return true;
//     }

//     return route.authorize.some((role) => role.includes(userRole));
//   });
// };

export const AppRoutes = () => {
  const user = {
    isAuthenticated: true,
    roles: 'relawan',
  };

  const commonRoutes = [
    { path: '/', element: <Landing /> },
    { path: '/session/404', element: <NotFound /> },
  ];

  const protectedAppRoute = [{ element: <App />, children: protectedRoute }];

  const routes = user ? protectedAppRoute : publicRoute;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
