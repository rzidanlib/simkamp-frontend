import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';
import { userRoles } from '@/lib/authorization';

export const TablePemilihan = ({ tableData, handleDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.jenis_pemilihan,
        id: 'jenis_pemilihan',
        cell: (info) => info.getValue(),
        header: () => 'Jenis Pemilihan',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return (
            <MenuActions
              editPath={`/data-master/jenis-pemilihan/edit/${row.original.jenis_pemilihan_id}`}
              onDelete={() => handleDelete(row.original.jenis_pemilihan_id)}
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

TablePemilihan.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};
