import { Navigate, Routes, Route } from 'react-router-dom';

import { RelawanPage } from './Relawan';
import { ManageRelawanPage } from './ManageRelawan';

export const RelawanRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<RelawanPage />} />
      <Route path="/tambah" element={<ManageRelawanPage />} />
      <Route path="/detail/:relawanId" element={<ManageRelawanPage />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
