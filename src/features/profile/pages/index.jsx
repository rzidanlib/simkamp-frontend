import { Routes, Route, Navigate } from 'react-router-dom';

import { Profile } from './Profile';

export const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Profile />} />
      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
