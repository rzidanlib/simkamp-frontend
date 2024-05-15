import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Relawan } from './Relawan';
import { TambahRelawan } from './TambahRelawan';
import { EditRelawan } from './EditRelawan';
import { DetailRelawan } from './DetailRelawan';

export const RelawanRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Relawan />} />
      <Route path="/tambah" element={<TambahRelawan />} />
      <Route path="/edit" element={<Navigate to={'/relawan'} />} />
      <Route path="/edit/:id" element={<EditRelawan />} />
      <Route path="/detail" element={<Navigate to={'/relawan'} />} />
      <Route path="/detail/:id" element={<DetailRelawan />} />
    </Routes>
  );
};
