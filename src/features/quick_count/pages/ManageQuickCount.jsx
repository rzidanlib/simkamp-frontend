import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateQuickCount, useUpdateQuickCount } from '../api/manage-quick-count';
import { useQuickCount } from '../api/get-quick-count';
import { quickCountSchema } from '../schema/quick-count-schema';
import {
  useKabKota,
  useKecamatan,
  useKelurahan,
  useProvinsi,
} from '@/features/wilayah-administrasi/api/get-wilayah';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody } from '@material-tailwind/react';
import { FormQuickCount } from '../components/FormQuickCount';

export const ManageQuickCount = () => {
  const { quickCountId } = useParams();
  const isEdit = Boolean(quickCountId);
  const { data: quickCount, isLoading, isError } = useQuickCount(quickCountId);

  const { mutate: createQuickCount } = useCreateQuickCount();
  const { mutate: updateQuickCount } = useUpdateQuickCount();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      quick_count_provinsi: '',
      quick_count_kab_kota: '',
      quick_count_kecamatan: '',
      quick_count_kelurahan: '',
      quick_count_jumlah_suara: '',
      quick_count_foto: null,
      quick_count_tps: '',
    },
    resolver: zodResolver(quickCountSchema),
  });

  const watchedProvinsiKode = watch('quick_count_provinsi');
  const watchedKabKota = watch('quick_count_kab_kota');
  const watchedKecamatan = watch('quick_count_kecamatan');

  const { data: provinsi, isLoading: isLoadingProvinsi, isError: isErrorProvinsi } = useProvinsi();
  const {
    data: kabKota,
    isLoading: isLoadingKabKota,
    isError: isErrorKabKota,
  } = useKabKota(watchedProvinsiKode);
  const {
    data: kecamatan,
    isLoading: isLoadingKecamatan,
    isError: isErrorKecamatan,
  } = useKecamatan(watchedKabKota);
  const {
    data: kelurahan,
    isLoading: isLoadingKelurahan,
    isError: isErrorKelurahan,
  } = useKelurahan(watchedKecamatan);

  React.useEffect(() => {
    if (isEdit && quickCount) {
      reset({
        quick_count_provinsi: quickCount.quick_count_provinsi,
        quick_count_kab_kota: String(quickCount.quick_count_kab_kota),
        quick_count_kecamatan: String(quickCount.quick_count_kecamatan),
        quick_count_kelurahan: String(quickCount.quick_count_kelurahan),
        quick_count_jumlah_suara: String(quickCount.quick_count_jumlah_suara),
        quick_count_foto: quickCount.quick_count_foto,
        quick_count_tps: quickCount.quick_count_tps,
      });
    }
  }, [quickCount, reset, isEdit]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('quick_count_provinsi', data.quick_count_provinsi);
    formData.append('quick_count_kab_kota', data.quick_count_kab_kota);
    formData.append('quick_count_kecamatan', data.quick_count_kecamatan);
    formData.append('quick_count_kelurahan', data.quick_count_kelurahan);
    formData.append('quick_count_jumlah_suara', data.quick_count_jumlah_suara);
    formData.append('quick_count_foto', data.quick_count_foto);
    formData.append('quick_count_tps', data.quick_count_tps);

    if (isEdit) {
      updateQuickCount({ quickCountId, formData });
    } else {
      createQuickCount(formData);
    }
  };

  return (
    <ContentLayout title="Manage Quick Count">
      <Card className="mt-12">
        <CardBody>
          <FormQuickCount
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            data={{
              provinsiData: { provinsi, isLoadingProvinsi, isErrorProvinsi },
              kabKotaData: { kabKota, isLoadingKabKota, isErrorKabKota },
              kecamatanData: { kecamatan, isLoadingKecamatan, isErrorKecamatan },
              kelurahanData: { kelurahan, isLoadingKelurahan, isErrorKelurahan },
            }}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
