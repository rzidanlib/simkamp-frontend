import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';
import { userRoles } from '@/lib/authorization';

export const TableKandidat = ({ tableData, handleDelete, isLoading, actions }) => {
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
        accessorFn: (row) => row.jenis_pemilihan,
        id: 'jenis_pemilihan',
        cell: (info) => info.getValue(),
        header: () => 'Jenis Pemilihan',
      },
      {
        accessorFn: (row) => row.posisi_calon_tetap,
        id: 'posisi_calon_tetap',
        cell: (info) => info.getValue(),
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
              detailPath={`${actions.detailPath}/detail/${row.original.kandidat_id}`}
              onDelete={() => handleDelete(row.original.kandidat_id)}
              authRoles={{
                detail: userRoles.admin,
                delete: userRoles.adminPartai,
              }}
            />
          );
        },
      },
    ],
    [handleDelete, actions.detailPath]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TableKandidat.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
  lookup: PropTypes.object,
  actions: PropTypes.object,
};
