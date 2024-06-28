import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, Textarea } from '@/components/Form';

export const FormRole = ({ handleSubmit, onSubmit, control, errors }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end w-full">
        <Button color="green" size="md" type="submit" className="mb-6">
          Simpan Role
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Input
              id="role"
              label="Role"
              type="text"
              error={errors.role?.message}
              placeholder="Masukan Role"
              {...field}
            />
          )}
        />
        <Controller
          name="role_deskripsi"
          control={control}
          render={({ field }) => (
            <Textarea
              id="role_deskripsi"
              label="Deskripsi Role"
              placeholder="Masukan Deskripsi Role"
              error={errors.role_deskripsi?.message}
              {...field}
            />
          )}
        />
      </div>
    </form>
  );
};

FormRole.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
