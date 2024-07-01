import { Navigate, Routes, Route } from 'react-router-dom';

import { ArusKasPage } from './ArusKas';
import { ManageArusKas } from './ManageArusKas';

export const ArusKasRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ArusKasPage />} />
      <Route path="/tambah" element={<ManageArusKas />} />
      <Route path="/edit/:arusKasId" element={<ManageArusKas />} />
      <Route path="/detail/:arusKasId" element={<ManageArusKas />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
