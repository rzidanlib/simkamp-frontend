import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';
import { userRoles } from '@/lib/authorization';

export const TableQuickCount = ({ tableData, handleDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.quick_count_jumlah_suara,
        id: 'quick_count_jumlah_suara',
        cell: (info) => info.getValue(),
        header: () => 'Jumlah Suara',
      },
      {
        accessorFn: (row) => row.quick_count_tps,
        id: 'quick_count_tps',
        cell: (info) => info.getValue(),
        header: () => 'TPS',
      },
      {
        id: 'action',
        cell: ({ row }) => (
          <MenuActions
            detailPath={`/quick-count/detail/${row.original.quick_count_id}`}
            editPath={`/quick-count/edit/${row.original.quick_count_id}`}
            onDelete={() => handleDelete(row.original.quick_count_id)}
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

TableQuickCount.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};
