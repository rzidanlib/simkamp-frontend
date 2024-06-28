import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePosisiCalon } from '@/features/admin/api/data_master/posisi_calon_tetap/get-posisi-calon';
import {
  useCreatePosisiCalon,
  useUpdatePosisiCalon,
} from '@/features/admin/api/data_master/posisi_calon_tetap/manage-posisi-calon';
import { posisiCalonSchema } from '@/features/admin/schema/data-master-schema';

import { Card, CardBody } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { FormPosisiCalon } from '@/features/admin/components/FormPosisiCalon';

export const ManagePosisiCalon = () => {
  const { posisiCalonId } = useParams();
  const isEdit = Boolean(posisiCalonId);
  const { data: posisiCalon, isLoading, isError } = usePosisiCalon(posisiCalonId);

  const { mutate: createPosisiCalon } = useCreatePosisiCalon();
  const { mutate: updatePosisiCalon } = useUpdatePosisiCalon();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      posisi_calon_tetap: '',
    },
    resolver: zodResolver(posisiCalonSchema),
  });

  React.useEffect(() => {
    if (isEdit && posisiCalon) {
      reset({
        posisi_calon_tetap: posisiCalon.posisi_calon_tetap,
      });
    }
  }, [posisiCalon, reset, isEdit]);

  const onSubmit = (data) => {
    if (isEdit) {
      updatePosisiCalon({ posisiCalonId, data });
    } else {
      createPosisiCalon(data);
    }
  };

  return (
    <ContentLayout title="Manage Posisi Calon">
      <Card className="mt-12">
        <CardBody>
          <FormPosisiCalon
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
