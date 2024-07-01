import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreatePemilih, useUpdatePemilih } from '../api/manage-calon-pemilih';
import { usePemilih } from '../api/get-calon-pemilih';
import { calonPemilihSchema } from '../schema/pemilih-schema';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody } from '@material-tailwind/react';
import { FormPemilih } from '../components/FormPemilih';

import {
  useKabKota,
  useKecamatan,
  useKelurahan,
  useProvinsi,
} from '@/features/wilayah-administrasi/api/get-wilayah';
import { useLocation } from 'react-router-dom';

export const ManageCalonPemilihPage = () => {
  const { pemilihId } = useParams();
  const isEdit = Boolean(pemilihId);
  const { data: calonPemilih, isLoading, isError } = usePemilih(pemilihId);

  const location = useLocation();
  const detailPath = location.pathname.split('/')[2];
  const disabled = isEdit && Boolean(detailPath);

  const { mutate: createPemilih } = useCreatePemilih();
  const { mutate: updatePemilih } = useUpdatePemilih();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      calon_pemilih_nama: '',
      calon_pemilih_no_telp: '',
      calon_pemilih_foto: null,
      calon_pemilih_foto_ktp: null,
      calon_pemilih_provinsi: '',
      calon_pemilih_kab_kota: '',
      calon_pemilih_kecamatan: '',
      calon_pemilih_kelurahan: '',
      calon_pemilih_status: '',
    },
    resolver: zodResolver(calonPemilihSchema),
  });

  const watchedProvinsiKode = watch('calon_pemilih_provinsi');
  const watchedKabKota = watch('calon_pemilih_kab_kota');
  const watchedKecamatan = watch('calon_pemilih_kecamatan');

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
    if (isEdit && calonPemilih) {
      reset({
        calon_pemilih_nama: calonPemilih.calon_pemilih_nama,
        calon_pemilih_no_telp: calonPemilih.calon_pemilih_no_telp,
        calon_pemilih_foto: calonPemilih.calon_pemilih_foto,
        calon_pemilih_foto_ktp: calonPemilih.calon_pemilih_foto_ktp,
        calon_pemilih_provinsi: calonPemilih.calon_pemilih_provinsi,
        calon_pemilih_kab_kota: calonPemilih.calon_pemilih_kab_kota,
        calon_pemilih_kecamatan: calonPemilih.calon_pemilih_kecamatan,
        calon_pemilih_kelurahan: calonPemilih.calon_pemilih_kelurahan,
        calon_pemilih_status: calonPemilih.calon_pemilih_status,
      });
    }
  }, [calonPemilih, reset, isEdit]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('calon_pemilih_nama', data.calon_pemilih_nama);
    formData.append('calon_pemilih_no_telp', data.calon_pemilih_no_telp);
    formData.append('calon_pemilih_foto', data.calon_pemilih_foto);
    formData.append('calon_pemilih_foto_ktp', data.calon_pemilih_foto_ktp);
    formData.append('calon_pemilih_provinsi', data.calon_pemilih_provinsi);
    formData.append('calon_pemilih_kab_kota', data.calon_pemilih_kab_kota);
    formData.append('calon_pemilih_kecamatan', data.calon_pemilih_kecamatan);
    formData.append('calon_pemilih_kelurahan', data.calon_pemilih_kelurahan);
    formData.append('calon_pemilih_status', data.calon_pemilih_status);

    if (isEdit) {
      updatePemilih({ pemilihId, formData });
    } else {
      createPemilih(formData);
    }
  };

  return (
    <ContentLayout title="Manage Calon Pemilih">
      <Card className="mt-12">
        <CardBody>
          <FormPemilih
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            disabled={disabled}
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
