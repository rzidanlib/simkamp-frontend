import { UserIcon } from '@heroicons/react/24/outline';
import { Card, CardHeader, CardBody, CardFooter, Typography } from '@material-tailwind/react';

import PropTypes from 'prop-types';

export const CardStatistik = ({ icon, color, value, title, loading, prefix = '', sufix = '' }) => {
  return (
    <Card>
      <CardHeader
        variant="gradient"
        color={color}
        floated={false}
        shadow={false}
        className="absolute grid h-12 w-12 place-items-center"
      >
        {icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {title}
        </Typography>
        <Typography variant="h4" color={color}>
          {loading ? 'Loading...' : value.currentvalue}
        </Typography>
      </CardBody>
      <CardFooter className="flex border-t border-blue-gray-50 p-4 capitalize">
        <Typography color={color} className="font-bold ">
          {loading
            ? 'Loading...'
            : value && value.newvalue !== null
            ? `${prefix} ${value.newvalue} ${sufix}`
            : ''}
        </Typography>
        {/* <Typography color="grey" className="ml-1 font-semibold">
          {value.description}
        </Typography> */}
      </CardFooter>
    </Card>
  );
};

CardStatistik.propTypes = {
  color: PropTypes.string,
  value: PropTypes.object,
  title: PropTypes.string,
  loading: PropTypes.bool,
  prefix: PropTypes.string,
  sufix: PropTypes.string,
  icon: PropTypes.node,
};
