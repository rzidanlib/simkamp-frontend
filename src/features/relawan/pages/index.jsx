import { Routes, Route } from 'react-router-dom';
import { Relawan } from './Relawan';
import { TambahRelawan } from './TambahRelawan';

export const RelawanRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Relawan />} />
      <Route path="/tambah" element={<TambahRelawan />} />
    </Routes>
  );
};
