import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input } from '@/components/Form';

export const FormPosisiCalon = ({ handleSubmit, onSubmit, control, errors }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end w-full">
        <Button color="green" size="md" type="submit" className="mb-6">
          Simpan Posisi Calon
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Controller
          name="posisi_calon_tetap"
          control={control}
          render={({ field }) => (
            <Input
              id="posisi_calon_tetap"
              label="Posisi Calon Tetap"
              type="text"
              error={errors.posisi_calon_tetap?.message}
              placeholder="Masukan Posisi Calon..."
              {...field}
            />
          )}
        />
      </div>
    </form>
  );
};

FormPosisiCalon.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
