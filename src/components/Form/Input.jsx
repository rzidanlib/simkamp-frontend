import * as React from 'react';
import PropTypes from 'prop-types';
import { Input, Typography } from '@material-tailwind/react';

const InputElement = React.forwardRef(({ classname, ...props }, ref) => {
  return (
    <Input
      className={`!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 ${classname}`}
      labelProps={{
        className: 'hidden',
      }}
      size="lg"
      containerProps={{ className: 'min-w-[100px]' }}
      ref={ref}
      {...props}
    />
  );
});
InputElement.displayName = 'InputElement';

const LabelElement = React.forwardRef(({ classname, ...props }, ref) => {
  return (
    <Typography
      variant="h6"
      color="blue-gray"
      className={`${classname} -mb-3`}
      ref={ref}
      {...props}
    />
  );
});
LabelElement.displayName = 'LabelElement';

const InputText = ({ labelName, labelProps, ...inputProps }) => {
  return (
    <>
      <LabelElement {...labelProps}>{labelName}</LabelElement>
      <InputElement {...inputProps} />
    </>
  );
};

export { InputText as Input };

InputElement.propTypes = {
  classname: PropTypes.string,
};
LabelElement.propTypes = {
  classname: PropTypes.string,
};
InputText.propTypes = {
  labelName: PropTypes.string,
  labelProps: PropTypes.object,
};
