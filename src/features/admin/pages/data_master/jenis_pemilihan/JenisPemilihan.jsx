import * as React from 'react';

import { Link } from 'react-router-dom';

import { useJenisPemilihan } from '@/features/admin/api/data_master/jenis_pemilihan/get-pemilihan';
import { useDeletePemilihan } from '@/features/admin/api/data_master/jenis_pemilihan/manage-pemilihan';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { TablePemilihan } from '@/features/admin/components/TablePemilihan';

export const JenisPemilihanPage = () => {
  const { data: pemilihan, isLoading, isError } = useJenisPemilihan();
  const { mutate: deletePemilihan } = useDeletePemilihan();

  const handleDelete = React.useCallback(
    (id) => {
      deletePemilihan(id);
    },
    [deletePemilihan]
  );

  return (
    <ContentLayout title="Jenis Pemilihan">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Jenis Pemilihan
          </Typography>
          <Link to={'/data-master/jenis-pemilihan/tambah'}>
            <Button color="blue" size="md">
              Tambah Jenis Pemilihan
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TablePemilihan
              tableData={pemilihan}
              handleDelete={handleDelete}
              isLoading={isLoading}
            />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
