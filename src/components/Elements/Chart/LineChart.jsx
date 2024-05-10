import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { ChartBarIcon } from '@heroicons/react/24/outline';

const chartConfig = (data, settings) => ({
  type: 'line',
  height: 240,
  series: [
    {
      name: 'Sales',
      data: data,
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: '',
    },
    dataLabels: {
      enabled: false,
    },
    colors: [settings.color ? settings.color : '#020617'],
    stroke: {
      lineCap: 'round',
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
      categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: '#dddddd',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: 'dark',
    },
  },
});

export const LineChart = ({ title = '', settings = {}, footer }) => {
  const data = [50, 40, 300, 320, 500, 350, 200, 230, 500];

  return (
    <Card className=" overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex gap-4 rounded-none items-center"
      >
        <div className={`w-max rounded-lg bg-[${settings.color}] p-2 text-white`}>
          <ChartBarIcon className="h-5 w-5" />
        </div>
        <div>
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pt-0 pb-0">
        <Chart {...chartConfig(data, settings)} />
      </CardBody>
      {footer && (
        <CardFooter divider className="p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

LineChart.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.node,
  settings: PropTypes.object,
};
