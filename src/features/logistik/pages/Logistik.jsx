import * as React from 'react';

import { Link } from 'react-router-dom';

import { useLogistikRelawan } from '../api/get-logistik';
import { useDeleteLogistik } from '../api/manage-logistik';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableLogistik } from '../components/TableLogistik';

export const LogistikPage = () => {
  const { data: logistik, isLoading, isError } = useLogistikRelawan();
  const { mutate: deleteLogistik } = useDeleteLogistik();

  const handleDelete = React.useCallback(
    (id) => {
      deleteLogistik(id);
    },
    [deleteLogistik]
  );

  return (
    <ContentLayout title="Logistik Stok">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Logistik Stok
          </Typography>
          <Link to={'/logistik/stok/tambah'}>
            <Button color="blue" size="md">
              Tambah Logistik Stok
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableLogistik tableData={logistik} handleDelete={handleDelete} isLoading={isLoading} />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
