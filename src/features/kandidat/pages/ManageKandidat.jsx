import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAgama } from '@/features/admin/api/data_master/agama/get-agama';
import { useDapil } from '@/features/admin/api/data_master/dapil/get-dapil';
import { useJenisPemilihan } from '@/features/admin/api/data_master/jenis_pemilihan/get-pemilihan';
import { usePosisiCalon } from '@/features/admin/api/data_master/posisi_calon_tetap/get-posisi-calon';
import { useCreateKandidat, useUpdateKandidat } from '../api/manage-kandidat';
import { useKandidat } from '../api/get-kandidat';
import { kandidatSchema } from '../schema/kandidat-schema';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody } from '@material-tailwind/react';
import { FormKandidat } from '../components/FormKandidat';

export const ManageKandidatPage = () => {
  const { kandidatId } = useParams();
  const isEdit = Boolean(kandidatId);
  const { data: kandidat, isLoading, isError } = useKandidat(kandidatId);
  const { data: agama, isLoading: isLoadingAgama, isError: isErrorAgama } = useAgama();
  const { data: dapil, isLoading: isLoadingDapil, isError: isErrorDapil } = useDapil();
  const {
    data: jenisPemilihan,
    isLoading: isLoadingJenisPemilihan,
    isError: isErrorJenisPemilihan,
  } = useJenisPemilihan();
  const {
    data: posisiCalon,
    isLoading: isLoadingPosisiCalon,
    isError: isErrorPosisiCalon,
  } = usePosisiCalon();

  const { mutate: createKandidat } = useCreateKandidat();
  const { mutate: updateKandidat } = useUpdateKandidat();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      kandidat_nama: '',
      kandidat_email: '',
      kandidat_password: '',
      konfirmasi_password: '',
      kandidat_no_telp: '',
      kandidat_agama_id: '',
      kandidat_foto: null,
      kandidat_usia: '',
      kandidat_alamat: '',
      kandidat_dapil_id: '',
      kandidat_jenis_pemilihan_id: '',
      kandidat_posisi_calon_tetap_id: '',
      kandidat_jenis_kelamin: '',
      kandidat_role_id: 4,
      kandidat_nomor_urut: '',
    },
    resolver: zodResolver(kandidatSchema),
  });

  React.useEffect(() => {
    if (isEdit && kandidat) {
      reset({
        kandidat_nama: kandidat.kandidat_nama,
        kandidat_email: kandidat.kandidat_email,
        kandidat_no_telp: kandidat.kandidat_no_telp,
        kandidat_agama_id: kandidat.kandidat_agama_id,
        kandidat_foto: kandidat.kandidat_foto,
        kandidat_usia: kandidat.kandidat_usia,
        kandidat_alamat: kandidat.kandidat_alamat,
        kandidat_dapil_id: kandidat.kandidat_dapil_id,
        kandidat_jenis_pemilihan_id: kandidat.kandidat_jenis_pemilihan_id,
        kandidat_posisi_calon_tetap_id: kandidat.kandidat_posisi_calon_tetap_id,
        kandidat_jenis_kelamin: kandidat.kandidat_jenis_kelamin,
        kandidat_role_id: kandidat.kandidat_role_id,
        kandidat_nomor_urut: kandidat.kandidat_nomor_urut,
      });
    }
  }, [kandidat, reset, isEdit]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('kandidat_nama', data.kandidat_nama);
    formData.append('kandidat_email', data.kandidat_email);
    formData.append('kandidat_password', data.kandidat_password);
    formData.append('kandidat_no_telp', data.kandidat_no_telp);
    formData.append('kandidat_agama_id', data.kandidat_agama_id);
    formData.append('kandidat_foto', data.kandidat_foto);
    formData.append('kandidat_usia', data.kandidat_usia);
    formData.append('kandidat_alamat', data.kandidat_alamat);
    formData.append('kandidat_dapil_id', data.kandidat_dapil_id);
    formData.append('kandidat_jenis_pemilihan_id', data.kandidat_jenis_pemilihan_id);
    formData.append('kandidat_posisi_calon_tetap_id', data.kandidat_posisi_calon_tetap_id);
    formData.append('kandidat_jenis_kelamin', data.kandidat_jenis_kelamin);
    formData.append('kandidat_role_id', data.kandidat_role_id);
    formData.append('kandidat_nomor_urut', data.kandidat_nomor_urut);

    if (isEdit) {
      updateKandidat({ kandidatId, formData });
    } else {
      createKandidat(formData);
    }
  };

  return (
    <ContentLayout title="Manage Kandidat">
      <Card className="mt-12">
        <CardBody>
          <FormKandidat
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            disabled={isEdit}
            data={{
              agamaData: { agama, isLoadingAgama, isErrorAgama },
              dapilData: { dapil, isLoadingDapil, isErrorDapil },
              jenisPemilihanData: {
                jenisPemilihan,
                isLoadingJenisPemilihan,
                isErrorJenisPemilihan,
              },
              posisiCalonData: { posisiCalon, isLoadingPosisiCalon, isErrorPosisiCalon },
            }}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
