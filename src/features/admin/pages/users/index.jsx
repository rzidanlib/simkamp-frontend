import { Navigate, Routes, Route } from 'react-router-dom';

import { UsersPage } from './Users';
import { DetailUserPage } from './DetailUser';
import { AddUsersPage } from './AddUsers';

import { KandidatPage } from './Kandidat';
import { ManageKandidatPage } from '@/features/kandidat/pages/ManageKandidat';

import { RelawanPage } from './Relawan';
import { ManageRelawanPage } from '@/features/relawan/pages/ManageRelawan';

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/tambah" element={<AddUsersPage />} />
      <Route path="/users/detail/:userId" element={<DetailUserPage />} />

      <Route path="/kandidat" element={<KandidatPage />} />
      <Route path="/kandidat/detail/:kandidatId" element={<ManageKandidatPage />} />

      <Route path="/relawan" element={<RelawanPage />} />
      <Route path="/relawan/detail/:relawanId" element={<ManageRelawanPage />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
