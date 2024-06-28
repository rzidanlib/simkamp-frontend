import { Routes, Route, Navigate } from 'react-router-dom';

import { ProfilePage } from './ProfilePage';

export const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
