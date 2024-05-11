import { UserIcon } from '@heroicons/react/24/outline';
import { Card, CardHeader, CardBody, CardFooter, Typography } from '@material-tailwind/react';

import PropTypes from 'prop-types';

export const CardStatistik = ({ color, title, value }) => {
  return (
    <Card>
      <CardHeader
        variant="gradient"
        color={color}
        floated={false}
        shadow={false}
        className="absolute grid h-12 w-12 place-items-center"
      >
        <UserIcon className="h-6 w-6" />
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {title}
        </Typography>
        <Typography variant="h4" color={color}>
          {value} <span className="text-blue-gray-400 text-sm">Orang</span>
        </Typography>
      </CardBody>
      <CardFooter className="border-t border-blue-gray-50 p-4">
        <Typography color={color} className="font-normal">
          <strong>
            +{value} <span className="text-blue-gray-400 text-sm">Orang dalam seminggu.</span>
          </strong>
        </Typography>
      </CardFooter>
    </Card>
  );
};

CardStatistik.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
};
