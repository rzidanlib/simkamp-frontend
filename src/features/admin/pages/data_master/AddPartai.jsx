import { Input, InputImage } from '@/components/Form';
import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, Button } from '@material-tailwind/react';
import { Controller, useForm } from 'react-hook-form';
import { useCreatePartai } from '../../api/data_master/create-partai';

export const AddPartaiPage = () => {
  const addPartaiMutation = useCreatePartai();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      partai: '',
      partai_name: '',
      logo_partai: null,
    },
  });

  const onSubmit = (data) => {
    addPartaiMutation.mutate(data);

    // console.log(data);
  };

  return (
    <ContentLayout title="Tambah Partai">
      <Card className="mt-12">
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="partai"
                control={control}
                render={({ field }) => (
                  <Input
                    id="partai"
                    label="Partai"
                    type="text"
                    error={errors.partai?.message}
                    placeholder="Partai"
                    {...field}
                  />
                )}
              />
              <Controller
                name="partai_name"
                control={control}
                render={({ field }) => (
                  <Input
                    id="partai_name"
                    label="Nama Partai"
                    type="text"
                    error={errors.partai_name?.message}
                    placeholder="Nama Partai"
                    {...field}
                  />
                )}
              />
              <Controller
                name="logo_partai"
                control={control}
                render={({ field }) => <InputImage {...field} />}
              />
            </div>

            <Button color="blue" size="md" type="submit" className="mt-4">
              Tambah Partai
            </Button>
          </form>
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
