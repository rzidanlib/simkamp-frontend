import PropTypes from 'prop-types';

import { Controller, useForm } from 'react-hook-form';

import { useRoles } from '@/features/admin/api/data_master/roles/get-roles';
import { useUpdateUser } from '@/features/admin/api/users/update-user';

import Authorization, { userRoles } from '@/lib/authorization';

import { Typography, Button } from '@material-tailwind/react';
import { Input, Select } from '@/components/Form';
import { LoadingSpinner } from '@/components/Elements/Spinner';
import { EditButton } from './EditButton';

export const FormProfileAdmin = ({ disabled, setDisabled, loadingData, userData }) => {
  const { data: roles, isLoading: loadingRoles } = useRoles();

  const { mutate: updateUser } = useUpdateUser();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_nama: userData?.user_nama,
      user_email: userData?.user_email,
      user_password: '',
      confirmPassword: '',
      user_no_telp: userData?.user_no_telp,
    },
  });

  const onSubmit = (data) => {
    delete data.confirmPassword;

    updateUser(data);
  };

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
    <>
      {loadingData ? (
        <div className="h-52 w-full flex flex-col justify-center items-center">
          <LoadingSpinner size="lg" className="mb-4" />
          <Typography color="blue-gray" size="lg">
            Loading...
          </Typography>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center mb-12">
            <Typography variant="h4" color="blue-gray">
              User {userData.user_nama}
            </Typography>

            {disabled ? (
              <Button size="md" onClick={() => setDisabled(false)}>
                Edit Profile
              </Button>
            ) : (
              <EditButton
                setDisabled={setDisabled}
                reset={() => reset()}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
              />
            )}
          </div>

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
            <Authorization allowedRoles={userRoles.adminSistem}>
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
            </Authorization>
          </div>
        </form>
      )}
    </>
  );
};

FormProfileAdmin.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
  loadingData: PropTypes.bool,
  userData: PropTypes.object,
  setDisabled: PropTypes.func,
};
