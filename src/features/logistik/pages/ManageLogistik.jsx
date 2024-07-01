import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateLogistik, useUpdateLogistik } from '../api/manage-logistik';
import { useLogistik } from '../api/get-logistik';
import { logistikSchema } from '../schema/pemakaian-schema';

import { ContentLayout } from '@/components/Layout';
import { Card, CardBody } from '@material-tailwind/react';
import { FormLogistik } from '../components/FormLogistik';
import { useLocation } from 'react-router-dom';

export const ManageLogistik = () => {
  const { logistikId } = useParams();
  const isEdit = Boolean(logistikId);
  const { data: logistikData, isLoading, isError } = useLogistik(logistikId);

  const location = useLocation();
  const detailPath = location.pathname.split('/')[2];
  const disabled = isEdit && Boolean(detailPath);

  const { mutate: createLogistik } = useCreateLogistik();
  const { mutate: updateLogistik } = useUpdateLogistik();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      logistik_nama_atribut: '',
      logistik_satuan_unit: '',
      logistik_stok: '',
      logistik_total_harga: '',
    },
    resolver: zodResolver(logistikSchema),
  });

  React.useEffect(() => {
    if (isEdit && logistikData) {
      reset({
        logistik_nama_atribut: logistikData.logistik_nama_atribut,
        logistik_satuan_unit: logistikData.logistik_satuan_unit,
        logistik_stok: String(logistikData.logistik_stok),
        logistik_total_harga: logistikData.logistik_total_harga,
      });
    }
  }, [logistikData, reset, isEdit]);

  const onSubmit = (formData) => {
    if (isEdit) {
      updateLogistik({ logistikId, formData });
    } else {
      createLogistik(formData);
    }
  };

  return (
    <ContentLayout title="Manage Logistik Stok">
      <Card className="mt-12">
        <CardBody>
          <FormLogistik
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            disabled={disabled}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
