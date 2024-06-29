import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, InputImage, Select } from '@/components/Form';
import { env } from '@/config/env';

const baseURL = env.BASE_URL;

export const FormQuickCount = ({ handleSubmit, onSubmit, control, errors, disabled, data }) => {
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
            Simpan Quick Count
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 mb-4">
        <Controller
          name="quick_count_foto"
          control={control}
          render={({ field }) => (
            <InputImage
              id="quick_count_foto"
              key="quick_count_foto"
              label="Foto Quick Count"
              imagePath={field.value ? `${baseURL}/${field.value}` : field.value}
              errorMessage={errors.quick_count_foto?.message}
              width="h-60 w-full"
              disabled={disabled}
              {...field}
            />
          )}
        />

        <div />

        <Controller
          name="quick_count_provinsi"
          control={control}
          render={({ field }) => (
            <Select
              id="quick_count_provinsi"
              label="Provinsi Quick Count"
              value={isLoadingProvinsi ? undefined : String(field.value)}
              onChange={(val) => field.onChange(Number(val))}
              error={errors.quick_count_provinsi?.message}
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
          name="quick_count_kab_kota"
          control={control}
          render={({ field }) => (
            <Select
              id="quick_count_kab_kota"
              label="Kab/Kota Quick Count"
              value={isLoadingKabKota ? undefined : String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.quick_count_kab_kota?.message}
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
          name="quick_count_kecamatan"
          control={control}
          render={({ field }) => (
            <Select
              id="quick_count_kecamatan"
              label="Kecamatan Quick Count"
              value={isLoadingKecamatan ? undefined : String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.quick_count_kecamatan?.message}
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
          name="quick_count_kelurahan"
          control={control}
          render={({ field }) => (
            <Select
              id="quick_count_kelurahan"
              label="Kelurahan Quick Count"
              value={isLoadingKelurahan ? undefined : String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.quick_count_kelurahan?.message}
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
          name="quick_count_jumlah_suara"
          control={control}
          render={({ field }) => (
            <Input
              id="quick_count_jumlah_suara"
              label="Jumlah Suara Quick Count"
              type="text"
              error={errors.quick_count_jumlah_suara?.message}
              placeholder="Masukkan jumlah suara..."
              disabled={disabled}
              {...field}
            />
          )}
        />

        <Controller
          name="quick_count_tps"
          control={control}
          render={({ field }) => (
            <Input
              id="quick_count_tps"
              label="TPS Quick Count"
              type="text"
              error={errors.quick_count_tps?.message}
              placeholder="Masukkan TPS..."
              disabled={disabled}
              {...field}
            />
          )}
        />
      </div>
    </form>
  );
};

FormQuickCount.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  data: PropTypes.object,
};
