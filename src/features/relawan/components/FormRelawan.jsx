import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, InputImage, Select } from '@/components/Form';
import { env } from '@/config/env';

const baseURL = env.BASE_URL;

export const FormRelawan = ({ handleSubmit, onSubmit, control, errors, disabled, data }) => {
  const {
    provinsi,
    isLoadingProvinsi,
    isErrorProvinsi,
    kabKota,
    isLoadingKabKota,
    isErrorKabKota,
  } = data;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {disabled ? null : (
        <div className="flex justify-end w-full">
          <Button color="green" size="md" type="submit" className="mb-6">
            Simpan Relawan
          </Button>
        </div>
      )}

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
  );
};

FormRelawan.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  data: PropTypes.object,
};
