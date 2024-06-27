import { Routes, Route, Navigate } from 'react-router-dom';
import { PartaiPage } from './Partai';
import { AddPartaiPage } from './AddPartai';

export const DataMasterRoutes = () => {
  return (
    <Routes>
      <Route path="/partai" element={<PartaiPage />} />
      <Route path="/partai/tambah" element={<AddPartaiPage />} />
      {/* <Route path="/detail/:dataMasterId" element={<DetailDataMasterPage />} /> */}

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
