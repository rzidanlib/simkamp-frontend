import * as React from 'react';

import { Link } from 'react-router-dom';

import { useRelawanAdmin, useRelawanKandidat } from '../api/get-relawan';
import { useDeleteRelawan } from '../api/manage-relawan';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableRelawan } from '../components/TableRelawan';
import Authorization, { userRoles } from '@/lib/authorization';

export const RelawanPage = () => {
  // Mengurai currentUser dari localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const { role } = currentUser;

  const {
    data: relawanKandidat,
    isLoading: loadingRelawanKandidat,
    isError: errorRelawanKandidat,
  } = useRelawanKandidat();
  const {
    data: relawanAdmin,
    isLoading: loadingRelawanAdmin,
    isError: errorRelawanAdmin,
  } = useRelawanAdmin();

  // Menentukan data relawan berdasarkan role
  const relawanData = role === 'kandidat' ? relawanKandidat : relawanAdmin;
  const isLoading = role === 'kandidat' ? loadingRelawanKandidat : loadingRelawanAdmin;
  const isError = role === 'kandidat' ? errorRelawanKandidat : errorRelawanAdmin;

  const { mutate: deleteRelawan } = useDeleteRelawan();

  const handleDelete = React.useCallback(
    (id) => {
      deleteRelawan(id);
    },
    [deleteRelawan]
  );

  return (
    <ContentLayout title="Relawan">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Relawan
          </Typography>
          <Authorization allowedRoles={userRoles.kandidat}>
            <Link to={'/relawan/tambah'}>
              <Button color="blue" size="md">
                Tambah Relawan
              </Button>
            </Link>
          </Authorization>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableRelawan
              tableData={relawanData}
              handleDelete={handleDelete}
              isLoading={isLoading}
              actions={{ detailPath: `/relawan` }}
            />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
