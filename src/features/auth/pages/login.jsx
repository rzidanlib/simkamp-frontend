import * as React from 'react';
import { Input } from '@/components/Form';
import { Card, Checkbox, Button, Typography } from '@material-tailwind/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLogin } from '../api/auth';

export const Login = () => {
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });
  const loginMutation = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(form);
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

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              labelName="Username"
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <Input
              labelName="Password"
              type="password"
              placeholder="*******"
              name="password"
              onChange={handleChange}
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
