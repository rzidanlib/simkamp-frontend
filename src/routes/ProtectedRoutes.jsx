import { Navigate, useLocation, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ isAllowed, children, redirectPath, requiredRoles, userRole }) => {
  const location = useLocation();

  if (!isAllowed && location.pathname === '/auth/login') {
    return <Navigate to="/dashboard" replace />;
  }

  if (!isAllowed) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  if (requiredRoles && !requiredRoles.some((role) => userRole.includes(role))) {
    // User does not have any of the required roles
    return <Navigate to="/session/404" replace />;
  }

  return children ?? <Outlet />;
};

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool,
  children: PropTypes.node,
  redirectPath: PropTypes.string,
  requiredRoles: PropTypes.array,
  userRole: PropTypes.string,
};
