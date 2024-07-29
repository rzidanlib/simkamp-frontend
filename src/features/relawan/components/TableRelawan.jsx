import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';
import { userRoles } from '@/lib/authorization';

export const TableRelawan = ({ tableData, handleDelete, isLoading, actions }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.relawan_nama,
        id: 'relawan_nama',
        cell: (info) => info.getValue(),
        header: () => 'Nama Relawan',
      },
      {
        accessorFn: (row) => row.relawan_no_telp,
        id: 'relawan_no_telp',
        cell: (info) => info.getValue(),
        header: () => 'No. Telepon',
      },
      {
        accessorFn: (row) => row.relawan_usia,
        id: 'relawan_usia',
        cell: (info) => info.getValue(),
        header: () => 'Usia',
      },
      {
        accessorFn: (row) => row.relawan_status,
        id: 'relawan_status',
        cell: (info) => info.getValue(),
        header: () => 'Status',
      },
      {
        id: 'action',
        cell: ({ row }) => (
          <MenuActions
            detailPath={`${actions.detailPath}/detail/${row.original.relawan_id}`}
            onDelete={() => handleDelete(row.original.relawan_id)}
            authRoles={{
              delete: userRoles.kandidat,
            }}
          />
        ),
      },
    ],
    [handleDelete, actions.detailPath]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TableRelawan.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
  lookup: PropTypes.object,
  actions: PropTypes.object,
};
