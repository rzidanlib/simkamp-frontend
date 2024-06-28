import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input } from '@/components/Form';

export const FormAgama = ({ handleSubmit, onSubmit, control, errors }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end w-full">
        <Button color="green" size="md" type="submit" className="mb-6">
          Simpan Agama
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Controller
          name="agama"
          control={control}
          render={({ field }) => (
            <Input
              id="agama"
              label="Agama"
              type="text"
              error={errors.agama?.message}
              placeholder="Masukan Agama..."
              {...field}
            />
          )}
        />
      </div>
    </form>
  );
};

FormAgama.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
