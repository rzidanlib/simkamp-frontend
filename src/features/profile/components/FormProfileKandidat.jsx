import * as React from 'react';
import PropTypes from 'prop-types';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { env } from '@/config/env';

import { Button, Typography } from '@material-tailwind/react';

import { Input, InputImage, Select } from '@/components/Form';
import { LoadingSpinner } from '@/components/Elements/Spinner';
import { EditButton } from './EditButton';

import { kandidatUpdateSchema } from '@/features/kandidat/schema/kandidat-schema';
import { useUpdateKandidat } from '@/features/kandidat/api/manage-kandidat';
import { useJenisPemilihan } from '@/features/admin/api/data_master/jenis_pemilihan/get-pemilihan';
import { usePosisiCalon } from '@/features/admin/api/data_master/posisi_calon_tetap/get-posisi-calon';
import { useAgama } from '@/features/admin/api/data_master/agama/get-agama';
import { useDapil } from '@/features/admin/api/data_master/dapil/get-dapil';

const baseURL = env.BASE_URL;

export const FormProfileKandidat = ({ disabled, setDisabled, userData, loadingData }) => {
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
    resolver: zodResolver(kandidatUpdateSchema),
  });

  React.useEffect(() => {
    if (userData) {
      const defaultValues = {
        kandidat_nama: userData.kandidat_nama,
        kandidat_email: userData.kandidat_email,
        kandidat_password: '',
        konfirmasi_password: '',
        kandidat_no_telp: userData.kandidat_no_telp,
        kandidat_agama_id: userData.kandidat_agama_id,
        kandidat_foto: userData.kandidat_foto,
        kandidat_usia: userData.kandidat_usia,
        kandidat_alamat: userData.kandidat_alamat,
        kandidat_dapil_id: userData.kandidat_dapil_id,
        kandidat_jenis_pemilihan_id: userData.kandidat_jenis_pemilihan_id,
        kandidat_posisi_calon_tetap_id: userData.kandidat_posisi_calon_tetap_id,
        kandidat_jenis_kelamin: userData.kandidat_jenis_kelamin,
        kandidat_role_id: userData.kandidat_role_id,
        kandidat_nomor_urut: String(userData.kandidat_nomor_urut),
      };
      reset(defaultValues);
    }
  }, [userData, reset]);

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

    updateKandidat({ kandidatId: userData.kandidat_id, formData });
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
              {userData.kandidat_nama}
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
              name="kandidat_foto"
              control={control}
              render={({ field }) => (
                <>
                  <InputImage
                    label="Foto Kandidat"
                    imagePath={field.value ? `${baseURL}/${field.value}` : undefined}
                    errorMessage={errors.kandidat_foto?.message}
                    width="h-80 w-80"
                    disabled={disabled}
                    {...field}
                  />
                </>
              )}
            />

            <div />

            <Controller
              name="kandidat_nama"
              control={control}
              render={({ field }) => (
                <Input
                  id="kandidat_nama"
                  label="Nama Kandidat"
                  type="text"
                  error={errors.kandidat_nama?.message}
                  placeholder="Masukkan nama kandidat..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            <Controller
              name="kandidat_email"
              control={control}
              render={({ field }) => (
                <Input
                  id="kandidat_email"
                  label="Email Kandidat"
                  type="email"
                  error={errors.kandidat_email?.message}
                  placeholder="Masukkan email kandidat..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            {disabled ? null : (
              <Controller
                name="kandidat_password"
                control={control}
                render={({ field }) => (
                  <Input
                    id="kandidat_password"
                    label="Password Kandidat"
                    type="password"
                    error={errors.kandidat_password?.message}
                    placeholder="Masukkan password kandidat..."
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
              name="kandidat_no_telp"
              control={control}
              render={({ field }) => (
                <Input
                  id="kandidat_no_telp"
                  label="No. Telepon Kandidat"
                  type="text"
                  error={errors.kandidat_no_telp?.message}
                  placeholder="Masukkan no. telepon kandidat..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            <Controller
              name="kandidat_agama_id"
              control={control}
              render={({ field }) => (
                <Select
                  id="kandidat_agama_id"
                  label="Agama Kandidat"
                  value={isLoadingAgama ? undefined : String(field.value)}
                  onChange={(val) => field.onChange(Number(val))}
                  error={errors.kandidat_agama_id?.message}
                  disabled={disabled}
                  options={
                    isLoadingAgama
                      ? []
                      : agama.map((item) => ({
                          key: item.agama_id,
                          value: String(item.agama_id),
                          label: item.agama,
                        }))
                  }
                  placeholder={isLoadingAgama ? 'Loading...' : 'Pilih agama'}
                />
              )}
            />
            <Controller
              name="kandidat_usia"
              control={control}
              render={({ field }) => (
                <Input
                  id="kandidat_usia"
                  label="Usia Kandidat"
                  type="number"
                  error={errors.kandidat_usia?.message}
                  placeholder="Masukkan usia kandidat..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            <Controller
              name="kandidat_alamat"
              control={control}
              render={({ field }) => (
                <Input
                  id="kandidat_alamat"
                  label="Alamat Kandidat"
                  type="text"
                  error={errors.kandidat_alamat?.message}
                  placeholder="Masukkan alamat kandidat..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            <Controller
              name="kandidat_dapil_id"
              control={control}
              render={({ field }) => (
                <Select
                  id="kandidat_dapil_id"
                  label="Dapil Kandidat"
                  value={isLoadingDapil ? undefined : String(field.value)}
                  onChange={(val) => field.onChange(Number(val))}
                  error={errors.kandidat_dapil_id?.message}
                  disabled={disabled}
                  options={
                    isLoadingDapil
                      ? []
                      : dapil.map((item) => ({
                          key: item.dapil_id,
                          value: String(item.dapil_id),
                          label: item.dapil_nama,
                        }))
                  }
                  placeholder={isLoadingDapil ? 'Loading...' : 'Pilih dapil'}
                />
              )}
            />
            <Controller
              name="kandidat_jenis_pemilihan_id"
              control={control}
              render={({ field }) => (
                <Select
                  id="kandidat_jenis_pemilihan_id"
                  label="Jenis Pemilihan Kandidat"
                  value={isLoadingJenisPemilihan ? undefined : String(field.value)}
                  onChange={(val) => field.onChange(Number(val))}
                  error={errors.kandidat_jenis_pemilihan_id?.message}
                  disabled={disabled}
                  options={
                    isLoadingJenisPemilihan
                      ? []
                      : jenisPemilihan.map((item) => ({
                          key: item.jenis_pemilihan_id,
                          value: String(item.jenis_pemilihan_id),
                          label: item.jenis_pemilihan,
                        }))
                  }
                  placeholder={isLoadingJenisPemilihan ? 'Loading...' : 'Pilih jenis pemilihan'}
                />
              )}
            />
            <Controller
              name="kandidat_posisi_calon_tetap_id"
              control={control}
              render={({ field }) => (
                <Select
                  id="kandidat_posisi_calon_tetap_id"
                  label="Posisi Calon Tetap Kandidat"
                  value={isLoadingPosisiCalon ? undefined : String(field.value)}
                  onChange={(val) => field.onChange(Number(val))}
                  error={errors.kandidat_posisi_calon_tetap_id?.message}
                  disabled={disabled}
                  options={
                    isLoadingPosisiCalon
                      ? []
                      : posisiCalon.map((item) => ({
                          key: item.posisi_calon_tetap_id,
                          value: String(item.posisi_calon_tetap_id),
                          label: item.posisi_calon_tetap,
                        }))
                  }
                  placeholder={isLoadingPosisiCalon ? 'Loading...' : 'Pilih posisi calon tetap'}
                />
              )}
            />
            <Controller
              name="kandidat_nomor_urut"
              control={control}
              render={({ field }) => (
                <Input
                  id="kandidat_nomor_urut"
                  label="Nomor Urut Kandidat"
                  type="number"
                  error={errors.kandidat_nomor_urut?.message}
                  placeholder="Masukkan nomor urut kandidat..."
                  disabled={disabled}
                  {...field}
                />
              )}
            />
            <Controller
              name="kandidat_jenis_kelamin"
              control={control}
              render={({ field }) => (
                <Select
                  id="kandidat_jenis_kelamin"
                  label="Jenis Kelamin Kandidat"
                  value={String(field.value)}
                  onChange={(val) => field.onChange(val)}
                  error={errors.kandidat_jenis_kelamin?.message}
                  disabled={disabled}
                  options={[
                    { key: 1, value: 'laki-laki', label: 'Laki-Laki' },
                    { key: 2, value: 'perempuan', label: 'Perempuan' },
                  ]}
                  placeholder="Pilih jenis kelamin"
                />
              )}
            />
          </div>
        </form>
      )}
    </>
  );
};

FormProfileKandidat.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
  loadingData: PropTypes.bool,
  userData: PropTypes.object,
  setDisabled: PropTypes.func,
};
