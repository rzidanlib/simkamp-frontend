import * as React from 'react';
import PropTypes from 'prop-types';

import { usePartai } from '../api/data_master/partai/get-partai';
import { useRoles } from '../api/data_master/roles/get-roles';

import { MenuActions, Table } from '@/components/Elements/Table';

const getCustomLabel = (label) => {
  const customLabels = {
    'admin-partai': 'Admin Partai',
    administrator: 'Administrator',
    kandidat: 'Kandidat',
    relawan: 'Relawan',
  };

  return customLabels[label] || label;
};

const PartaiCell = ({ partaiId }) => {
  const { data: partaiData, isLoading } = usePartai(partaiId);

  if (isLoading) return <div>Loading...</div>;
  return <div>{partaiData && partaiData.partai_label ? partaiData.partai_label : '-----'}</div>;
};
PartaiCell.propTypes = { partaiId: PropTypes.number };

const RolesCell = ({ roleId }) => {
  const { data: rolesData, isLoading } = useRoles(roleId);

  if (isLoading) return <div>Loading...</div>;
  return <div>{rolesData && rolesData.role ? getCustomLabel(rolesData.role) : '-----'}</div>;
};
RolesCell.propTypes = { roleId: PropTypes.number };

export const TableUsers = ({ tableData, handleDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'no',
        cell: ({ row }) => row.index + 1,
        header: () => 'No',
      },
      {
        accessorFn: (row) => row.user_nama,
        id: 'user_nama',
        cell: (info) => info.getValue(),
        header: () => 'Nama',
      },
      {
        accessorFn: (row) => row.user_email,
        id: 'user_email',
        cell: (info) => info.getValue(),
        header: () => 'Email',
      },
      {
        accessorFn: (row) => row.user_partai_id,
        id: 'user_partai_id',
        cell: ({ getValue }) => <PartaiCell partaiId={getValue()} />,
        header: () => 'Partai',
      },
      {
        accessorFn: (row) => getCustomLabel(row.user_role_id),
        id: 'user_role_id',
        cell: ({ getValue }) => <RolesCell roleId={getValue()} />,
        header: () => 'Role',
      },
      {
        id: 'action',
        cell: ({ row }) => {
          return (
            <MenuActions
              onDelete={() => handleDelete(row.original.user_id)}
              detailPath={`/manage-users/users/detail/${row.original.user_id}`}
            />
          );
        },
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} data={tableData} loading={isLoading} />;
};

TableUsers.propTypes = {
  tableData: PropTypes.array,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};
