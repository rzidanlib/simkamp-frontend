import { Navigate, Routes, Route } from 'react-router-dom';

import { UsersPage } from './Users';
import { DetailUserPage } from './DetailUser';
import { AddUsersPage } from './AddUsers';

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/tambah" element={<AddUsersPage />} />
      <Route path="/users/detail/:userId" element={<DetailUserPage />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
