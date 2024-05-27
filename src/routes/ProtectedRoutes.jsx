import { Navigate } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';
import { AuthGuard } from './AuthGuard';

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');
const { ArusKasRoutes } = lazyImport(() => import('@/features/aruskas'), 'ArusKasRoutes');
const { LogistikRoutes } = lazyImport(() => import('@/features/logistik'), 'LogistikRoutes');
const { RelawanRoutes } = lazyImport(() => import('@/features/relawan'), 'RelawanRoutes');
const { CalonPemilihRoutes } = lazyImport(
  () => import('@/features/calon_pemilih'),
  'CalonPemilihRoutes'
);

const authRole = {
  all: ['admin', 'kandidat', 'relawan'],
  admin: ['admin'],
  kandidat: ['kandidat'],
  relawan: ['relawan'],
};

// export const ProtectedRoute = ({ isAllowed, children, redirectPath = '/' }) => {
//   const location = useLocation();

//   if (!isAllowed) {
//     return <Navigate to={redirectPath} state={{ from: location }} replace />;
//   }

//   return children ?? <Outlet />;
// };

export const ProtectedRoutes = [
  { path: '/dashboard', element: <AuthGuard element={<Dashboard />} roles={authRole.all} /> },
  {
    path: '/aruskas/*',
    element: <AuthGuard element={<ArusKasRoutes />} roles={authRole.kandidat} />,
  },
  { path: '/logistik/*', element: <AuthGuard element={<LogistikRoutes />} roles={authRole.all} /> },
  {
    path: '/relawan/*',
    element: <AuthGuard element={<RelawanRoutes />} roles={authRole.kandidat} />,
  },
  {
    path: '/calon-pemilih/*',
    element: <AuthGuard element={<CalonPemilihRoutes />} roles={authRole.kandidat} />,
  },

  { path: '/auth/*', element: <Navigate to="/dashboard" /> },
  { path: '*', element: <Navigate to="/session/404" /> },
];

// export const protectedRoute = () => {
//   return (
//   <Route >
//     <Route path='/dashboard' element={<Dashboard />} />
//     <Route path='/relawan/' element={<RelawanRoutes />} />
//   </Route>
//   )
// }
