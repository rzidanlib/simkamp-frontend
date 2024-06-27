import * as React from 'react';
import PropTypes from 'prop-types';

import { Select as SelectElement, Option as OptionElement } from '@material-tailwind/react';
import { Label } from './Label';

const Select = React.forwardRef(({ label, size = 'lg', options, error, ...props }, ref) => {
  const [selectedLabel, setSelectedLabel] = React.useState('');

  React.useEffect(() => {
    const selectedOption = options.find((option) => option.value === props.value);
    setSelectedLabel(selectedOption ? selectedOption.label : props.placeholder);
  }, [props.value, options, props.placeholder]);

  return (
    <div className="flex flex-col">
      {label && <Label className="capitalize" label={label} htmlFor={props.id} />}
      <SelectElement
        id={props.id}
        className="!border !border-gray-300 bg-white text-gray-900 shadow-md shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{ className: 'hidden' }}
        size={size}
        selected={() => selectedLabel}
        containerProps={{ className: 'min-w-[100px]' }}
        ref={ref}
        {...props}
      >
        <OptionElement value="" disabled>
          Pilih {label}
        </OptionElement>
        {options.map((option) => (
          <OptionElement key={option.key} value={option.value}>
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
  id: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};
