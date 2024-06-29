import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateRelawan, useUpdateRelawan } from '../api/manage-relawan';
import { useRelawan } from '../api/get-relawan';
import { relawanSchema } from '../schema/relawan-schema';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody } from '@material-tailwind/react';
import { FormRelawan } from '../components/FormRelawan';

import { useKabKota, useProvinsi } from '@/features/wilayah-administrasi/api/get-wilayah';

export const ManageRelawanPage = () => {
  const { relawanId } = useParams();
  const isEdit = Boolean(relawanId);
  const { data: relawan, isLoading, isError } = useRelawan(relawanId);

  const { mutate: createRelawan } = useCreateRelawan();
  const { mutate: updateRelawan } = useUpdateRelawan();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      relawan_nama: '',
      relawan_email: '',
      relawan_password: '',
      konfirmasi_password: '',
      relawan_no_telp: '',
      relawan_usia: '',
      relawan_jenis_kelamin: '',
      relawan_foto: null,
      relawan_provinsi_kode: '',
      relawan_kab_kota_kode: '',
      relawan_status: '',
      relawan_role_id: 5,
    },
    resolver: zodResolver(relawanSchema),
  });

  const watchedProvinsiKode = watch('relawan_provinsi_kode');

  const { data: provinsi, isLoading: isLoadingProvinsi, isError: isErrorProvinsi } = useProvinsi();
  const {
    data: kabKota,
    isLoading: isLoadingKabKota,
    isError: isErrorKabKota,
  } = useKabKota(watchedProvinsiKode);

  React.useEffect(() => {
    if (isEdit && relawan) {
      reset({
        relawan_nama: relawan.relawan_nama,
        relawan_email: relawan.relawan_email,
        relawan_no_telp: relawan.relawan_no_telp,
        relawan_usia: relawan.relawan_usia,
        relawan_jenis_kelamin: relawan.relawan_jenis_kelamin,
        relawan_foto: relawan.relawan_foto,
        relawan_provinsi_kode: relawan.relawan_provinsi_kode,
        relawan_kab_kota_kode: relawan.relawan_kab_kota_kode,
        relawan_status: relawan.relawan_status,
        relawan_role_id: relawan.relawan_role_id,
      });
    }
  }, [relawan, reset, isEdit]);

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append('relawan_nama', data.relawan_nama);
    formData.append('relawan_email', data.relawan_email);
    formData.append('relawan_password', data.relawan_password);
    formData.append('relawan_no_telp', data.relawan_no_telp);
    formData.append('relawan_usia', data.relawan_usia);
    formData.append('relawan_jenis_kelamin', data.relawan_jenis_kelamin);
    formData.append('relawan_foto', data.relawan_foto);
    formData.append('relawan_provinsi_kode', data.relawan_provinsi_kode);
    formData.append('relawan_kab_kota_kode', data.relawan_kab_kota_kode);
    formData.append('relawan_status', data.relawan_status);
    formData.append('relawan_role_id', data.relawan_role_id);

    if (isEdit) {
      updateRelawan({ relawanId, formData });
    } else {
      createRelawan(formData);
    }
  };

  return (
    <ContentLayout title="Manage Relawan">
      <Card className="mt-12">
        <CardBody>
          <FormRelawan
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            disabled={isEdit}
            data={{
              provinsi,
              isLoadingProvinsi,
              isErrorProvinsi,
              kabKota,
              isLoadingKabKota,
              isErrorKabKota,
            }}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
