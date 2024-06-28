import * as React from 'react';

import localStorageHandler from '@/utils/localStorage';
import { useCurrentUser } from '@/features/auth/api/get-current-user';
import { useForm } from 'react-hook-form';

import { Card, CardBody, Button, Typography } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { EditButton } from '../components/EditButton';
import { FormProfileAdmin } from '../components/FormProfileAdmin';

export const ProfilePage = () => {
  const [disabled, setDisabled] = React.useState(true);
  const { data, isLoading } = useCurrentUser();
  const user = localStorageHandler.getItem('currentUser');

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_nama: data.user_nama,
      user_email: data.user_email,
      user_password: '',
      confirmPassword: '',
      user_no_telp: data.user_no_telp,
      user_role_id: data.user_role_id,
    },
  });

  const onSubmit = (data) => {
    delete data.confirmPassword;

    console.log(data);
  };

  return (
    <ContentLayout title="Profile Admin">
      <Card className="mt-12">
        <CardBody>
          <div className="flex justify-between items-center mb-12">
            <Typography variant="h4" color="blue-gray">
              User {user.name}
            </Typography>

            {disabled ? (
              <Button size="md" onClick={() => setDisabled(false)}>
                Edit Profile
              </Button>
            ) : (
              <EditButton
                setDisabled={setDisabled}
                reset={() => reset()}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
              />
            )}
          </div>

          {user.role === 'administrator' || user.role === 'admin-partai' ? (
            <FormProfileAdmin
              control={control}
              errors={errors}
              disabled={disabled}
              loadingData={isLoading}
            />
          ) : (
            <div>kosong</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );

  // return (
  //   <ContentLayout title={'Profile'}>
  //     <Card className="mt-12">
  //       <CardBody>
  //         {isLoading ? (
  //           <p>Loading ...</p>
  //         ) : (
  //           <form onSubmit={handleSubmit}>
  //             <div className="flex gap-4 justify-end items-center mb-5">
  //               {!disabled ? (
  //                 <EditButtonElement setDisabled={setDisabled} />
  //               ) : (
  //                 <Button color="blue" size="md" onClick={() => setDisabled(false)}>
  //                   Edit Profile
  //                 </Button>
  //               )}
  //             </div>

  //             <div className="grid grid-cols-2 gap-4">
  //               <Input
  //                 labelName="Username"
  //                 placeholder="Username"
  //                 type="text"
  //                 name="username"
  //                 disabled={disabled}
  //                 value={form.username}
  //                 onChange={handleChange}
  //               />
  //               <Input
  //                 labelName="Nama User"
  //                 placeholder="Nama User"
  //                 type="text"
  //                 name="nama_user"
  //                 disabled={disabled}
  //                 value={form.nama_user}
  //                 onChange={handleChange}
  //               />
  //               <Input
  //                 labelName="Email"
  //                 placeholder="Email"
  //                 type="email"
  //                 name="email"
  //                 disabled={disabled}
  //                 value={form.email}
  //                 onChange={handleChange}
  //               />
  //               <Input
  //                 labelName="No Hp"
  //                 placeholder="No Hp"
  //                 type="text"
  //                 name="no_hp"
  //                 disabled={disabled}
  //                 value={form.no_hp}
  //                 onChange={handleChange}
  //               />
  //               <Input
  //                 labelName="Password"
  //                 placeholder="********"
  //                 type="password"
  //                 name="password"
  //                 disabled={disabled}
  //                 value={form.password}
  //                 onChange={handleChange}
  //               />
  //               <Input
  //                 labelName="Confirm Password"
  //                 placeholder="********"
  //                 type="password"
  //                 name="confirmPassword"
  //                 disabled={disabled}
  //                 value={confirmPassword}
  //                 onChange={handleChange}
  //               />
  //             </div>
  //           </form>
  //         )}
  //       </CardBody>
  //     </Card>
  //   </ContentLayout>
  // );
};
