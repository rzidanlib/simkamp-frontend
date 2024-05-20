import { ChartBarIcon } from '@heroicons/react/24/outline';
import { Typography, Card, CardHeader, CardBody } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const iconBase = 'w-max rounded-lg p-2 text-white';
const iconColor = {
  red: 'bg-red-500',
  green: 'bg-green-500',
};

export const CardCharts = ({ title, color, children }) => {
  return (
    <Card className="overflow-hidden flex-1">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex gap-4 rounded-none items-center"
      >
        <div className={clsx(iconBase, iconColor[color])}>
          <ChartBarIcon className="h-5 w-5" />
        </div>
        <div>
          <Typography variant="h5" color="blue-gray">
            {title}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pt-0 pb-0">{children}</CardBody>
    </Card>
  );
};

CardCharts.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};
