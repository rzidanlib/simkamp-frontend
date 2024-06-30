import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useLocation } from 'react-router-dom';

import { useLogin } from '../api/auth';
import { loginSchema } from '../schema/login-schema';

import { Card, Typography } from '@material-tailwind/react';
import { FormLogin } from '../components/FormLogin';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      role: '',
    },
    resolver: zodResolver(loginSchema),
  });
  const loginMutation = useLogin();

  const onSubmit = (data) => {
    loginMutation.mutate(data);

    navigate(from, { replace: true });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="p-6 border-2 border-black shadow-lg">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Selamat Datang! Silahkan masukan Email dan Password
        </Typography>

        <FormLogin
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </Card>
    </div>
  );
};
