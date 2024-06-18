import { Input } from '@/components/Form';
import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, Button } from '@material-tailwind/react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { rolesSchema } from '../../schema/user-schema';
import { Textarea } from '@/components/Form/Textarea';
import { useCreateRoles } from '../../api/users/create-roles';

export const AddRolesPage = () => {
  const rolesMutation = useCreateRoles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_name: '',
      description: '',
    },
    resolver: zodResolver(rolesSchema),
  });

  const onSubmit = (data) => {
    rolesMutation.mutate(data);
  };

  return (
    <ContentLayout title="Tambah User">
      <Card className="mt-12">
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 mb-4">
            <div className="grid grid-rows-1 gap-4">
              <Controller
                name="role_name"
                control={control}
                render={({ field }) => (
                  <Input
                    id="role_name"
                    label="Role"
                    type="text"
                    error={errors.role_name?.message}
                    placeholder="Role"
                    {...field}
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    id="description"
                    label="Deskripsi Role"
                    placeholder="Deskripsi Role"
                    error={errors.description?.message}
                    {...field}
                  />
                )}
              />

              <Button color="blue" size="lg" type="submit" className="max-w-max">
                Tambah Role
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
