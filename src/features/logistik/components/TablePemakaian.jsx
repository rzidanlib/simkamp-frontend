import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';
import { userRoles } from '@/lib/authorization';

export const TablePemakaian = ({ tableData, handleDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.pemakaian_tanggal,
        id: 'pemakaian_tanggal',
        cell: (info) => info.getValue(),
        header: () => 'Tanggal Pemakaian',
      },
      {
        accessorFn: (row) => row.pemakaian_jumlah,
        id: 'pemakaian_jumlah',
        cell: (info) => info.getValue(),
        header: () => 'Jumlah Pemakaian',
      },
      {
        accessorFn: (row) => row.logistik_nama_atribut,
        id: 'logistik_nama_atribut,',
        cell: (info) => info.getValue(),
        header: () => 'Atribut Logistik',
      },
      {
        id: 'action',
        cell: ({ row }) => (
          <MenuActions
            detailPath={`/logistik/pemakaian/detail/${row.original.pemakaian_id}`}
            editPath={`/logistik/pemakaian/edit/${row.original.pemakaian_id}`}
            onDelete={() => handleDelete(row.original.pemakaian_id)}
            authRoles={{
              detail: userRoles.allUserSimkamp,
              edit: userRoles.relawan,
              delete: userRoles.relawan,
            }}
          />
        ),
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TablePemakaian.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};
