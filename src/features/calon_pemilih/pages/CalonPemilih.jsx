import * as React from 'react';

import { Link } from 'react-router-dom';

import { usePemilihRelawan } from '../api/get-calon-pemilih';
import { useDeletePemilih } from '../api/manage-calon-pemilih';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TablePemilih } from '../components/TablePemilih';
import { useProvinsi } from '@/features/wilayah-administrasi/api/get-wilayah';

export const CalonPemilihPage = () => {
  const { data: pemilih, isLoading, isError } = usePemilihRelawan();
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
              tableData={pemilih}
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
