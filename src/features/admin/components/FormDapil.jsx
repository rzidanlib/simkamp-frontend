import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, Select } from '@/components/Form';

export const FormDapil = ({ handleSubmit, onSubmit, control, errors, data }) => {
  const { provinsi, isLoadingProvinsi, isErrorProvinsi } = data;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end w-full">
        <Button color="green" size="md" type="submit" className="mb-6">
          Simpan Pemilihan
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Controller
          name="dapil_nama"
          control={control}
          render={({ field }) => (
            <Input
              id="dapil_nama"
              label="Daerah Pilihan"
              type="text"
              error={errors.dapil_nama?.message}
              placeholder="Masukan Daerah Pilihan..."
              {...field}
            />
          )}
        />
        <Controller
          name="dapil_provinsi"
          control={control}
          render={({ field }) => (
            <Select
              id="dapil_provinsi"
              label="Partai"
              value={isLoadingProvinsi ? undefined : String(field.value)}
              onChange={(val) => field.onChange(Number(val))}
              error={errors.dapil_provinsi?.message}
              options={
                isLoadingProvinsi
                  ? []
                  : provinsi.map((item) => ({
                      key: item.id,
                      value: String(item.id),
                      label: item.name,
                    }))
              }
              placeholder={isLoadingProvinsi ? 'Loading...' : 'Pilih partai'}
            />
          )}
        />
      </div>
    </form>
  );
};

FormDapil.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  data: PropTypes.object,
};
