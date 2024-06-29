import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePemakaian } from '../api/get-pemakaian';
import { useCreatePemakaian, useUpdatePemakaian } from '../api/manage-pemakaian';

import { pemakaianSchema } from '../schema/pemakaian-schema';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody } from '@material-tailwind/react';
import { FormPemakaian } from '../components/FormPemakaian';
import { useLogistikRelawan } from '../api/get-logistik';

export const ManagePemakaian = () => {
  const { pemakaianId } = useParams();
  const isEdit = Boolean(pemakaianId);
  const { data: pemakaianData, isLoading, isError } = usePemakaian(pemakaianId);
  const {
    data: logistikData,
    isLoading: isLoadingLogistik,
    isError: isErrorLogistik,
  } = useLogistikRelawan();

  const { mutate: createPemakaian } = useCreatePemakaian();
  const { mutate: updatePemakaian } = useUpdatePemakaian();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pemakaian_tanggal: '',
      pemakaian_jumlah: '',
      pemakaian_logistik_id: '',
    },
    resolver: zodResolver(pemakaianSchema),
  });

  React.useEffect(() => {
    if (isEdit && pemakaianData) {
      reset({
        pemakaian_tanggal: pemakaianData.pemakaian_tanggal,
        pemakaian_jumlah: String(pemakaianData.pemakaian_jumlah),
        pemakaian_logistik_id: pemakaianData.pemakaian_logistik_id,
      });
    }
  }, [pemakaianData, reset, isEdit]);

  const onSubmit = (formData) => {
    if (isEdit) {
      updatePemakaian({ pemakaianId, formData });
    } else {
      createPemakaian(formData);
    }
  };

  return (
    <ContentLayout title="Manage Pemakaian Logistik">
      <Card className="mt-12">
        <CardBody>
          <FormPemakaian
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            data={{ logistikData, isLoadingLogistik, isErrorLogistik }}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
