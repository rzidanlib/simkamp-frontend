import * as React from 'react';

import { Link } from 'react-router-dom';

import { useDapil } from '@/features/admin/api/data_master/dapil/get-dapil';
import { useDeleteDapil } from '@/features/admin/api/data_master/dapil/manage-dapil';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { TableDapil } from '@/features/admin/components/TableDapil';
import { useProvinsi } from '@/features/wilayah-administrasi/api/get-wilayah';

export const DapilPage = () => {
  const { data: dapil, isLoading, isError } = useDapil();
  const { mutate: deleteDapil } = useDeleteDapil();
  const { data: provinsi, isLoading: loadingProvinsi } = useProvinsi();

  const provinceLookup = React.useMemo(() => {
    return (provinsi || []).reduce((acc, province) => {
      acc[province.id] = province.name;
      return acc;
    }, {});
  }, [provinsi]);

  const handleDelete = React.useCallback(
    (id) => {
      deleteDapil(id);
    },
    [deleteDapil]
  );

  return (
    <ContentLayout title="Dapil">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Dapil
          </Typography>
          <Link to={'/data-master/dapil/tambah'}>
            <Button color="blue" size="md">
              Tambah Dapil
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableDapil
              tableData={dapil}
              handleDelete={handleDelete}
              isLoading={isLoading}
              provinsiLookup={provinceLookup}
            />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
