import * as React from 'react';
import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { TableRoles } from '../../components/TableRoles';
import { useRoles } from '../../api/users/get-all-roles';
import { useDeleteRole } from '../../api/users/delete-role';

export const RolesUsersPage = () => {
  const { data, isLoading, isError } = useRoles();
  const deleteRoleMutation = useDeleteRole();

  const handleDelete = React.useCallback(
    (id) => {
      deleteRoleMutation.mutate(id);
    },
    [deleteRoleMutation]
  );

  if (isLoading || deleteRoleMutation.isLoading) {
    return <div>Loading...</div>;
  }

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
          <Link to={'/manage-users/roles/tambah'}>
            <Button color="blue" size="md">
              Tambah Roles
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          <TableRoles tableData={data} handleDelete={handleDelete} />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
