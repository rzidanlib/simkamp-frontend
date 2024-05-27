import { Login } from '@/features/auth/pages/login';
import { AuthGuard } from './AuthGuard';

export const PublicRoutes = [
  {
    path: '/auth/login',
    element: <AuthGuard element={<Login />} />,
  },
];
