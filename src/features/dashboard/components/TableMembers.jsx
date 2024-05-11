import { Card, CardHeader, Avatar, Typography, CardBody } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const TABLE_HEAD = ['Member', 'Tanggal'];

export const TableMembers = ({ title, icon, data }) => {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex gap-4 rounded-none items-center"
      >
        <div
          className={`w-max rounded-lg ${
            title === 'Data Relawan' ? 'bg-green-500' : 'bg-red-500'
          } p-2 text-white`}
        >
          {icon}
        </div>
        <div>
          <Typography variant="h4" color="blue-gray">
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
            {data.map(({ img, name, date }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={img} alt={name} size="sm" />
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {date}
                      </Typography>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

TableMembers.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  data: PropTypes.array,
};
