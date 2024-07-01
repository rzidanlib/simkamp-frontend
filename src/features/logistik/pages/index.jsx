import { Navigate, Routes, Route } from 'react-router-dom';
import { LogistikPage } from './Logistik';
import { ManageLogistik } from './ManageLogistik';

import { PemakaianPage } from './Pemakaian';
import { ManagePemakaian } from './ManagePemakaian';

export const LogistikRoutes = () => {
  return (
    <Routes>
      <Route path="/stok" element={<LogistikPage />} />
      <Route path="/stok/tambah" element={<ManageLogistik />} />
      <Route path="/stok/edit/:logistikId" element={<ManageLogistik />} />
      <Route path="/stok/detail/:logistikId" element={<ManageLogistik />} />

      <Route path="/pemakaian" element={<PemakaianPage />} />
      <Route path="/pemakaian/tambah" element={<ManagePemakaian />} />
      <Route path="/pemakaian/edit/:pemakaianId" element={<ManagePemakaian />} />
      <Route path="/pemakaian/detail/:pemakaianId" element={<ManagePemakaian />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
