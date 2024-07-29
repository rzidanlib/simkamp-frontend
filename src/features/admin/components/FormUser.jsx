import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, Select } from '@/components/Form';

export const FormUser = ({ handleSubmit, onSubmit, control, errors, data }) => {
  const { partaiData, rolesData, loading, error } = data;

  const getRoleLabel = (role) => {
    const customRole = {
      'admin-partai': 'Admin Partai',
      administrator: 'Administrator',
      kandidat: 'Kandidat',
      relawan: 'Relawan',
    };

    return customRole[role] || role;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end w-full">
        <Button color="green" size="md" type="submit" className="mb-6">
          Tambah User
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Controller
          name="user_nama"
          control={control}
          render={({ field }) => (
            <Input
              id="user_nama"
              label="Nama User"
              type="text"
              error={errors.user_nama?.message}
              placeholder="Masukkan nama lengkap"
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
              error={errors.user_email?.message}
              placeholder="contoh@domain.com"
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
              error={errors.user_password?.message}
              placeholder="Buat password yang kuat"
              {...field}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input
              id="confirmPassword"
              label="Konfirmasi Password"
              type="password"
              error={errors.confirmPassword?.message}
              placeholder="Ulangi password Anda"
              {...field}
            />
          )}
        />
        <Controller
          name="user_no_telp"
          control={control}
          render={({ field }) => (
            <Input
              id="user_no_telp"
              label="No HP"
              type="text"
              error={errors.user_no_telp?.message}
              placeholder="08xx-xxxx-xxxx"
              {...field}
            />
          )}
        />
        <Controller
          name="user_partai_id"
          control={control}
          render={({ field }) => (
            <Select
              id="user_partai_id"
              label="Partai"
              value={loading.partaiLoading ? undefined : String(field.value)}
              onChange={(val) => field.onChange(Number(val))}
              error={errors.user_partai_id?.message}
              options={
                loading.partaiLoading
                  ? []
                  : partaiData.map((item) => ({
                      key: item.partai_id,
                      value: String(item.partai_id),
                      label: item.partai_label,
                    }))
              }
              placeholder={loading.partaiLoading ? 'Loading...' : 'Pilih partai'}
            />
          )}
        />
        <Controller
          name="user_role_id"
          control={control}
          render={({ field }) => (
            <Select
              id="user_role_id"
              label="Role"
              value={loading.rolesLoading ? undefined : String(field.value)}
              onChange={(val) => field.onChange(Number(val))}
              error={errors.user_role_id?.message}
              options={
                loading.rolesLoading
                  ? []
                  : rolesData.map((item) => ({
                      key: item.role_id,
                      value: String(item.role_id),
                      label: getRoleLabel(item.role),
                    }))
              }
              placeholder={loading.rolesLoading ? 'Loading...' : 'Pilih Role'}
            />
          )}
        />
      </div>
    </form>
  );
};

FormUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  data: PropTypes.object,
};
