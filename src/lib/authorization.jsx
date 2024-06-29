import * as React from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '@/features/auth/api/get-current-user';

// eslint-disable-next-line react-refresh/only-export-components
export const userRoles = {
  all: ['admin-partai', 'administrator', 'kandidat', 'relawan'],
  admin: ['admin-partai', 'administrator'],
  adminSistem: ['administrator'],
  adminPartai: ['admin-partai'],
  userSimkamp: ['admin-partai', 'kandidat'],
  allUserSimkamp: ['admin-partai', 'kandidat', 'relawan'],
  kandidat: ['kandidat'],
  relawan: ['relawan'],
};

const useAuthorization = () => {
  const { data: user } = useCurrentUser();

  const checkAccess = React.useCallback(
    ({ allowedRoles }) => {
      if (allowedRoles && allowedRoles.length > 0 && user) {
        return allowedRoles.includes(user.role);
      }
      return true;
    },
    [user]
  );

  return { checkAccess, role: user.role };
};

const Authorization = ({ policyCheck, allowedRoles, forbiddenFallback = null, children }) => {
  const { checkAccess } = useAuthorization();

  let canAccess = false;

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles });
  }

  if (typeof policyCheck !== 'undefined') {
    canAccess = policyCheck;
  }

  return <>{canAccess ? children : forbiddenFallback}</>;
};

Authorization.propTypes = {
  forbiddenFallback: PropTypes.node,
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
  policyCheck: PropTypes.bool,
};

export default Authorization;
