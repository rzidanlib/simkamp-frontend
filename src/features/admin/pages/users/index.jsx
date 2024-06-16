import { Navigate, Routes, Route } from 'react-router-dom';
import { ManageUsersPage } from './ManageUsers';
import { RolesUsersPage } from './RolesUsers';
import { DetailUserPage } from './DetailUser';
import { AddUsersPage } from './AddUsers';

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<ManageUsersPage />} />
      <Route path="/roles" element={<RolesUsersPage />} />
      <Route path="/users/detail/:userId" element={<DetailUserPage />} />
      <Route path="/users/tambah" element={<AddUsersPage />} />
      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
