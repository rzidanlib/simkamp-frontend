import * as React from 'react';

import { Link } from 'react-router-dom';

import { useRoles } from '@/features/admin/api/data_master/roles/get-roles';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { TableRoles } from '@/features/admin/components/TableRoles';
import { useDeleteRole } from '@/features/admin/api/data_master/roles/delete-role';

export const RolesPage = () => {
  const { data: roles, isLoading, isError } = useRoles();
  const { mutate: deleteRole } = useDeleteRole();

  const handleDelete = React.useCallback(
    (id) => {
      deleteRole(id);
    },
    [deleteRole]
  );

  return (
    <ContentLayout title="Roles">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Roles
          </Typography>
          <Link to={'/data-master/roles/tambah'}>
            <Button color="blue" size="md">
              Tambah Roles
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableRoles tableData={roles} handleDelete={handleDelete} isLoading={isLoading} />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
