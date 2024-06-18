import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';

export const TableRoles = ({ tableData, handleDelete }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.role_name,
        id: 'role_name',
        cell: (info) => info.getValue(),
        header: () => 'Role',
      },
      {
        accessorFn: (row) => row.description,
        id: 'description',
        cell: (info) => info.getValue(),
        header: () => 'Deskripsi',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return <MenuActions onDelete={() => handleDelete(row.original.id)} />;
        },
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} data={tableData} />;
};

TableRoles.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
};
