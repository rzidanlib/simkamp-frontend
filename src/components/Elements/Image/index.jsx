import * as React from 'react';
import PropTypes from 'prop-types';

import { env } from '@/config/env';

export const baseURL = `${env.BASE_URL}`;

export const Img = React.forwardRef(({ className, src, alt }, ref) => {
  return (
    <img
      className={`${className} object-contain object-center`}
      src={`${baseURL}/${src}`}
      alt={alt}
      ref={ref}
    />
  );
});

Img.displayName = 'Img';

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
