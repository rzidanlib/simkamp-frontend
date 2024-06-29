import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';

export const TablePemilih = ({ tableData, handleDelete, isLoading, lookup }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.calon_pemilih_nama,
        id: 'calon_pemilih_nama',
        cell: (info) => info.getValue(),
        header: () => 'Nama Calon Pemilih',
      },
      {
        accessorFn: (row) => row.calon_pemilih_no_telp,
        id: 'calon_pemilih_no_telp',
        cell: (info) => info.getValue(),
        header: () => 'No. Telepon',
      },
      {
        accessorFn: (row) => row.calon_pemilih_provinsi,
        id: 'calon_pemilih_provinsi',
        cell: (info) => lookup.provinsiLookup[info.getValue()] || '-',
        header: () => 'Provinsi',
      },
      {
        accessorFn: (row) => row.calon_pemilih_status,
        id: 'calon_pemilih_status',
        cell: (info) => info.getValue(),
        header: () => 'Status',
      },
      {
        id: 'action',
        cell: ({ row }) => (
          <MenuActions
            editPath={`/calon-pemilih/edit/${row.original.calon_pemilih_id}`}
            onDelete={() => handleDelete(row.original.calon_pemilih_id)}
          />
        ),
      },
    ],
    [handleDelete, lookup]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TablePemilih.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
  lookup: PropTypes.object,
};
