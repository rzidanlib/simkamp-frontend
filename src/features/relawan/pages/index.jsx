import { Routes, Route } from 'react-router-dom';
import { Relawan } from './Relawan';

export const RelawanRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Relawan />} />
    </Routes>
  );
};
