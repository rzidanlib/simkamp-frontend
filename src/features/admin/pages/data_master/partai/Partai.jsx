import * as React from 'react';

import { Link } from 'react-router-dom';

import { usePartai } from '@/features/admin/api/data_master/partai/get-partai';
import { useDeletePartai } from '@/features/admin/api/data_master/partai/manage-partai';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TablePartai } from '@/features/admin/components/TablePartai';

export const PartaiPage = () => {
  const { data: partai, isLoading, isError } = usePartai();
  const { mutate: deletePartai } = useDeletePartai();

  const handleDelete = React.useCallback(
    (id) => {
      deletePartai(id);
    },
    [deletePartai]
  );

  return (
    <ContentLayout title="Data Master Partai">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Partai
          </Typography>
          <Link to={'/data-master/partai/tambah'}>
            <Button color="blue" size="md">
              Tambah Partai
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TablePartai tableData={partai} handleDelete={handleDelete} isLoading={isLoading} />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
