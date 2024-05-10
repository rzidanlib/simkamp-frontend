import { Spinner } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const sizes = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-16 w-16',
  xl: 'h-24 w-24',
};

const variants = {
  light: 'text-white',
  primary: 'text-blue-600',
  secondary: 'text-gray-900/50',
};

export const LoadingSpinner = ({ size = 'md', variant = 'primary' }) => {
  return <Spinner className={`${sizes[size]} ${variants[variant]}`} />;
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['light', 'primary', 'secondary']),
};
