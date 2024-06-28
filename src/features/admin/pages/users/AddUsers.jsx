import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usersSchema } from '../../schema/user-schema';

import { useCreateUser } from '../../api/users/create-user';
import { usePartai } from '../../api/data_master/partai/get-partai';
import { useRoles } from '../../api/data_master/roles/get-roles';

import { Card, CardBody } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { FormUser } from '../../components/FormUser';

export const AddUsersPage = () => {
  const { mutate } = useCreateUser();
  const { data: partaiData, isLoading: partaiLoading, isError: partaiError } = usePartai();
  const { data: rolesData, isLoading: rolesLoading, isError: rolesError } = useRoles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_nama: '',
      user_email: '',
      user_password: '',
      confirmPassword: '',
      user_no_telp: '',
      user_role_id: '',
      user_partai_id: '',
    },
    resolver: zodResolver(usersSchema),
  });

  const onSubmit = (data) => {
    delete data.confirmPassword;
    mutate(data);
  };

  // {
  //   loadingProcess && (
  //     <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
  //       <div className="bg-white p-4 rounded-lg shadow-lg">
  //         <p>Loading...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <ContentLayout title="Tambah User">
      <Card className="mt-12">
        <CardBody>
          <FormUser
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            data={{
              loading: { partaiLoading, rolesLoading },
              error: { partaiError, rolesError },
              partaiData,
              rolesData,
            }}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
