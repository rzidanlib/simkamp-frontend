import * as React from 'react';
import { ContentLayout } from '@/components/Layout';
import { Typography } from '@material-tailwind/react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import { useUsers } from '../../api/users/get-users';
import { TableUsers } from '../../components/TableUsers';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useDeleteUser } from '../../api/users/delete-user';

export const UsersPage = () => {
  const { data: userData, isLoading, isError } = useUsers();
  const userdeleteMutation = useDeleteUser();

  const handleDelete = React.useCallback(
    (id) => {
      userdeleteMutation.mutate(id);
    },
    [userdeleteMutation]
  );

  return (
    <ContentLayout title="Users">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Users
          </Typography>
          <Link to="/manage-users/users/tambah">
            <Button color="blue" size="md">
              Tambah User
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableUsers tableData={userData} handleDelete={handleDelete} isLoading={isLoading} />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
