import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, InputImage } from '@/components/Form';

export const FormPartai = ({ handleSubmit, onSubmit, control, errors }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end w-full">
        <Button color="green" size="md" type="submit" className="mb-6">
          Simpan Partai
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <Controller
          name="partai_label"
          control={control}
          render={({ field }) => (
            <Input
              id="partai_label"
              label="Partai Singkatan"
              type="text"
              error={errors.partai_label?.message}
              placeholder="Masukan singkatan partai..."
              {...field}
            />
          )}
        />
        <Controller
          name="partai_nama"
          control={control}
          render={({ field }) => (
            <Input
              id="partai_nama"
              label="Nama Partai"
              type="text"
              error={errors.partai_nama?.message}
              placeholder="Masukan Nama Partai..."
              {...field}
            />
          )}
        />
        <Controller
          name="partai_nomor"
          control={control}
          render={({ field }) => (
            <Input
              id="partai_nomor"
              label="Nomor Partai"
              type="text"
              error={errors.partai_nomor?.message}
              placeholder="Masukan Nomor Partai..."
              {...field}
            />
          )}
        />
        <Controller
          name="partai_logo"
          control={control}
          error={errors.partai_nomor?.message}
          render={({ field }) => (
            <InputImage
              label="Logo Partai"
              errorMessage={errors.partai_logo?.message}
              width="w-60 h-60"
              {...field}
            />
          )}
        />
      </div>
    </form>
  );
};

FormPartai.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
