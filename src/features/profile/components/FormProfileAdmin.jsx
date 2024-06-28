import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Input, Select } from '@/components/Form';
import { useRoles } from '@/features/admin/api/data_master/roles/get-roles';
import { LoadingSpinner } from '@/components/Elements/Spinner';
import { Typography } from '@material-tailwind/react';

export const FormProfileAdmin = ({ control, errors, disabled, loadingData }) => {
  const { data: roles, isLoading: loadingRoles } = useRoles();

  const getCustomLabel = (label) => {
    const customLabels = {
      'admin-partai': 'Admin Partai',
      administrator: 'Administrator',
      kandidat: 'Kandidat',
      relawan: 'Relawan',
    };

    return customLabels[label] || label;
  };

  return (
    <form>
      {loadingData ? (
        <div className="h-52 w-full flex flex-col justify-center items-center">
          <LoadingSpinner size="lg" className="mb-4" />
          <Typography color="blue-gray" size="lg">
            Loading...
          </Typography>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          <Controller
            name="user_nama"
            control={control}
            render={({ field }) => (
              <Input
                id="user_nama"
                label="Nama"
                type="text"
                disabled={disabled}
                error={errors.user_nama?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="user_email"
            control={control}
            render={({ field }) => (
              <Input
                id="user_email"
                label="Email"
                type="email"
                disabled={disabled}
                error={errors.user_email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="user_password"
            control={control}
            render={({ field }) => (
              <Input
                id="user_password"
                label="Password"
                type="password"
                placeholder="********"
                disabled={disabled}
                error={errors.user_password?.message}
                {...field}
              />
            )}
          />
          {!disabled && (
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  id="confirmPassword"
                  label="Konfirmasi Password"
                  type="password"
                  placeholder="********"
                  disabled={disabled}
                  error={errors.confirmPassword?.message}
                  {...field}
                />
              )}
            />
          )}
          <Controller
            name="user_no_telp"
            control={control}
            render={({ field }) => (
              <Input
                id="user_no_telp"
                label="No Telpon"
                type="text"
                disabled={disabled}
                error={errors.user_no_telp?.message}
                {...field}
              />
            )}
          />
          {!loadingRoles && roles && (
            <Controller
              name="user_role_id"
              control={control}
              render={({ field }) => (
                <Select
                  id="user_role_id"
                  label="Role"
                  value={String(field.value)}
                  disabled={disabled}
                  placeholder="Pilih Role"
                  error={errors.user_role_id?.message}
                  options={roles.map((item) => ({
                    key: item.role_id,
                    value: String(item.role_id),
                    label: getCustomLabel(item.role),
                  }))}
                  onChange={(val) => field.onChange(Number(val))}
                />
              )}
            />
          )}
          {/* {!loadingPartai && partai && (
          <Controller
            name="user_partai_id"
            control={control}
            render={({ field }) => (
              <Select
                id="user_partai_id"
                label="Partai"
                value={field.value}
                disabled={disabled}
                error={errors.user_partai_id?.message}
                options={partai.map((item) => ({
                  key: item.partai_id,
                  value: item.partai_id,
                  label: item.partai_label,
                }))}
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        )} */}
        </div>
      )}
    </form>
  );
};

FormProfileAdmin.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
  loadingData: PropTypes.bool,
};
