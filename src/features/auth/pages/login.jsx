import * as React from 'react';
import { Input } from '@/components/Form';
import { Card, Checkbox, Button, Typography } from '@material-tailwind/react';
import { useLogin } from '../api/auth';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schema/login-schema';

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });
  const loginMutation = useLogin();

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="bg-blue-gray-200 h-screen flex justify-center items-center">
      <Card shadow={true} className="p-4">
        <Typography variant="h4" color="blue-gray">
          Log In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 flex flex-col gap-6">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  id="username"
                  label="Username"
                  type="text"
                  error={errors.username?.message}
                  placeholder="Username"
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  error={errors.password?.message}
                  placeholder="Password"
                  {...field}
                />
              )}
            />
          </div>

          <Checkbox
            label={
              <Typography variant="small" color="gray" className="flex items-center font-normal">
                Ingat Saya!
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          <Button className="mt-6" fullWidth type="submit">
            Log In
          </Button>
        </form>
      </Card>
    </div>
  );
};
