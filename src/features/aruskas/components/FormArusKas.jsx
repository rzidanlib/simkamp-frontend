import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, InputImage, Select } from '@/components/Form';
import { env } from '@/config/env';
import { InputDate } from '@/components/Form/InputDate';

const baseURL = env.BASE_URL;

export const FormArusKas = ({ handleSubmit, onSubmit, control, errors, disabled }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {disabled ? null : (
        <div className="flex justify-end w-full">
          <Button color="green" size="md" type="submit" className="mb-6">
            Simpan ArusKas
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 mb-4">
        <Controller
          name="aruskas_foto_kuitansi"
          control={control}
          render={({ field }) => (
            <InputImage
              id="aruskas_foto_kuitansi"
              key="aruskas_foto_kuitansi"
              label="Foto Kuitansi"
              imagePath={field.value ? `${baseURL}/${field.value}` : field.value}
              errorMessage={errors.aruskas_foto_kuitansi?.message}
              width="h-60 w-full"
              disabled={disabled}
              {...field}
            />
          )}
        />
        <div />

        <Controller
          name="aruskas_kategori"
          control={control}
          render={({ field }) => (
            <Select
              id="aruskas_kategori"
              label="Kategori"
              value={String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.aruskas_kategori?.message}
              disabled={disabled}
              options={[
                { key: 'kategori1', value: 'pemasukan', label: 'Pemasukan' },
                { key: 'kategori2', value: 'pengeluaran', label: 'Pengeluaran' },
              ]}
              placeholder="Pilih Kategori"
            />
          )}
        />
        <Controller
          name="aruskas_detail"
          control={control}
          render={({ field }) => (
            <Input
              id="aruskas_detail"
              label="Detail"
              type="text"
              error={errors.aruskas_detail?.message}
              placeholder="Masukkan detail..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="aruskas_catatan"
          control={control}
          render={({ field }) => (
            <Input
              id="aruskas_catatan"
              label="Catatan"
              type="text"
              error={errors.aruskas_catatan?.message}
              placeholder="Masukkan catatan (opsional)..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="aruskas_jumlah"
          control={control}
          render={({ field }) => (
            <Input
              id="aruskas_jumlah"
              label="Jumlah"
              type="number"
              error={errors.aruskas_jumlah?.message}
              placeholder="Masukkan jumlah..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="aruskas_tanggal"
          control={control}
          render={({ field }) => (
            <InputDate
              id="aruskas_tanggal"
              label="Tanggal"
              placeholder="Pilih tanggal"
              error={errors.aruskas_tanggal?.message}
              disabled={disabled}
              {...field}
            />
          )}
        />
      </div>
    </form>
  );
};

FormArusKas.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  data: PropTypes.object,
};
