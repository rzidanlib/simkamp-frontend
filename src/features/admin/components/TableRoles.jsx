import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';
import { userRoles } from '@/lib/authorization';

export const TableRoles = ({ tableData, handleDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.role,
        id: 'role',
        cell: (info) => info.getValue(),
        header: () => 'Role',
      },
      {
        accessorFn: (row) => row.role_deskripsi,
        id: 'role_deskripsi',
        cell: (info) => info.getValue(),
        header: () => 'Deskripsi Role',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return (
            <MenuActions
              editPath={`/data-master/roles/edit/${row.original.role_id}`}
              onDelete={() => handleDelete(row.original.role_id)}
              authRoles={{
                edit: userRoles.adminSistem,
                detail: userRoles.adminSistem,
              }}
            />
          );
        },
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TableRoles.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};
