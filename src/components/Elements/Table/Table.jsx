import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Typography, Chip } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { MenuActions } from './MenuActions';

export const Table = ({ TABLE_HEAD, TABLE_ROWS, actions }) => {
  return (
    <table className="mt-4 w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
            <Typography
              variant="small"
              color="blue-gray"
              className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
            >
              No.
            </Typography>
          </th>
          {TABLE_HEAD.map((head) => (
            <th
              key={head}
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 capitalize"
              >
                {head} <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                {/* {index !== TABLE_HEAD.length - 1 && (
                  <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                )} */}
              </Typography>
            </th>
          ))}
          <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
            <Typography
              variant="small"
              color="blue-gray"
              className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
            >
              Aksi
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map((data, rowIndex) => {
          // const isLast = rowIndex === TABLE_ROWS.length - 1;
          const classes = 'px-4 py-2 border-b border-blue-gray-50';

          return (
            <tr
              key={rowIndex}
              className="cursor-pointer transition-colors hover:bg-blue-gray-50/50"
            >
              <td className={classes}>
                <Typography color="blue-gray" className="font-normal">
                  {rowIndex + 1}
                </Typography>
              </td>
              {TABLE_HEAD.map((header, colIndex) => (
                <td className={classes} key={`${rowIndex}-${colIndex}`}>
                  {header === 'status' ? (
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={data.status}
                        color={getStatusColor(data.status)}
                      />
                    </div>
                  ) : (
                    <Typography color="blue-gray" className="font-normal">
                      {data[header]}
                    </Typography>
                  )}
                </td>
              ))}
              <td className="px-4 py-2">
                <MenuActions
                  onDelete={actions.onDelete}
                  editPath={actions.editPath && `${actions.editPath}/${data.kode}`}
                  detailPath={actions.detailPath && `${actions.detailPath}/${data.kode}`}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Aktif':
      return 'green'; // Light green for active
    case 'Tidak Aktif':
      return 'red'; // Light red for nonactive
    default:
      return '#FFFFFF'; // Default white background
  }
};

Table.propTypes = {
  TABLE_HEAD: PropTypes.array,
  TABLE_ROWS: PropTypes.array,
  actions: PropTypes.object,
};
