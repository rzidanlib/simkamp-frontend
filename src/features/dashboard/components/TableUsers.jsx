import PropTypes from 'prop-types';

import { Card, CardHeader, Typography, CardBody } from '@material-tailwind/react';

const iconColor = {
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
};

export const TableUsers = ({ title, icon, color, TABLE_ROW, TABLE_HEAD, loading }) => {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex gap-4 rounded-none items-center"
      >
        <div
          className={`w-max rounded-lg ${iconColor[color] || 'bg-blue-gray-500'} p-2 text-white`}
        >
          {icon}
        </div>
        <div>
          <Typography variant="h5" color="blue-gray">
            {title}
          </Typography>
          <Typography variant="small" color="blue-gray">
            Data yang disajikan adalah data terbaru.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="overflow-auto px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : TABLE_ROW.length === 0 ? (
              <tr>
                <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                  Data tidak ditemukan
                </td>
              </tr>
            ) : (
              TABLE_ROW.map(({ name, email, partai }, index) => {
                const isLast = index === TABLE_ROW.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Typography color="blue-gray" className="font-normal capitalize">
                          {email}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Typography color="blue-gray" className="font-normal capitalize">
                          {partai}
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

TableUsers.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  TABLE_ROW: PropTypes.array,
  TABLE_HEAD: PropTypes.array,
  loading: PropTypes.bool,
  color: PropTypes.string,
};
