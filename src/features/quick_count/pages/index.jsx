import { Navigate, Routes, Route } from 'react-router-dom';

import { QuickCountPage } from './QuickCount';
import { ManageQuickCount } from './ManageQuickCount';

export const QuickCountRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<QuickCountPage />} />
      <Route path="/tambah" element={<ManageQuickCount />} />
      <Route path="/edit/:quickCountId" element={<ManageQuickCount />} />
      <Route path="/detail/:quickCountId" element={<ManageQuickCount />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
