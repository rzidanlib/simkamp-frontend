import { Input } from '@material-tailwind/react';
import PropTypes from 'prop-types';

export const InputText = ({
  label,
  name,
  onChange,
  value,
  error,
  type = 'text',
  disabled,
  className,
  hidden,
}) => {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <Input
        type={type}
        label={label}
        name={name}
        onChange={onChange}
        value={value}
        error={error}
        // className={className}
        hidden={hidden}
        disabled={disabled}
      />
      {error ? <span className="text-red-500 text-sm ">{error}</span> : null}
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  hidden: PropTypes.bool,
};
