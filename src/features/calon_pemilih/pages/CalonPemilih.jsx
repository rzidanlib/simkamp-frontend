import * as React from 'react';

import { Link } from 'react-router-dom';

import { usePemilihAdmin, usePemilihKandidat, usePemilihRelawan } from '../api/get-calon-pemilih';
import { useDeletePemilih } from '../api/manage-calon-pemilih';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TablePemilih } from '../components/TablePemilih';
import { useProvinsi } from '@/features/wilayah-administrasi/api/get-wilayah';
import localStorageHandler from '@/utils/localStorage';

export const CalonPemilihPage = () => {
  const { role } = localStorageHandler.getItem('currentUser');

  const {
    data: pemilihRelawan,
    isLoading: loadingPemilihRelawan,
    isError: errorPemilihRelawan,
  } = usePemilihRelawan();
  const {
    data: pemilihKandidat,
    isLoading: loadingPemilihKandidat,
    isError: errorPemilihKandidat,
  } = usePemilihKandidat();
  const {
    data: pemilihAdmin,
    isLoading: loadingPemilihAdmin,
    isError: errorPemilihAdmin,
  } = usePemilihAdmin();

  let tableData, isLoading, isError;
  switch (role) {
    case 'relawan':
      tableData = pemilihRelawan;
      isLoading = loadingPemilihRelawan;
      isError = errorPemilihRelawan;
      break;
    case 'kandidat':
      tableData = pemilihKandidat;
      isLoading = loadingPemilihKandidat;
      isError = errorPemilihKandidat;
      break;
    case 'admin-partai':
      tableData = pemilihAdmin;
      isLoading = loadingPemilihAdmin;
      isError = errorPemilihAdmin;
      break;
    default:
      tableData = [];
      isLoading = false;
      isError = 'Role tidak dikenali';
  }

  const { mutate: deletePemilih } = useDeletePemilih();
  const { data: provinsi } = useProvinsi();

  const provinsiLookup = React.useMemo(() => {
    return (provinsi || []).reduce((acc, provinsi) => {
      acc[provinsi.id] = provinsi.name;
      return acc;
    }, {});
  }, [provinsi]);

  const handleDelete = React.useCallback(
    (id) => {
      deletePemilih(id);
    },
    [deletePemilih]
  );

  return (
    <ContentLayout title="Calon Pemilih">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Calon Pemilih
          </Typography>
          <Link to={'/calon-pemilih/tambah'}>
            <Button color="blue" size="md">
              Tambah Calon Pemilih
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TablePemilih
              tableData={tableData}
              handleDelete={handleDelete}
              isLoading={isLoading}
              lookup={{
                provinsiLookup,
              }}
            />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
