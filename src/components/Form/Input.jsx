import * as React from 'react';
import PropTypes from 'prop-types';
import { Input as InputElement } from '@material-tailwind/react';
import { Label } from '.';

const Input = React.forwardRef(({ id, label, error, className, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      {label && <Label label={label} htmlFor={id} />}
      <InputElement
        id={id}
        className={`!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 ${className}`}
        labelProps={{ className: 'hidden' }}
        size="lg"
        containerProps={{ className: 'min-w-[100px]' }}
        ref={ref}
        {...props}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export { Input };
