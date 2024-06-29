import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, InputImage, Select } from '@/components/Form';
import { env } from '@/config/env';

const baseURL = env.BASE_URL;

export const FormPemilih = ({ handleSubmit, onSubmit, control, errors, disabled, data }) => {
  const {
    provinsiData: { provinsi, isLoadingProvinsi, isErrorProvinsi },
    kabKotaData: { kabKota, isLoadingKabKota, isErrorKabKota },
    kecamatanData: { kecamatan, isLoadingKecamatan, isErrorKecamatan },
    kelurahanData: { kelurahan, isLoadingKelurahan, isErrorKelurahan },
  } = data;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {disabled ? null : (
        <div className="flex justify-end w-full">
          <Button color="green" size="md" type="submit" className="mb-6">
            Simpan Calon Pemilih
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 mb-4">
        <Controller
          name="calon_pemilih_foto"
          control={control}
          render={({ field }) => (
            <InputImage
              id="calon_pemilih_foto"
              key="calon_pemilih_foto"
              label="Foto Calon Pemilih"
              imagePath={field.value ? `${baseURL}/${field.value}` : field.value}
              errorMessage={errors.calon_pemilih_foto?.message}
              width="h-60 w-full"
              disabled={disabled}
              {...field}
            />
          )}
        />

        <Controller
          name="calon_pemilih_foto_ktp"
          control={control}
          render={({ field }) => (
            <InputImage
              id="calon_pemilih_foto_ktp"
              key="calon_pemilih_foto_ktp"
              label="Foto KTP Calon Pemilih"
              imagePath={field.value ? `${baseURL}/${field.value}` : field.value}
              errorMessage={errors.calon_pemilih_foto_ktp?.message}
              width="h-60 w-full"
              disabled={disabled}
              {...field}
            />
          )}
        />

        <Controller
          name="calon_pemilih_nama"
          control={control}
          render={({ field }) => (
            <Input
              id="calon_pemilih_nama"
              label="Nama Calon Pemilih"
              type="text"
              error={errors.calon_pemilih_nama?.message}
              placeholder="Masukkan nama calon pemilih..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="calon_pemilih_no_telp"
          control={control}
          render={({ field }) => (
            <Input
              id="calon_pemilih_no_telp"
              label="No. Telepon Calon Pemilih"
              type="text"
              error={errors.calon_pemilih_no_telp?.message}
              placeholder="Masukkan no. telepon calon pemilih..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="calon_pemilih_provinsi"
          control={control}
          render={({ field }) => (
            <Select
              id="calon_pemilih_provinsi"
              label="Provinsi Calon Pemilih"
              value={isLoadingProvinsi ? undefined : String(field.value)}
              onChange={(val) => field.onChange(Number(val))}
              error={errors.calon_pemilih_provinsi?.message}
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
          name="calon_pemilih_kab_kota"
          control={control}
          render={({ field }) => (
            <Select
              id="calon_pemilih_kab_kota"
              label="Kab/Kota Calon Pemilih"
              value={isLoadingKabKota ? undefined : String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.calon_pemilih_kab_kota?.message}
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
          name="calon_pemilih_kecamatan"
          control={control}
          render={({ field }) => (
            <Select
              id="calon_pemilih_kecamatan"
              label="Kecamatan Calon Pemilih"
              value={isLoadingKecamatan ? undefined : String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.calon_pemilih_kecamatan?.message}
              disabled={disabled}
              options={
                isLoadingKecamatan || !kecamatan
                  ? []
                  : kecamatan.map((item) => ({
                      key: item.id,
                      value: String(item.id),
                      label: item.name,
                    }))
              }
              placeholder={isLoadingKecamatan ? 'Loading...' : 'Pilih Kecamatan'}
            />
          )}
        />
        <Controller
          name="calon_pemilih_kelurahan"
          control={control}
          render={({ field }) => (
            <Select
              id="calon_pemilih_kelurahan"
              label="Kelurahan Calon Pemilih"
              value={isLoadingKelurahan ? undefined : String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.calon_pemilih_kelurahan?.message}
              disabled={disabled}
              options={
                isLoadingKelurahan || !kelurahan
                  ? []
                  : kelurahan.map((item) => ({
                      key: item.id,
                      value: String(item.id),
                      label: item.name,
                    }))
              }
              placeholder={isLoadingKelurahan ? 'Loading...' : 'Pilih Kelurahan'}
            />
          )}
        />
        <Controller
          name="calon_pemilih_status"
          control={control}
          render={({ field }) => (
            <Select
              id="calon_pemilih_status"
              label="Status Calon Pemilih"
              value={String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.calon_pemilih_status?.message}
              disabled={disabled}
              options={[
                { key: 1, value: 'memilih', label: 'Memilih' },
                { key: 2, value: 'tidak_memilih', label: 'Tidak Memilih' },
                { key: 2, value: 'ragu', label: 'Ragu-Ragu' },
              ]}
              placeholder="Pilih status"
            />
          )}
        />
      </div>
    </form>
  );
};

FormPemilih.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  data: PropTypes.object,
};
