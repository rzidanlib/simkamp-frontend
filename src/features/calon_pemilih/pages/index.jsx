import { Navigate, Routes, Route } from 'react-router-dom';

import { CalonPemilihPage } from './CalonPemilih';
import { ManageCalonPemilihPage } from './ManageCalonPemilih';

export const CalonPemilihRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<CalonPemilihPage />} />
      <Route path="/tambah" element={<ManageCalonPemilihPage />} />
      <Route path="/edit/:pemilihId" element={<ManageCalonPemilihPage />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
