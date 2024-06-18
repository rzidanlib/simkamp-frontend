import * as React from 'react';
import { Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const Label = React.forwardRef(({ label, className = '', htmlFor = '' }, ref) => {
  const handleClick = React.useCallback(() => {
    const element = document.getElementById(htmlFor);
    if (element) element.focus();
  }, [htmlFor]);

  return (
    <Typography
      variant="h6"
      color="blue-gray"
      className={`mb-5 cursor-pointer ${className}`}
      ref={ref}
      onClick={handleClick}
    >
      {label}
    </Typography>
  );
});
Label.displayName = 'Label';

export { Label };

Label.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};
