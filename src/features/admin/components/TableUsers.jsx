import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';

export const TableUsers = ({ tableData, handleDelete }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.username,
        id: 'username',
        cell: (info) => info.getValue(),
        header: () => 'Username',
      },
      {
        accessorFn: (row) => row.nama_user,
        id: 'nama_user',
        cell: (info) => info.getValue(),
        header: () => 'Nama User',
      },
      {
        accessorFn: (row) => row.partai,
        id: 'partai',
        cell: (info) => info.getValue(),
        header: () => 'Partai',
      },
      {
        accessorFn: (row) => row.role,
        id: 'role',
        cell: (info) => info.getValue(),
        header: () => 'Role',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return (
            <MenuActions
              onDelete={() => handleDelete(row.original.id)}
              detailPath={`/manage-users/users/detail/${row.original.id}`}
            />
          );
        },
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} data={tableData} />;
};

TableUsers.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
};
