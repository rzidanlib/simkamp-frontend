import { Input, Select } from '@/components/Form';
import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, Button } from '@material-tailwind/react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usersSchema } from '../../schema/user-schema';
import { useCreateUser } from '../../api/users/create-user';

export const AddUsersPage = () => {
  const userMutation = useCreateUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      no_hp: '',
      partai: '',
      nama_user: '',
      users: '',
      role: '',
    },
    resolver: zodResolver(usersSchema),
  });

  const onSubmit = (data) => {
    delete data.confirmPassword;

    userMutation.mutate(data);
  };

  return (
    <ContentLayout title="Tambah User">
      <Card className="mt-12">
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    id="username"
                    label="Username"
                    type="text"
                    error={errors.username?.message}
                    placeholder="Username"
                    {...field}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    id="email"
                    label="Email"
                    type="email"
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
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    id="confirmPassword"
                    label="Konfirmasi Password"
                    type="password"
                    error={errors.confirmPassword?.message}
                    placeholder="Password"
                    {...field}
                  />
                )}
              />
              <Controller
                name="nama_user"
                control={control}
                render={({ field }) => (
                  <Input
                    id="nama_user"
                    label="Nama User"
                    type="text"
                    error={errors.nama_user?.message}
                    placeholder="Nama User"
                    {...field}
                  />
                )}
              />
              <Controller
                name="no_hp"
                control={control}
                render={({ field }) => (
                  <Input
                    id="no_hp"
                    label="No HP"
                    type="text"
                    error={errors.no_hp?.message}
                    placeholder="No Hp"
                    {...field}
                  />
                )}
              />
              <Controller
                name="partai"
                control={control}
                render={({ field }) => (
                  <Select
                    id="partai"
                    label="Partai"
                    value={field.value}
                    onChange={(val) => field.onChange(val)}
                    error={errors.partai?.message}
                    options={[
                      { key: '1', value: 'PDIP', label: 'Partai Setan' },
                      { key: '2', value: 'PKS', label: 'Partai Malaikat' },
                    ]}
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
                    onChange={(val) => field.onChange(val)}
                    error={errors.role?.message}
                    options={[
                      { key: '1', value: 'administrator', label: 'Administrator' },
                      { key: '2', value: 'admin partai', label: 'Admin Partai' },
                    ]}
                  />
                )}
              />
            </div>

            <Button color="blue" size="lg" type="submit">
              Tambah User
            </Button>
          </form>
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
