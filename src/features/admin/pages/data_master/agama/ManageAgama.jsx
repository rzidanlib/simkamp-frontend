import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAgama } from '@/features/admin/api/data_master/agama/get-agama';
import {
  useCreateAgama,
  useUpdateAgama,
} from '@/features/admin/api/data_master/agama/manage-agama';
import { agamaSchema } from '@/features/admin/schema/data-master-schema';

import { Card, CardBody } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { FormAgama } from '@/features/admin/components/FormAgama';

export const ManageAgama = () => {
  const { agamaId } = useParams();
  const isEdit = Boolean(agamaId);
  const { data: agama, isLoading, isError } = useAgama(agamaId);

  const { mutate: createAgama } = useCreateAgama();
  const { mutate: updateAgama } = useUpdateAgama();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      agama: '',
    },
    resolver: zodResolver(agamaSchema),
  });

  React.useEffect(() => {
    if (isEdit && agama) {
      reset({
        agama: agama.agama,
      });
    }
  }, [agama, reset, isEdit]);

  const onSubmit = (data) => {
    if (isEdit) {
      updateAgama({ agamaId, data });
    } else {
      createAgama(data);
    }
  };

  return (
    <ContentLayout title="Manage Agama">
      <Card className="mt-12">
        <CardBody>
          <FormAgama
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
