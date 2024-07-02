import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuActions, Table } from '@/components/Elements/Table';
import { Img } from '@/components/Elements/Image';
import { userRoles } from '@/lib/authorization';

export const TablePartai = ({ tableData, handleDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.partai_logo,
        id: 'partai_logo',
        cell: (info) => (
          <Img src={info.getValue()} alt="Logo Partai" className="w-10 h-10 rounded-full" />
        ),
        header: () => 'Logo Partai',
      },
      {
        accessorFn: (row) => row.partai_label,
        id: 'partai_label',
        cell: (info) => info.getValue(),
        header: () => 'Partai',
      },
      {
        accessorFn: (row) => row.partai_nama,
        id: 'partai_nama',
        cell: (info) => info.getValue(),
        header: () => 'Nama Partai',
      },
      {
        accessorFn: (row) => row.partai_nomor,
        id: 'partai_nomor',
        cell: (info) => info.getValue(),
        header: () => 'No Partai',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return (
            <MenuActions
              editPath={`/data-master/partai/edit/${row.original.partai_id}`}
              onDelete={() => handleDelete(row.original.partai_id)}
              authRoles={{
                edit: userRoles.adminSistem,
                detail: userRoles.adminSistem,
              }}
            />
          );
        },
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TablePartai.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};
