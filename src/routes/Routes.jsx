import { Route } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { lazyImport } from '@/utils/lazyImport';

const authRole = {
  all: ['administrator', 'kandidat', 'relawan'],
  admin: ['administrator'],
  adminPartai: ['admin partai'],
  kandidat: ['kandidat'],
  relawan: ['relawan'],
};

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');
const { RelawanRoutes } = lazyImport(() => import('@/features/relawan'), 'RelawanRoutes');
const { ProfileRoutes } = lazyImport(() => import('@/features/profile'), 'ProfileRoutes');
const { UsersRoutes } = lazyImport(() => import('@/features/admin'), 'UsersRoutes');
const { DataMasterRoutes } = lazyImport(() => import('@/features/admin'), 'DataMasterRoutes');
// const { ArusKasRoutes } = lazyImport(() => import('@/features/aruskas'), 'ArusKasRoutes');
// const { LogistikRoutes } = lazyImport(() => import('@/features/logistik'), 'LogistikRoutes');
// const { CalonPemilihRoutes } = lazyImport(
//   () => import('@/features/calon_pemilih'),
//   'CalonPemilihRoutes'
// );

// export const ProtectedRoutes = [
//   { path: '/dashboard', element: <AuthGuard element={<Dashboard />} roles={authRole.all} /> },
//   {
//     path: '/aruskas/*',
//     element: <AuthGuard element={<ArusKasRoutes />} roles={authRole.kandidat} />,
//   },
//   {
//     path: '/logistik/*',
//     element: <AuthGuard element={<LogistikRoutes />} roles={authRole.relawan} />,
//   },
//   {
//     path: '/relawan/*',
//     element: <AuthGuard element={<RelawanRoutes />} roles={authRole.kandidat} />,
//   },
//   {
//     path: '/calon-pemilih/*',
//     element: <AuthGuard element={<CalonPemilihRoutes />} roles={authRole.kandidat} />,
//   },

//   { path: '/auth/*', element: <Navigate to="/dashboard" /> },
//   { path: '*', element: <Navigate to="/session/404" /> },
// ];

export const MainRoutes = (
  <>
    <Route element={<AuthGuard requiredRoles={authRole.all} />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/relawan/*" element={<RelawanRoutes />} />
      <Route path="/profile/*" element={<ProfileRoutes />} />
    </Route>
    <Route element={<AuthGuard requiredRoles={authRole.admin} />}>
      <Route path="/manage-users/*" element={<UsersRoutes />} />
      <Route path="/data-master/*" element={<DataMasterRoutes />} />
    </Route>
  </>
);
