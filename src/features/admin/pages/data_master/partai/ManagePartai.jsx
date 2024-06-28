import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormPartai } from '@/features/admin/components/FormPartai';
import { usePartai } from '@/features/admin/api/data_master/partai/get-partai';
import { partaiSchema } from '@/features/admin/schema/data-master-schema';
import {
  useCreatePartai,
  useUpdatePartai,
} from '@/features/admin/api/data_master/partai/manage-partai';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody } from '@material-tailwind/react';

export const ManagePartaiPage = () => {
  const { partaiId } = useParams();
  const isEdit = Boolean(partaiId);
  const { data: partai, isLoading, isError } = usePartai(partaiId);

  const { mutate: createPartai } = useCreatePartai();
  const { mutate: updatePartai } = useUpdatePartai();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      partai_label: '',
      partai_nama: '',
      partai_logo: null,
      partai_nomor: '',
    },
    resolver: zodResolver(partaiSchema),
  });

  React.useEffect(() => {
    if (isEdit && partai) {
      reset({
        partai_label: partai.partai_label,
        partai_nama: partai.partai_nama,
        partai_logo: partai.partai_logo,
        partai_nomor: partai.partai_nomor,
      });
    }
  }, [partai, reset, isEdit]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('partai_label', data.partai_label);
    formData.append('partai_nama', data.partai_nama);
    formData.append('partai_logo', data.partai_logo);
    formData.append('partai_nomor', data.partai_nomor);

    if (isEdit) {
      updatePartai({ partaiId, formData });
    } else {
      createPartai(formData);
    }
  };

  return (
    <ContentLayout title="Manage Partai">
      <Card className="mt-12">
        <CardBody>
          <FormPartai
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
