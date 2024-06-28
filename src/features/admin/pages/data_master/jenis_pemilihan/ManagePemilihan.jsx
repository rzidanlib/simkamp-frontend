import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  useCreatePemilihan,
  useUpdatePemilihan,
} from '@/features/admin/api/data_master/jenis_pemilihan/manage-pemilihan';
import { useJenisPemilihan } from '@/features/admin/api/data_master/jenis_pemilihan/get-pemilihan';
import { jenisPemilihanSchema } from '@/features/admin/schema/data-master-schema';

import { Card, CardBody } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { FormPemilihan } from '@/features/admin/components/FormPemilihan';

export const ManagePemilihan = () => {
  const { jenisPemilihanId } = useParams();
  const isEdit = Boolean(jenisPemilihanId);
  const { data: pemilihan, isLoading, isError } = useJenisPemilihan(jenisPemilihanId);

  const { mutate: createPemilihan } = useCreatePemilihan();
  const { mutate: updatePemilihan } = useUpdatePemilihan();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jenis_pemilihan: '',
    },
    resolver: zodResolver(jenisPemilihanSchema),
  });

  React.useEffect(() => {
    if (isEdit && pemilihan) {
      reset({
        jenis_pemilihan: pemilihan.jenis_pemilihan,
      });
    }
  }, [pemilihan, reset, isEdit]);

  const onSubmit = (data) => {
    if (isEdit) {
      updatePemilihan({ jenisPemilihanId, data });
    } else {
      createPemilihan(data);
    }
  };

  return (
    <ContentLayout title="Manage Jenis Pemilihan">
      <Card className="mt-12">
        <CardBody>
          <FormPemilihan
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
