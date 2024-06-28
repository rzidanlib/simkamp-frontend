import * as React from 'react';

import { Link } from 'react-router-dom';

import { useKandidatAdmin } from '../api/get-kandidat';
import { useDeleteKandidat } from '../api/manage-kandidat';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableKandidat } from '../components/TableKandidat';
import { useDapil } from '@/features/admin/api/data_master/dapil/get-dapil';
import { useJenisPemilihan } from '@/features/admin/api/data_master/jenis_pemilihan/get-pemilihan';
import { usePosisiCalon } from '@/features/admin/api/data_master/posisi_calon_tetap/get-posisi-calon';

export const KandidatPage = () => {
  const { data: partai, isLoading, isError } = useKandidatAdmin();
  const { mutate: deleteKandidat } = useDeleteKandidat();
  const { data: dapil } = useDapil();
  const { data: jenisPemilihan } = useJenisPemilihan();
  const { data: posisiCalon } = usePosisiCalon();

  const dapilLookup = React.useMemo(() => {
    return (dapil || []).reduce((acc, item) => {
      acc[item.dapil_id] = item.dapil_nama;
      return acc;
    }, {});
  }, [dapil]);

  const jenisPemilihanLookup = React.useMemo(() => {
    return (jenisPemilihan || []).reduce((acc, item) => {
      acc[item.jenis_pemilihan_id] = item.jenis_pemilihan;
      return acc;
    }, {});
  }, [jenisPemilihan]);

  const posisiCalonLookup = React.useMemo(() => {
    return (posisiCalon || []).reduce((acc, item) => {
      acc[item.posisi_calon_tetap_id] = item.posisi_calon_tetap;
      return acc;
    }, {});
  }, [posisiCalon]);

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
        <CardBody className="p-0">
          {!isError ? (
            <TableKandidat
              tableData={partai}
              handleDelete={handleDelete}
              isLoading={isLoading}
              lookup={{
                dapilLookup,
                jenisPemilihanLookup,
                posisiCalonLookup,
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
