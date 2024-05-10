import { Routes, Route } from "react-router-dom";

import { CalonPemilih } from "./CalonPemilih";
import { EditCalonPemilih } from "./EditCalonPemilih";
import { TambahCalonPemilih } from "./TambahCalonPemilih";
import { Navigate } from "react-router-dom";

export const CalonPemilihRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<CalonPemilih />} />
      <Route path="*" element={<Navigate to="/session/404" />} />
      <Route path="/add" element={<TambahCalonPemilih />} />
      <Route path="/:id" element={<EditCalonPemilih />} />
    </Routes>
  );
};
