import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';

export const TableKandidat = ({ tableData, handleDelete, isLoading, lookup }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.kandidat_nama,
        id: 'kandidat_nama',
        cell: (info) => info.getValue(),
        header: () => 'Nama',
      },
      {
        accessorFn: (row) => row.kandidat_dapil_id,
        id: 'kandidat_dapil_id',
        cell: (info) => lookup.dapilLookup[info.getValue()],
        header: () => 'Dapil',
      },
      {
        accessorFn: (row) => row.kandidat_jenis_pemilihan_id,
        id: 'kandidat_jenis_pemilihan_id',
        cell: (info) => lookup.jenisPemilihanLookup[info.getValue()],
        header: () => 'Jenis Pemilihan',
      },
      {
        accessorFn: (row) => row.kandidat_posisi_calon_tetap_id,
        id: 'kandidat_posisi_calon_tetap_id',
        cell: (info) => lookup.posisiCalonLookup[info.getValue()],
        header: () => 'Posisi Calon Tetap',
      },
      {
        accessorFn: (row) => row.kandidat_nomor_urut,
        id: 'kandidat_nomor_urut',
        cell: (info) => info.getValue(),
        header: () => 'Nomor Urut',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return (
            <MenuActions
              editPath={`/kandidat/edit/${row.original.kandidat_id}`}
              onDelete={() => handleDelete(row.original.kandidat_id)}
            />
          );
        },
      },
    ],
    [handleDelete, lookup]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TableKandidat.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
  lookup: PropTypes.object,
};
