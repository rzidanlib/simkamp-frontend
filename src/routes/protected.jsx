// import { Suspense } from "react";
import { Navigate } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';

// import { MainLayout } from "@/components/Layout";
// import { LoadingSpinner } from "@/components/Elements/Spinner";

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');
const { ArusKasRoutes } = lazyImport(() => import('@/features/aruskas'), 'ArusKasRoutes');
const { LogistikRoutes } = lazyImport(() => import('@/features/logistik'), 'LogistikRoutes');
const { RelawanRoutes } = lazyImport(() => import('@/features/relawan'), 'RelawanRoutes');
const { CalonPemilihRoutes } = lazyImport(
  () => import('@/features/calon_pemilih'),
  'CalonPemilihRoutes'
);

// eslint-disable-next-line react-refresh/only-export-components
// const App = () => {
//   return (
//     <MainLayout>
//       <Suspense
//         fallback={
//           <div className="flex h-screen w-screen items-center justify-center">
//             <LoadingSpinner size="xl" />
//           </div>
//         }
//       >
//         <Outlet />
//       </Suspense>
//     </MainLayout>
//   );
// };

// export const protectedRoute = [
//   {
//     element: <App />,
//     children: [
//       { path: "/dashboard", element: <Dashboard /> },
//       { path: "/aruskas/*", element: <ArusKasRoutes /> },
//       { path: "/logistik", element: <div>Logistik</div> },
//       { path: "/relawan", element: <div>Relawan</div> },
//       { path: "/calon-pemilih/*", element: <CalonPemilihRoutes /> },
//       { path: "*", element: <Navigate to={"/session/404"} /> },
//     ],
//   },
// ];

const authRole = {
  all: ['admin', 'kandidat', 'relawan'],
  admin: ['admin'],
  kandidat: ['kandidat'],
  relawan: ['relawan'],
};

export const protectedRoute = [
  { path: '/dashboard', element: <Dashboard />, roles: authRole.all },
  { path: '/aruskas/*', element: <ArusKasRoutes />, roles: authRole.kandidat },
  { path: '/logistik/*', element: <LogistikRoutes />, roles: authRole.all },
  { path: '/relawan/*', element: <RelawanRoutes />, roles: authRole.kandidat },
  { path: '/calon-pemilih/*', element: <CalonPemilihRoutes /> },

  { path: '/auth/*', element: <Navigate to="/dashboard" /> },
  { path: '*', element: <Navigate to={'/session/404'} /> },
];
