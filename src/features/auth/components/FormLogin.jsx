import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Input, Select } from '@/components/Form';
import { Checkbox, Typography, Button } from '@material-tailwind/react';

export const FormLogin = ({ handleSubmit, onSubmit, control, errors }) => {
  return (
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-1 flex flex-col gap-6">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              id="email"
              label="Email"
              type="text"
              error={errors.email?.message}
              placeholder="Email"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              id="password"
              label="Password"
              type="password"
              error={errors.password?.message}
              placeholder="Password"
              {...field}
            />
          )}
        />
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select
              id="role"
              label="Role"
              value={field.value}
              placeholder="Pilih Role"
              onChange={(val) => field.onChange(val)}
              error={errors.role?.message}
              options={[
                { key: '1', value: 'admin-partai', label: 'Admin Partai' },
                { key: '2', value: 'administrator', label: 'Administrator' },
                { key: '3', value: 'kandidat', label: 'Kandidat' },
                { key: '4', value: 'relawan', label: 'Relawan' },
              ]}
            />
          )}
        />
      </div>

      <Checkbox
        label={
          <Typography variant="small" color="gray" className="flex items-center font-normal">
            Ingat Saya!
          </Typography>
        }
        containerProps={{ className: '-ml-2.5' }}
      />
      <Button className="mt-6" fullWidth type="submit">
        Log In
      </Button>
    </form>
  );
};

FormLogin.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  control: PropTypes.object,
  errors: PropTypes.object,
};
