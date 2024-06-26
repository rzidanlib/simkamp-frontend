import { Route } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { lazyImport } from '@/utils/lazyImport';

const authRole = {
  all: ['admin-partai', 'administrator', 'kandidat', 'relawan'],
  admin: ['admin-partai', 'administrator'],
  adminSistem: ['administrator'],
  adminPartai: ['admin-partai'],
  userSimkamp: ['admin-partai', 'kandidat'],
  allUserSimkamp: ['admin-partai', 'kandidat', 'relawan'],
  kandidat: ['kandidat'],
  relawan: ['relawan'],
};

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');
const { ProfileRoutes } = lazyImport(() => import('@/features/profile'), 'ProfileRoutes');
const { UsersRoutes } = lazyImport(() => import('@/features/admin'), 'UsersRoutes');
const { DataMasterRoutes } = lazyImport(() => import('@/features/admin'), 'DataMasterRoutes');
const { KandidatRoutes } = lazyImport(() => import('@/features/kandidat'), 'KandidatRoutes');
const { RelawanRoutes } = lazyImport(() => import('@/features/relawan'), 'RelawanRoutes');
const { CalonPemilihRoutes } = lazyImport(
  () => import('@/features/calon_pemilih'),
  'CalonPemilihRoutes'
);
const { ArusKasRoutes } = lazyImport(() => import('@/features/aruskas'), 'ArusKasRoutes');
const { LogistikRoutes } = lazyImport(() => import('@/features/logistik'), 'LogistikRoutes');
const { QuickCountRoutes } = lazyImport(() => import('@/features/quick_count'), 'QuickCountRoutes');

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
    <Route element={<AuthGuard requiredRoles={authRole.userSimkamp} />}>
      <Route path="/relawan/*" element={<RelawanRoutes />} />
    </Route>
    <Route element={<AuthGuard requiredRoles={authRole.allUserSimkamp} />}>
      <Route path="/calon-pemilih/*" element={<CalonPemilihRoutes />} />
      <Route path="/aruskas/*" element={<ArusKasRoutes />} />
      <Route path="/logistik/*" element={<LogistikRoutes />} />
      <Route path="/quick-count/*" element={<QuickCountRoutes />} />
    </Route>
  </>
);
