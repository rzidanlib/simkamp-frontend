import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';
import { userRoles } from '@/lib/authorization';

export const TableAgama = ({ tableData, handleDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.agama,
        id: 'agama',
        cell: (info) => info.getValue(),
        header: () => 'Agama',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return (
            <MenuActions
              editPath={`/data-master/agama/edit/${row.original.agama_id}`}
              onDelete={() => handleDelete(row.original.agama_id)}
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

TableAgama.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};
