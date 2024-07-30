import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useLocation } from 'react-router-dom';

import { useLogin } from '../api/auth';
import { loginSchema } from '../schema/login-schema';

import { Card, Typography } from '@material-tailwind/react';
import { FormLogin } from '../components/FormLogin';
import { FormLoginAdmin } from '../components/FormLoginAdmin';

export const Login = () => {
  const loginMutation = useLogin();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';
  const adminLoginPage = location.pathname === '/auth/login/admin';
  const [isLoginSuccessful, setIsLoginSuccessful] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      role: adminLoginPage ? 'administrator' : '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        setIsLoginSuccessful(true);
      },
    });
  };

  React.useEffect(() => {
    if (isLoginSuccessful) {
      navigate(from, { replace: true });
    }
  }, [isLoginSuccessful, navigate, from]);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="p-6 border-2 border-black shadow-lg">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Selamat Datang! Silahkan masukan Email dan Password
        </Typography>

        {adminLoginPage ? (
          <FormLoginAdmin
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        ) : (
          <FormLogin
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        )}
      </Card>
    </div>
  );
};
