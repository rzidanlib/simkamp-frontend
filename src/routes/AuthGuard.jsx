import PropTypes from 'prop-types';

import { ProtectedRoute } from './ProtectedRoutes';
import { LoadingSpinner } from '@/components/Elements/Spinner';

import { useCurrentUser } from '@/features/auth/api/get-current-user';

export const AuthGuard = ({
  redirectPath = '/auth/login',
  guardType = 'authenticated',
  ...props
}) => {
  const { data, isLoading } = useCurrentUser();
  const userRole = data ? data.role : null;
  const isAllowed = guardType === 'authenticated' ? !!data : !data;

  if (isLoading) {
    return (
      <div className={`flex h-screen w-screen items-center justify-center`}>
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  return (
    <ProtectedRoute
      redirectPath={redirectPath}
      isAllowed={isAllowed}
      userRole={userRole}
      {...props}
    />
  );
};

AuthGuard.propTypes = {
  redirectPath: PropTypes.string,
  guardType: PropTypes.oneOf(['authenticated', 'unauthenticated']),
};
