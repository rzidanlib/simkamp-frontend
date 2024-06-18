import * as React from 'react';
import PropTypes from 'prop-types';
import { Textarea as TextareaElement } from '@material-tailwind/react';
import { Label } from '.';

const Textarea = React.forwardRef(({ id, label, error, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      {label && <Label label={label} htmlFor={id} />}
      <div className="relative">
        <TextareaElement
          id={id}
          className="!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-[100px]' }}
          size="lg"
          rows={8}
          ref={ref}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};
