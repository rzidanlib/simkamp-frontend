import * as React from 'react';
import PropTypes from 'prop-types';

import { Select as SelectElement, Option as OptionElement } from '@material-tailwind/react';
import { Label } from '.';

const Select = React.forwardRef(({ id, label, size = 'lg', options, error, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      {label && <Label label={label} htmlFor={id} />}
      <SelectElement
        id={id}
        className="!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{ className: 'hidden' }}
        size={size}
        containerProps={{ className: 'min-w-[100px]' }}
        ref={ref}
        // selected={(element) =>
        //   element &&
        //   React.cloneElement(element, {
        //     disabled: true,
        //     className: 'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
        //   })
        // }
        {...props}
      >
        {options.map((option) => (
          <OptionElement key={option.value} value={option.value}>
            {option.label}
          </OptionElement>
        ))}
      </SelectElement>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
});
Select.displayName = 'Select';

export { Select };

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
};
