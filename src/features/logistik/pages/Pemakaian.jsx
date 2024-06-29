import * as React from 'react';

import { Link } from 'react-router-dom';

import { usePemakaianRelawan } from '../api/get-pemakaian';
import { useDeletePemakaian } from '../api/manage-pemakaian';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TablePemakaian } from '../components/TablePemakaian';
import { useLogistik } from '../api/get-logistik';

export const PemakaianPage = () => {
  const { data: pemakaian, isLoading, isError } = usePemakaianRelawan();
  const { mutate: deletePemakaian } = useDeletePemakaian();

  const handleDelete = React.useCallback(
    (id) => {
      deletePemakaian(id);
    },
    [deletePemakaian]
  );

  return (
    <ContentLayout title="Pemakaian Logistik">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Pemakaian Logistik
          </Typography>
          <Link to={'/logistik/pemakaian/tambah'}>
            <Button color="blue" size="md">
              Tambah Pemakaian Logistik
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TablePemakaian
              tableData={pemakaian}
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
