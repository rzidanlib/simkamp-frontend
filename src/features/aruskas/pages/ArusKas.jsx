import * as React from 'react';

import { Link } from 'react-router-dom';

import { useArusKasRelawan } from '../api/get-arus-kas';
import { useDeleteArusKas } from '../api/manage-arus-kas';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableArusKas } from '../components/TableArusKas';

export const ArusKasPage = () => {
  const { data: arusKas, isLoading, isError } = useArusKasRelawan();
  const { mutate: deleteArusKas } = useDeleteArusKas();

  const handleDelete = React.useCallback(
    (id) => {
      deleteArusKas(id);
    },
    [deleteArusKas]
  );

  return (
    <ContentLayout title="Arus Kas">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Arus Kas
          </Typography>
          <Link to={'/aruskas/tambah'}>
            <Button color="blue" size="md">
              Tambah Arus Kas
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableArusKas tableData={arusKas} handleDelete={handleDelete} isLoading={isLoading} />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
