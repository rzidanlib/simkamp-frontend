import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const user = {
    isAuthenticated: true,
    roles: 'kandidat',
  };
  const location = useLocation();

  if (!user.isAuthenticated) {
    return (
      <Navigate to={`/auth/login?redirectTo=${encodeURIComponent(location.pathname)}`} replace />
    );
  }

  return children;
};
