import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';

export const TableUsers = ({ tableData }) => {
  const columns = React.useMemo(
    () => [
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
          return <MenuActions detailPath={`/manage-users/users/detail/${row.original.id}`} />;
        },
      },
    ],
    []
  );

  return <Table columns={columns} data={tableData} />;
};

TableUsers.propTypes = {
  tableData: PropTypes.array,
};
