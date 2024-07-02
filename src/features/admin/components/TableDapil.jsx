import * as React from 'react';
import PropTypes from 'prop-types';

import { MenuActions, Table } from '@/components/Elements/Table';
import { userRoles } from '@/lib/authorization';

export const TableDapil = ({ tableData, handleDelete, isLoading, provinsiLookup }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.dapil_nama,
        id: 'dapil_nama',
        cell: (info) => info.getValue(),
        header: () => 'Daerah Pilihan',
      },
      {
        accessorFn: (row) => row.dapil_provinsi,
        id: 'dapil_provinsi',
        cell: (info) => provinsiLookup[info.getValue()] || 'kosong',
        header: () => 'Daerah Pilihan Provinsi',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return (
            <MenuActions
              editPath={`/data-master/dapil/edit/${row.original.dapil_id}`}
              onDelete={() => handleDelete(row.original.dapil_id)}
              authRoles={{
                edit: userRoles.adminSistem,
                detail: userRoles.adminSistem,
              }}
            />
          );
        },
      },
    ],
    [handleDelete, provinsiLookup]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TableDapil.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
  provinsiLookup: PropTypes.object,
};
