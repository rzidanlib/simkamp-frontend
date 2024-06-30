import * as React from 'react';
import PropTypes from 'prop-types';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { env } from '@/config/env';

import { Button, Typography } from '@material-tailwind/react';

import { Input, InputImage, Select } from '@/components/Form';
import { LoadingSpinner } from '@/components/Elements/Spinner';
import { EditButton } from './EditButton';
import { useUpdateRelawan } from '@/features/relawan/api/manage-relawan';
import { relawanUpdateSchema } from '@/features/relawan/schema/relawan-schema';
import { useKabKota, useProvinsi } from '@/features/wilayah-administrasi/api/get-wilayah';

const baseURL = env.BASE_URL;

export const FormProfileRelawan = ({ disabled, setDisabled, userData, loadingData }) => {
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
    resolver: zodResolver(relawanUpdateSchema),
  });

  const watchedProvinsiKode = watch('relawan_provinsi_kode');

  const { data: provinsi, isLoading: isLoadingProvinsi, isError: isErrorProvinsi } = useProvinsi();
  const {
    data: kabKota,
    isLoading: isLoadingKabKota,
    isError: isErrorKabKota,
  } = useKabKota(watchedProvinsiKode);

  React.useEffect(() => {
    if (userData) {
      const defaultValues = {
        relawan_nama: userData.relawan_nama,
        relawan_email: userData.relawan_email,
        relawan_password: '',
        konfirmasi_password: '',
        relawan_no_telp: userData.relawan_no_telp,
        relawan_usia: String(userData.relawan_usia),
        relawan_jenis_kelamin: userData.relawan_jenis_kelamin,
        relawan_foto: userData.relawan_foto,
        relawan_provinsi_kode: userData.relawan_provinsi_kode,
        relawan_kab_kota_kode: userData.relawan_kab_kota_kode,
        relawan_status: userData.relawan_status,
        relawan_role_id: userData.relawan_role_id,
      };

      reset(defaultValues);
    }
  }, [userData, reset]);

  const onSubmit = (data) => {
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

    updateRelawan({ relawanId: userData.relawan_id, formData });
  };

  return (
    <>
      {loadingData ? (
        <div className="h-52 w-full flex flex-col justify-center items-center">
          <LoadingSpinner size="lg" className="mb-4" />
          <Typography color="blue-gray" size="lg">
            Loading...
          </Typography>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center mb-12">
            <Typography variant="h4" color="blue-gray">
              {userData.relawan_nama}
            </Typography>

            {disabled ? (
              <Button size="md" onClick={() => setDisabled(false)}>
                Edit Profile
              </Button>
            ) : (
              <EditButton
                setDisabled={setDisabled}
                reset={() => reset()}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
              />
            )}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <Controller
              name="relawan_foto"
              control={control}
              render={({ field }) => (
                <InputImage
                  label="Foto Relawan"
                  imagePath={field.value ? `${baseURL}/${field.value}` : undefined}
                  errorMessage={errors.relawan_foto?.message}
                  width="h-80 w-80"
                  disabled={disabled}
                  {...field}
                />
              )}
            />

            <div />

            <Controller
              name="relawan_nama"
              control={control}
              render={({ field }) => (
                <Input
                  id="relawan_nama"
                  label="Nama Relawan"
                  type="text"
                  error={errors.relawan_nama?.message}
                  placeholder="Masukkan nama relawan..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            <Controller
              name="relawan_email"
              control={control}
              render={({ field }) => (
                <Input
                  id="relawan_email"
                  label="Email Relawan"
                  type="email"
                  error={errors.relawan_email?.message}
                  placeholder="Masukkan email relawan..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            {disabled ? null : (
              <Controller
                name="relawan_password"
                control={control}
                render={({ field }) => (
                  <Input
                    id="relawan_password"
                    label="Password Relawan"
                    type="password"
                    error={errors.relawan_password?.message}
                    placeholder="Masukkan password relawan..."
                    disabled={disabled}
                    {...field}
                  />
                )}
              />
            )}
            {disabled ? null : (
              <Controller
                name="konfirmasi_password"
                control={control}
                render={({ field }) => (
                  <Input
                    id="konfirmasi_password"
                    label="Konfirmasi Password"
                    type="password"
                    error={errors.konfirmasi_password?.message}
                    placeholder="Masukkan konfirmasi password..."
                    disabled={disabled}
                    {...field}
                  />
                )}
              />
            )}
            <Controller
              name="relawan_no_telp"
              control={control}
              render={({ field }) => (
                <Input
                  id="relawan_no_telp"
                  label="No. Telepon Relawan"
                  type="text"
                  error={errors.relawan_no_telp?.message}
                  placeholder="Masukkan no. telepon relawan..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            <Controller
              name="relawan_usia"
              control={control}
              render={({ field }) => (
                <Input
                  id="relawan_usia"
                  label="Usia Relawan"
                  type="number"
                  error={errors.relawan_usia?.message}
                  placeholder="Masukkan usia relawan..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            <Controller
              name="relawan_jenis_kelamin"
              control={control}
              render={({ field }) => (
                <Select
                  id="relawan_jenis_kelamin"
                  label="Jenis Kelamin Relawan"
                  value={String(field.value)}
                  onChange={(val) => field.onChange(val)}
                  error={errors.relawan_jenis_kelamin?.message}
                  disabled={disabled}
                  options={[
                    { key: 1, value: 'laki-laki', label: 'Laki-Laki' },
                    { key: 2, value: 'perempuan', label: 'Perempuan' },
                  ]}
                  placeholder="Pilih jenis kelamin"
                />
              )}
            />
            <Controller
              name="relawan_provinsi_kode"
              control={control}
              render={({ field }) => (
                <Select
                  id="relawan_provinsi_kode"
                  label="Provinsi"
                  value={isLoadingProvinsi ? undefined : String(field.value)}
                  onChange={(val) => field.onChange(Number(val))}
                  error={errors.relawan_provinsi_kode?.message}
                  disabled={disabled}
                  options={
                    isLoadingProvinsi
                      ? []
                      : provinsi.map((item) => ({
                          key: item.id,
                          value: String(item.id),
                          label: item.name,
                        }))
                  }
                  placeholder={isLoadingProvinsi ? 'Loading...' : 'Pilih Provinsi'}
                />
              )}
            />
            <Controller
              name="relawan_kab_kota_kode"
              control={control}
              render={({ field }) => (
                <Select
                  id="relawan_kab_kota_kode"
                  label="Kab/Kota Relawan"
                  value={isLoadingKabKota ? undefined : String(field.value)}
                  onChange={(val) => field.onChange(val)}
                  error={errors.relawan_kab_kota_kode?.message}
                  disabled={disabled}
                  options={
                    isLoadingKabKota || !kabKota
                      ? []
                      : kabKota.map((item) => ({
                          key: item.id,
                          value: String(item.id),
                          label: item.name,
                        }))
                  }
                  placeholder={isLoadingKabKota ? 'Loading...' : 'Pilih Kab/Kota'}
                />
              )}
            />
            <Controller
              name="relawan_status"
              control={control}
              render={({ field }) => (
                <Select
                  id="relawan_status"
                  label="Status Relawan"
                  value={String(field.value)}
                  onChange={(val) => field.onChange(val)}
                  error={errors.relawan_status?.message}
                  disabled={disabled}
                  options={[
                    { key: 1, value: 'aktif', label: 'Aktif' },
                    { key: 2, value: 'tidak_aktif', label: 'Tidak Aktif' },
                  ]}
                  placeholder="Pilih status"
                />
              )}
            />
          </div>
        </form>
      )}
    </>
  );
};

FormProfileRelawan.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
  loadingData: PropTypes.bool,
  userData: PropTypes.object,
  setDisabled: PropTypes.func,
};
