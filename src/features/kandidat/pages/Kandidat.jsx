import * as React from 'react';

import { Link } from 'react-router-dom';

import { useKandidatAdmin } from '../api/get-kandidat';
import { useDeleteKandidat } from '../api/manage-kandidat';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableKandidat } from '../components/TableKandidat';

export const KandidatPage = () => {
  const { data: kandidat, isLoading, isError } = useKandidatAdmin();
  const { mutate: deleteKandidat } = useDeleteKandidat();

  const handleDelete = React.useCallback(
    (id) => {
      deleteKandidat(id);
    },
    [deleteKandidat]
  );

  return (
    <ContentLayout title="Kandidat">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Kandidat
          </Typography>
          <Link to={'/kandidat/tambah'}>
            <Button color="blue" size="md">
              Tambah Kandidat
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0 overflow-x-scroll">
          {!isError ? (
            <TableKandidat
              tableData={kandidat}
              handleDelete={handleDelete}
              isLoading={isLoading}
              actions={{ detailPath: `/kandidat` }}
            />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
