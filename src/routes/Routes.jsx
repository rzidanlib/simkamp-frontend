import { Route } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { lazyImport } from '@/utils/lazyImport';

const authRole = {
  all: ['admin-partai', 'administrator', 'kandidat', 'relawan'],
  userSimkamp: ['admin-partai', 'kandidat', 'relawan'],
  admin: ['admin-partai', 'administrator'],
  adminSistem: ['administrator'],
  adminPartai: ['admin-partai'],
  kandidat: ['kandidat'],
  relawan: ['relawan'],
};

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');
const { RelawanRoutes } = lazyImport(() => import('@/features/relawan'), 'RelawanRoutes');
const { ProfileRoutes } = lazyImport(() => import('@/features/profile'), 'ProfileRoutes');
const { UsersRoutes } = lazyImport(() => import('@/features/admin'), 'UsersRoutes');
const { DataMasterRoutes } = lazyImport(() => import('@/features/admin'), 'DataMasterRoutes');
const { KandidatRoutes } = lazyImport(() => import('@/features/kandidat'), 'KandidatRoutes');

export const MainRoutes = (
  <>
    <Route element={<AuthGuard requiredRoles={authRole.all} />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/relawan/*" element={<RelawanRoutes />} />
      <Route path="/profile/*" element={<ProfileRoutes />} />
    </Route>
    <Route element={<AuthGuard requiredRoles={authRole.adminSistem} />}>
      <Route path="/manage-users/*" element={<UsersRoutes />} />
      <Route path="/data-master/*" element={<DataMasterRoutes />} />
    </Route>
    <Route element={<AuthGuard requiredRoles={authRole.adminPartai} />}>
      <Route path="/kandidat/*" element={<KandidatRoutes />} />
    </Route>
  </>
);
