import { Routes, Route } from 'react-router-dom';
import { Logistik } from './Logistik';

export const LogistikRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Logistik />} />
    </Routes>
  );
};
