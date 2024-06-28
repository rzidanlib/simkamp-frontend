import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  useCreateDapil,
  useUpdateDapil,
} from '@/features/admin/api/data_master/dapil/manage-dapil';
import { useDapil } from '@/features/admin/api/data_master/dapil/get-dapil';
import { useProvinsi } from '@/features/wilayah-administrasi/api/get-wilayah';

import { dapilSchema } from '@/features/admin/schema/data-master-schema';

import { Card, CardBody } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { FormDapil } from '@/features/admin/components/FormDapil';

export const ManageDapil = () => {
  const { dapilId } = useParams();
  const isEdit = Boolean(dapilId);
  const { data: dapil, isLoading, isError } = useDapil(dapilId);
  const { data: provinsi, isLoading: isLoadingProvinsi, isError: isErrorProvinsi } = useProvinsi();

  const { mutate: createDapil } = useCreateDapil();
  const { mutate: updateDapil } = useUpdateDapil();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dapil_nama: '',
      dapil_provinsi: '',
    },
    resolver: zodResolver(dapilSchema),
  });

  React.useEffect(() => {
    if (isEdit && dapil) {
      reset({
        dapil_nama: dapil.dapil_nama,
        dapil_provinsi: dapil.dapil_provinsi,
      });
    }
  }, [dapil, reset, isEdit]);

  const onSubmit = (data) => {
    if (isEdit) {
      updateDapil({ dapilId, data });
    } else {
      createDapil(data);
    }
  };

  return (
    <ContentLayout title="Manage Jenis Pemilihan">
      <Card className="mt-12">
        <CardBody>
          <FormDapil
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            data={{ provinsi, isLoadingProvinsi, isErrorProvinsi }}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
