import * as React from 'react';

import { Link } from 'react-router-dom';

import { usePosisiCalon } from '@/features/admin/api/data_master/posisi_calon_tetap/get-posisi-calon';
import { useDeletePosisiCalon } from '@/features/admin/api/data_master/posisi_calon_tetap/manage-posisi-calon';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { TablePosisiCalon } from '@/features/admin/components/TablePosisiCalon';

export const PosisiCalonPage = () => {
  const { data: posisiCalon, isLoading, isError } = usePosisiCalon();
  const { mutate: deletePosisiCalon } = useDeletePosisiCalon();

  const handleDelete = React.useCallback(
    (id) => {
      deletePosisiCalon(id);
    },
    [deletePosisiCalon]
  );

  return (
    <ContentLayout title="Posisi Calon Tetap">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Posisi Calon Tetap
          </Typography>
          <Link to={'/data-master/posisi-calon/tambah'}>
            <Button color="blue" size="md">
              Tambah Posisi Calon Tetap
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TablePosisiCalon
              tableData={posisiCalon}
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
