import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateRole, useUpdateRole } from '@/features/admin/api/data_master/roles/manage-roles';
import { useRoles } from '@/features/admin/api/data_master/roles/get-roles';
import { rolesSchema } from '@/features/admin/schema/data-master-schema';

import { Card, CardBody } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { FormRole } from '@/features/admin/components/FormRole';

export const ManageRolePage = () => {
  const { roleId } = useParams();
  const isEdit = Boolean(roleId);
  const { data: role, isLoading, isError } = useRoles(roleId);

  const { mutate: createRole } = useCreateRole();
  const { mutate: updateRole } = useUpdateRole();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: '',
      role_deskripsi: '',
    },
    resolver: zodResolver(rolesSchema),
  });

  React.useEffect(() => {
    if (isEdit && role) {
      reset({
        role: role.role,
        role_deskripsi: role.role_deskripsi,
      });
    }
  }, [role, reset, isEdit]);

  const onSubmit = (data) => {
    if (isEdit) {
      updateRole({ roleId, data });
    } else {
      createRole(data);
    }
  };

  return (
    <ContentLayout title="Tambah User">
      <Card className="mt-12">
        <CardBody>
          <FormRole
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
