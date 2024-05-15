import { Navigate } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';

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

export const protectedRoute = [
  { path: '/dashboard', element: <Dashboard />, roles: authRole.all },
  { path: '/aruskas/*', element: <ArusKasRoutes />, roles: authRole.kandidat },
  { path: '/logistik/*', element: <LogistikRoutes />, roles: authRole.all },
  { path: '/relawan/*', element: <RelawanRoutes />, roles: authRole.kandidat },
  { path: '/calon-pemilih/*', element: <CalonPemilihRoutes /> },

  { path: '/auth/*', element: <Navigate to="/dashboard" /> },
  { path: '*', element: <Navigate to={'/session/404'} /> },
];
