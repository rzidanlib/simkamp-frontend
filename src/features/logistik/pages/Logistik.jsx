import * as React from 'react';

import { Link } from 'react-router-dom';

import { useLogistikAdmin, useLogistikKandidat, useLogistikRelawan } from '../api/get-logistik';
import { useDeleteLogistik } from '../api/manage-logistik';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableLogistik } from '../components/TableLogistik';
import localStorageHandler from '@/utils/localStorage';
import Authorization, { userRoles } from '@/lib/authorization';

export const LogistikPage = () => {
  const { role } = localStorageHandler.getItem('currentUser');

  const {
    data: logistikRelawan,
    isLoading: loadingLogistikRelawan,
    isError: errorLogistikRelawan,
  } = useLogistikRelawan();
  const {
    data: logistikKandidat,
    isLoading: loadingLogistikKandidat,
    isError: errorLogistikKandidat,
  } = useLogistikKandidat();
  const {
    data: logistikAdmin,
    isLoading: loadingLogistikAdmin,
    isError: errorLogistikAdmin,
  } = useLogistikAdmin();

  let tableData, isLoading, isError;
  switch (role) {
    case 'relawan':
      tableData = logistikRelawan;
      isLoading = loadingLogistikRelawan;
      isError = errorLogistikRelawan;
      break;
    case 'kandidat':
      tableData = logistikKandidat;
      isLoading = loadingLogistikKandidat;
      isError = errorLogistikKandidat;
      break;
    case 'admin-partai':
      tableData = logistikAdmin;
      isLoading = loadingLogistikAdmin;
      isError = errorLogistikAdmin;
      break;
    default:
      tableData = [];
      isLoading = false;
      isError = 'Role tidak dikenali';
  }

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
          <Authorization allowedRoles={userRoles.relawan}>
            <Link to={'/logistik/stok/tambah'}>
              <Button color="blue" size="md">
                Tambah Logistik Stok
              </Button>
            </Link>
          </Authorization>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableLogistik
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
