import * as React from 'react';

import { Typography } from '@material-tailwind/react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

import PropTypes from 'prop-types';
import { flexRender } from '@tanstack/react-table';

const TableElement = React.forwardRef(({ className, ...props }, ref) => (
  <table className={className} ref={ref} {...props} />
));
TableElement.displayName = 'TableElemen';

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead className={className} ref={ref} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr ref={ref} className={className} {...props} />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th className={className} ref={ref} {...props} />
));
TableHead.displayName = 'TableHead';

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody className={className} ref={ref} {...props} />
));
TableBody.displayName = 'TableBody';

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td className={className} ref={ref} {...props} />
));
TableCell.displayName = 'TableCell';

const RowText = React.forwardRef(({ className, ...props }, ref) => (
  <Typography
    variant="small"
    color="blue-gray"
    className={`flex items-center justify-between gap-2 font-normal leading-none opacity-70 ${className}`}
    ref={ref}
    {...props}
  />
));
RowText.displayName = 'RowText';

const renderLoadingState = (columns) => {
  return (
    <TableRow>
      <TableCell
        colSpan={columns.length}
        className="px-4 py-2 border-b border-blue-gray-50/50 text-center"
      >
        Loading...
      </TableCell>
    </TableRow>
  );
};

const renderEmptyState = (columns) => {
  return (
    <TableRow>
      <TableCell
        colSpan={columns.length}
        className="px-4 py-2 border-b border-blue-gray-50/50 text-center"
      >
        Data kosong
      </TableCell>
    </TableRow>
  );
};

const renderRows = (rows) => {
  return rows.map((row, index) => {
    const classes = 'px-4 py-2 border-b border-blue-gray-50/50';
    return (
      <TableRow key={row.id} className={classes}>
        {row.getVisibleCells().map((cell) => {
          return (
            <TableCell
              key={cell.id}
              className={`${classes} ${cell.column.id === 'no' ? 'w-12' : ''}`}
            >
              {cell.column.id === 'no'
                ? index + 1
                : flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
};

export const Table = ({ columns, data, loading }) => {
  const table = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() });

  return (
    <TableElement className="mt-4 w-full min-w-max table-auto text-left">
      <TableHeader>
        <TableRow>
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className={`border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 ${
                  header.id === 'no' ? 'w-12' : ''
                }`}
              >
                <RowText>{flexRender(header.column.columnDef.header, header.getContext())}</RowText>
              </TableHead>
            ))
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading
          ? renderLoadingState(columns)
          : table.getRowModel().rows.length > 0
          ? renderRows(table.getRowModel().rows)
          : renderEmptyState(columns)}
      </TableBody>
    </TableElement>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  loading: PropTypes.bool,
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
