import { Navigate, Routes, Route } from 'react-router-dom';

import { KandidatPage } from './Kandidat';
import { ManageKandidatPage } from './ManageKandidat';

export const KandidatRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<KandidatPage />} />
      <Route path="/tambah" element={<ManageKandidatPage />} />
      <Route path="/edit/:kandidatId" element={<ManageKandidatPage />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
