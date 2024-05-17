import { Chip } from '@material-tailwind/react';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

// const chipVariants = {};

const ChipElement = forwardRef(({ className, ...props }, ref) => (
  <div className="w-max">
    <Chip variant="filled" size="md" className={className} ref={ref} {...props} />
  </div>
));
ChipElement.displayName = 'ChipElement';

export { ChipElement };

ChipElement.propTypes = {
  className: PropTypes.string,
};
