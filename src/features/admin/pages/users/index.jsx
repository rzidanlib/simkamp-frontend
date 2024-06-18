import { Navigate, Routes, Route } from 'react-router-dom';
import { ManageUsersPage } from './ManageUsers';
import { RolesUsersPage } from './RolesUsers';
import { DetailUserPage } from './DetailUser';
import { AddUsersPage } from './AddUsers';
import { AddRolesPage } from './AddRoles';

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<ManageUsersPage />} />
      <Route path="/users/detail/:userId" element={<DetailUserPage />} />
      <Route path="/users/tambah" element={<AddUsersPage />} />

      <Route path="/roles" element={<RolesUsersPage />} />
      <Route path="/roles/tambah" element={<AddRolesPage />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
