import * as React from 'react';

import { Link } from 'react-router-dom';

import { useAgama } from '@/features/admin/api/data_master/agama/get-agama';
import { useDeleteAgama } from '@/features/admin/api/data_master/agama/manage-agama';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { TableAgama } from '@/features/admin/components/TableAgama';

export const AgamaPage = () => {
  const { data: agama, isLoading, isError } = useAgama();
  const { mutate: deleteAgama } = useDeleteAgama();

  const handleDelete = React.useCallback(
    (id) => {
      deleteAgama(id);
    },
    [deleteAgama]
  );

  return (
    <ContentLayout title="Agama">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Agama
          </Typography>
          <Link to={'/data-master/agama/tambah'}>
            <Button color="blue" size="md">
              Tambah Agama
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableAgama tableData={agama} handleDelete={handleDelete} isLoading={isLoading} />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
