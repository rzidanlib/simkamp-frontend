import * as React from 'react';

import { Link } from 'react-router-dom';

import { useRelawanKandidat } from '../api/get-relawan';
import { useDeleteRelawan } from '../api/manage-relawan';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableRelawan } from '../components/TableRelawan';
import { useProvinsi } from '@/features/wilayah-administrasi/api/get-wilayah';

export const RelawanPage = () => {
  const { data: relawan, isLoading, isError } = useRelawanKandidat();
  const { mutate: deleteRelawan } = useDeleteRelawan();
  const { data: provinsi } = useProvinsi();

  const provinsiLookup = React.useMemo(() => {
    return (provinsi || []).reduce((acc, provinsi) => {
      acc[provinsi.id] = provinsi.name;
      return acc;
    }, {});
  }, [provinsi]);

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
          <Link to={'/relawan/tambah'}>
            <Button color="blue" size="md">
              Tambah Relawan
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableRelawan
              tableData={relawan}
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
