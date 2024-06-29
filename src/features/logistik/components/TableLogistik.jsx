import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';

export const TableLogistik = ({ tableData, handleDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.logistik_nama_atribut,
        id: 'logistik_nama_atribut',
        cell: (info) => info.getValue(),
        header: () => 'Nama Atribut',
      },
      {
        accessorFn: (row) => row.logistik_satuan_unit,
        id: 'logistik_satuan_unit',
        cell: (info) => info.getValue(),
        header: () => 'Satuan Unit',
      },
      {
        accessorFn: (row) => row.logistik_stok,
        id: 'logistik_stok',
        cell: (info) => info.getValue(),
        header: () => 'Stok',
      },
      {
        accessorFn: (row) => row.logistik_total_harga,
        id: 'logistik_total_harga',
        cell: (info) => info.getValue(),
        header: () => 'Total Harga',
      },
      {
        id: 'action',
        cell: ({ row }) => (
          <MenuActions
            editPath={`/logistik/stok/edit/${row.original.logistik_id}`}
            onDelete={() => handleDelete(row.original.logistik_id)}
          />
        ),
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TableLogistik.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};
