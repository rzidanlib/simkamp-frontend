import { Routes, Route, Navigate } from "react-router-dom";

import { ArusKas } from "./ArusKas";
import { EditArusKas } from "./EditArusKas";
import { TambahArusKas } from "./TambahArusKas";

export const ArusKasRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ArusKas />} />
      <Route path="/add" element={<TambahArusKas />} />
      <Route path="/:id" element={<EditArusKas />} />
      <Route path="*" element={<Navigate to="/session/404" />} />
    </Routes>
  );
};
