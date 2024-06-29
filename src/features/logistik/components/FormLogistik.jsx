import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input } from '@/components/Form';

export const FormLogistik = ({ handleSubmit, onSubmit, control, errors, disabled }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {disabled ? null : (
        <div className="flex justify-end w-full">
          <Button color="green" size="md" type="submit" className="mb-6">
            Simpan Logistik
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 mb-4">
        <Controller
          name="logistik_nama_atribut"
          control={control}
          render={({ field }) => (
            <Input
              id="logistik_nama_atribut"
              label="Nama Atribut"
              type="text"
              error={errors.logistik_nama_atribut?.message}
              placeholder="Masukkan nama atribut..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="logistik_satuan_unit"
          control={control}
          render={({ field }) => (
            <Input
              id="logistik_satuan_unit"
              label="Satuan Unit"
              type="text"
              error={errors.logistik_satuan_unit?.message}
              placeholder="Masukkan satuan unit..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="logistik_stok"
          control={control}
          render={({ field }) => (
            <Input
              id="logistik_stok"
              label="Stok"
              type="number"
              error={errors.logistik_stok?.message}
              placeholder="Masukkan jumlah stok..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="logistik_total_harga"
          control={control}
          render={({ field }) => (
            <Input
              id="logistik_total_harga"
              label="Total Harga"
              type="number"
              error={errors.logistik_total_harga?.message}
              placeholder="Masukkan total harga..."
              disabled={disabled}
              {...field}
            />
          )}
        />
      </div>
    </form>
  );
};

FormLogistik.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};
