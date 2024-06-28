import { Routes, Route, Navigate } from 'react-router-dom';

import { RolesPage } from './roles/RolesUsers';
import { ManageRolePage } from './roles/ManageRole';

import { PartaiPage } from './partai/Partai';
import { ManagePartaiPage } from './partai/ManagePartai';

import { JenisPemilihanPage } from './jenis_pemilihan/JenisPemilihan';
import { ManagePemilihan } from './jenis_pemilihan/ManagePemilihan';

export const DataMasterRoutes = () => {
  return (
    <Routes>
      {/* Roles */}
      <Route path="/roles" element={<RolesPage />} />
      <Route path="/roles/tambah" element={<ManageRolePage />} />
      <Route path="/roles/edit/:roleId" element={<ManageRolePage />} />

      {/* Partai */}
      <Route path="/partai" element={<PartaiPage />} />
      <Route path="/partai/tambah" element={<ManagePartaiPage />} />
      <Route path="/partai/edit/:partaiId" element={<ManagePartaiPage />} />

      {/* Jenis Pemilihan */}
      <Route path="/jenis-pemilihan" element={<JenisPemilihanPage />} />
      <Route path="/jenis-pemilihan/tambah" element={<ManagePemilihan />} />
      <Route path="/jenis-pemilihan/edit/:jenisPemilihanId" element={<ManagePemilihan />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
