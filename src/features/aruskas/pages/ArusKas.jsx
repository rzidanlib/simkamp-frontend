import * as React from 'react';

import { Link } from 'react-router-dom';

import { useArusKasAdmin, useArusKasKandidat, useArusKasRelawan } from '../api/get-arus-kas';
import { useDeleteArusKas } from '../api/manage-arus-kas';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableArusKas } from '../components/TableArusKas';
import localStorageHandler from '@/utils/localStorage';

export const ArusKasPage = () => {
  const { role } = localStorageHandler.getItem('currentUser');

  const {
    data: arusKasRelawan,
    isLoading: loadingArusKasRelawan,
    isError: errorArusKasRelawan,
  } = useArusKasRelawan();
  const {
    data: arusKasKandidat,
    isLoading: loadingArusKasKandidat,
    isError: errorArusKasKandidat,
  } = useArusKasKandidat();
  const {
    data: arusKasAdmin,
    isLoading: loadingArusKasAdmin,
    isError: errorArusKasAdmin,
  } = useArusKasAdmin();

  let tableData, isLoading, isError;
  switch (role) {
    case 'relawan':
      tableData = arusKasRelawan;
      isLoading = loadingArusKasRelawan;
      isError = errorArusKasRelawan;
      break;
    case 'kandidat':
      tableData = arusKasKandidat;
      isLoading = loadingArusKasKandidat;
      isError = errorArusKasKandidat;
      break;
    case 'admin-partai':
      tableData = arusKasAdmin;
      isLoading = loadingArusKasAdmin;
      isError = errorArusKasAdmin;
      break;
    default:
      tableData = [];
      isLoading = false;
      isError = 'Role tidak dikenali';
  }

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
            <TableArusKas tableData={tableData} handleDelete={handleDelete} isLoading={isLoading} />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
