import * as React from 'react';

import { Link } from 'react-router-dom';

import {
  useQuickCountAdmin,
  useQuickCountKandidat,
  useQuickCountRelawan,
} from '../api/get-quick-count';
import { useDeleteQuickCount } from '../api/manage-quick-count';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableQuickCount } from '../components/TableQuickCount';
import localStorageHandler from '@/utils/localStorage';
import Authorization, { userRoles } from '@/lib/authorization';

export const QuickCountPage = () => {
  const { role } = localStorageHandler.getItem('currentUser');

  const {
    data: quickCountRelawan,
    isLoading: loadingQuickCountRelawan,
    isError: errorQuickCountRelawan,
  } = useQuickCountRelawan();
  const {
    data: quickCountKandidat,
    isLoading: loadingQuickCountKandidat,
    isError: errorQuickCountKandidat,
  } = useQuickCountKandidat();
  const {
    data: quickCountAdmin,
    isLoading: loadingQuickCountAdmin,
    isError: errorQuickCountAdmin,
  } = useQuickCountAdmin();

  let tableData, isLoading, isError;
  switch (role) {
    case 'relawan':
      tableData = quickCountRelawan;
      isLoading = loadingQuickCountRelawan;
      isError = errorQuickCountRelawan;
      break;
    case 'kandidat':
      tableData = quickCountKandidat;
      isLoading = loadingQuickCountKandidat;
      isError = errorQuickCountKandidat;
      break;
    case 'admin-partai':
      tableData = quickCountAdmin;
      isLoading = loadingQuickCountAdmin;
      isError = errorQuickCountAdmin;
      break;
    default:
      tableData = [];
      isLoading = false;
      isError = 'Role tidak dikenali';
  }
  const { mutate: deleteQuickCount } = useDeleteQuickCount();

  const handleDelete = React.useCallback(
    (id) => {
      deleteQuickCount(id);
    },
    [deleteQuickCount]
  );

  return (
    <ContentLayout title="Quick Count">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Quick Count
          </Typography>
          <Authorization allowedRoles={userRoles.relawan}>
            <Link to={'/quick-count/tambah'}>
              <Button color="blue" size="md">
                Tambah Quick Count
              </Button>
            </Link>
          </Authorization>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableQuickCount
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
