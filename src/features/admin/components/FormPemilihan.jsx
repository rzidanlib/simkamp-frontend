import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input } from '@/components/Form';

export const FormPemilihan = ({ handleSubmit, onSubmit, control, errors }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end w-full">
        <Button color="green" size="md" type="submit" className="mb-6">
          Simpan Pemilihan
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Controller
          name="jenis_pemilihan"
          control={control}
          render={({ field }) => (
            <Input
              id="jenis_pemilihan"
              label="Jenis Pemilihan"
              type="text"
              error={errors.jenis_pemilihan?.message}
              placeholder="Masukan Jenis Pemilihan..."
              {...field}
            />
          )}
        />
      </div>
    </form>
  );
};

FormPemilihan.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
