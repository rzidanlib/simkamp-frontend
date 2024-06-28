import { Routes, Route, Navigate } from 'react-router-dom';

import { RolesPage } from './roles/RolesUsers';
import { ManageRolePage } from './roles/ManageRole';

import { PartaiPage } from './partai/Partai';
import { ManagePartaiPage } from './partai/ManagePartai';

import { JenisPemilihanPage } from './jenis_pemilihan/JenisPemilihan';
import { ManagePemilihan } from './jenis_pemilihan/ManagePemilihan';

import { PosisiCalonPage } from './posisi_calon_tetap/PosisiCalon';
import { ManagePosisiCalon } from './posisi_calon_tetap/ManagePosisiCalon';

import { DapilPage } from './dapil/Dapil';
import { ManageDapil } from './dapil/ManageDapil';

import { AgamaPage } from './agama/Agama';
import { ManageAgama } from './agama/ManageAgama';

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

      {/* Jenis Pemilihan */}
      <Route path="/posisi-calon" element={<PosisiCalonPage />} />
      <Route path="/posisi-calon/tambah" element={<ManagePosisiCalon />} />
      <Route path="/posisi-calon/edit/:posisiCalonId" element={<ManagePosisiCalon />} />

      {/* Jenis Pemilihan */}
      <Route path="/dapil" element={<DapilPage />} />
      <Route path="/dapil/tambah" element={<ManageDapil />} />
      <Route path="/dapil/edit/:dapilId" element={<ManageDapil />} />

      {/* Agama */}
      <Route path="/agama" element={<AgamaPage />} />
      <Route path="/agama/tambah" element={<ManageAgama />} />
      <Route path="/agama/edit/:agamaId" element={<ManageAgama />} />

      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
