import { useAuth } from '@/provider/auth';
import { Outlet, Navigate } from 'react-router-dom';

// export const AuthGuard = ({ roles, children }) => {
//   const { user } = useAuth();

//   if (!user.isAuthenticated) {
//     return <Navigate to="/auth/login" />;
//   }

//   if (roles && !roles.includes(user.roles)) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return children ?? <Outlet />;
// };

export const AuthGuard = ({ element, roles }) => {
  const { user } = useAuth(); // Ambil status autentikasi dan informasi pengguna

  // Jika pengguna belum terautentikasi, arahkan ke halaman login
  if (!user.isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  // Jika roles tidak didefinisikan atau pengguna memiliki peran yang sesuai, kembalikan elemen rute
  if (!roles || roles.includes(user.roles)) {
    return element;
  }

  // Jika pengguna tidak memiliki peran yang diperlukan, arahkan ke halaman tanpa izin
  return <Navigate to="/dashboard" />;
};
