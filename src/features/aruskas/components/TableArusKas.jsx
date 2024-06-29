import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';

export const TableArusKas = ({ tableData, handleDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.aruskas_kategori,
        id: 'aruskas_kategori',
        cell: (info) => info.getValue(),
        header: () => 'Kategori',
      },
      {
        accessorFn: (row) => row.aruskas_jumlah,
        id: 'aruskas_jumlah',
        cell: (info) => info.getValue(),
        header: () => 'Jumlah',
      },
      {
        accessorFn: (row) => row.aruskas_tanggal,
        id: 'aruskas_tanggal',
        cell: (info) => info.getValue(),
        header: () => 'Tanggal',
      },
      {
        id: 'action',
        cell: ({ row }) => (
          <MenuActions
            editPath={`/aruskas/edit/${row.original.aruskas_id}`}
            onDelete={() => handleDelete(row.original.aruskas_id)}
          />
        ),
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TableArusKas.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
  lookup: PropTypes.object,
};
