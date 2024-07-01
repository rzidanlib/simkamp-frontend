import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateArusKas, useUpdateArusKas } from '../api/manage-arus-kas';
import { useArusKas } from '../api/get-arus-kas';
import { arusKasSchema } from '../schema/arus-kas-schema';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody } from '@material-tailwind/react';
import { FormArusKas } from '../components/FormArusKas';
import { useLocation } from 'react-router-dom';

export const ManageArusKas = () => {
  const { arusKasId } = useParams();
  const isEdit = Boolean(arusKasId);
  const { data: arusKasData, isLoading, isError } = useArusKas(arusKasId);

  const location = useLocation();
  const detailPath = location.pathname.split('/')[2];
  const disabled = isEdit && Boolean(detailPath);

  const { mutate: createArusKas } = useCreateArusKas();
  const { mutate: updateArusKas } = useUpdateArusKas();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      aruskas_kategori: '',
      aruskas_foto_kuitansi: null,
      aruskas_detail: '',
      aruskas_catatan: '',
      aruskas_jumlah: '',
      aruskas_tanggal: '',
    },
    resolver: zodResolver(arusKasSchema),
  });

  React.useEffect(() => {
    if (isEdit && arusKasData) {
      reset({
        aruskas_kategori: arusKasData.aruskas_kategori,
        aruskas_foto_kuitansi: arusKasData.aruskas_foto_kuitansi,
        aruskas_detail: arusKasData.aruskas_detail,
        aruskas_catatan: arusKasData.aruskas_catatan,
        aruskas_jumlah: String(arusKasData.aruskas_jumlah),
        aruskas_tanggal: arusKasData.aruskas_tanggal,
      });
    }
  }, [arusKasData, reset, isEdit]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('aruskas_kategori', data.aruskas_kategori);
    formData.append('aruskas_foto_kuitansi', data.aruskas_foto_kuitansi);
    formData.append('aruskas_detail', data.aruskas_detail);
    formData.append('aruskas_catatan', data.aruskas_catatan);
    formData.append('aruskas_jumlah', data.aruskas_jumlah);
    formData.append('aruskas_tanggal', data.aruskas_tanggal);

    if (isEdit) {
      updateArusKas({ arusKasId, formData });
    } else {
      createArusKas(formData);
    }
  };

  return (
    <ContentLayout title="Manage Arus Kas">
      <Card className="mt-12">
        <CardBody>
          <FormArusKas
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            disabled={disabled}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
