import { Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const TableElement = forwardRef(({ className, ...props }, ref) => (
  <table className={className} ref={ref} {...props} />
));
TableElement.displayName = 'TableElemen';

const TableHeader = forwardRef(({ className, ...props }, ref) => (
  <thead className={className} ref={ref} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableRow = forwardRef(({ className, ...props }, ref) => (
  <tr ref={ref} className={className} {...props} />
));
TableRow.displayName = 'TableRow';

const TableHead = forwardRef(({ className, ...props }, ref) => (
  <th className={className} ref={ref} {...props} />
));
TableHead.displayName = 'TableHead';

const TableBody = forwardRef(({ className, ...props }, ref) => (
  <tbody className={className} ref={ref} {...props} />
));
TableBody.displayName = 'TableBody';

const TableCell = forwardRef(({ className, ...props }, ref) => (
  <td className={className} ref={ref} {...props} />
));
TableCell.displayName = 'TableCell';

const RowText = forwardRef(({ className, ...props }, ref) => (
  <Typography
    variant="small"
    color="blue-gray"
    className={`flex items-center justify-between gap-2 font-normal leading-none opacity-70 ${className}`}
    ref={ref}
    {...props}
  />
));
RowText.displayName = 'RowText';

export const Table = ({ columns, data }) => {
  return (
    <TableElement className="mt-4 w-full min-w-max table-auto text-left">
      <TableHeader>
        <TableRow>
          <TableHead className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
            <RowText>No</RowText>
          </TableHead>
          {columns.map((column, index) => (
            <TableHead
              key={column.title + index}
              className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
            >
              <RowText>{column.title}</RowText>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((entry, entryIndex) => {
          const classes = 'px-4 py-2 border-b border-blue-gray-50/50';
          return (
            <TableRow key={entry?.id || entryIndex} className={classes}>
              <TableCell className={classes}>
                <RowText variant="paragraph">{entryIndex + 1}</RowText>
              </TableCell>
              {columns.map(({ Cell, field, title }, colIndex) => (
                <TableCell className={classes} key={title + colIndex}>
                  {Cell ? (
                    <Cell entry={entry} />
                  ) : (
                    <RowText variant="paragraph">{entry[field]}</RowText>
                  )}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </TableElement>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

TableElement.propTypes = {
  className: PropTypes.string,
};

TableHeader.propTypes = {
  className: PropTypes.string,
};

TableRow.propTypes = {
  className: PropTypes.string,
};

TableHead.propTypes = {
  className: PropTypes.string,
};

TableBody.propTypes = {
  className: PropTypes.string,
};

TableCell.propTypes = {
  className: PropTypes.string,
};

RowText.propTypes = {
  className: PropTypes.string,
};
