import * as React from 'react';

import { Link } from 'react-router-dom';

import { usePemakaianAdmin, usePemakaianKandidat, usePemakaianRelawan } from '../api/get-pemakaian';
import { useDeletePemakaian } from '../api/manage-pemakaian';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TablePemakaian } from '../components/TablePemakaian';
import localStorageHandler from '@/utils/localStorage';

export const PemakaianPage = () => {
  const { role } = localStorageHandler.getItem('currentUser');

  const {
    data: pemakaianRelawan,
    isLoading: loadingPemakaianRelawan,
    isError: errorPemakaianRelawan,
  } = usePemakaianRelawan();
  const {
    data: pemakaianKandidat,
    isLoading: loadingPemakaianKandidat,
    isError: errorPemakaianKandidat,
  } = usePemakaianKandidat();
  const {
    data: pemakaianAdmin,
    isLoading: loadingPemakaianAdmin,
    isError: errorPemakaianAdmin,
  } = usePemakaianAdmin();

  let tableData, isLoading, isError;
  switch (role) {
    case 'relawan':
      tableData = pemakaianRelawan;
      isLoading = loadingPemakaianRelawan;
      isError = errorPemakaianRelawan;
      break;
    case 'kandidat':
      tableData = pemakaianKandidat;
      isLoading = loadingPemakaianKandidat;
      isError = errorPemakaianKandidat;
      break;
    case 'admin-partai':
      tableData = pemakaianAdmin;
      isLoading = loadingPemakaianAdmin;
      isError = errorPemakaianAdmin;
      break;
    default:
      tableData = [];
      isLoading = false;
      isError = 'Role tidak dikenali';
  }

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
              tableData={tableData}
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
