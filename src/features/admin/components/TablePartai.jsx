import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';

export const TablePartai = ({ tableData, handleDelete }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.logo,
        id: 'logo',
        cell: (info) => info.getValue(),
        header: () => 'Logo Partai',
      },
      {
        accessorFn: (row) => row.partai,
        id: 'partai',
        cell: (info) => info.getValue(),
        header: () => 'Partai',
      },
      {
        accessorFn: (row) => row.nama_partai,
        id: 'nama_partai',
        cell: (info) => info.getValue(),
        header: () => 'Nama Partai',
      },
      {
        accessorFn: (row) => row.jumlah_anggota,
        id: 'jumlah_anggota',
        cell: (info) => info.getValue(),
        header: () => 'Jumlah Anggota',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return <MenuActions onDelete={() => handleDelete(row.original.id)} />;
        },
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} data={tableData} />;
};

TablePartai.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
};
