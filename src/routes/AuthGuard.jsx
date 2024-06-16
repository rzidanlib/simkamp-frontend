import PropTypes from 'prop-types';

import { useUser } from '@/features/auth/api/get-user';
import { ProtectedRoute } from './ProtectedRoutes';
import { LoadingSpinner } from '@/components/Elements/Spinner';

const AuthGuard = ({ redirectPath = '/auth/login', guardType = 'authenticated', ...props }) => {
  const { data, isLoading } = useUser();
  const isAllowed = guardType === 'authenticated' ? !!data : !data;
  const userRole = data && data?.user ? data?.user?.role : null;

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

export { AuthGuard };

AuthGuard.propTypes = {
  redirectPath: PropTypes.string,
  guardType: PropTypes.oneOf(['authenticated', 'unauthenticated']),
};
