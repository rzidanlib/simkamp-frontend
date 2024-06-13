import { Routes, Route } from 'react-router-dom';
import { ManageUsersPage } from './ManageUsers';
import { RolesUsersPage } from './RolesUsers';

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<ManageUsersPage />} />
      <Route path="/roles" element={<RolesUsersPage />} />
    </Routes>
  );
};
