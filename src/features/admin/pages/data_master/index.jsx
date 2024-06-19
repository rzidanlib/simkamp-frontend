import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { PartaiPage } from './Partai';
import { Navigate } from 'react-router-dom';

export const DataMasterRoutes = () => {
  return (
    <Routes>
      <Route path="/partai" element={<PartaiPage />} />
      {/* <Route path="/detail/:dataMasterId" element={<DetailDataMasterPage />} />
      <Route path="/partai/tambah" element={<AddDataMasterPage />} /> */}

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
