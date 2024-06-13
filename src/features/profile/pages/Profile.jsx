import * as React from 'react';
import PropTypes from 'prop-types';
import { useUser } from '@/features/auth/api/get-user';

import { ContentLayout } from '@/components/Layout';
import { Input } from '@/components/Form';
import { Card, CardBody, Button } from '@material-tailwind/react';
import { useUpdateUser } from '@/features/auth/api/update-user';

const EditButtonElement = ({ setDisabled }) => {
  return (
    <>
      <Button color="red" size="md" onClick={() => setDisabled(true)}>
        Batal
      </Button>
      <Button color="green" size="md" type="submit">
        Simpan
      </Button>
    </>
  );
};
EditButtonElement.propTypes = { setDisabled: PropTypes.func };

export const Profile = () => {
  const { data, isLoading } = useUser();
  const updateUser = useUpdateUser();

  const [disabled, setDisabled] = React.useState(true);
  const [form, setForm] = React.useState({
    username: data?.user?.username || '',
    password: '',
    nama_user: data?.user?.nama_user || '',
    email: data?.user?.email || '',
    no_hp: data?.user?.no_hp || '',
  });
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== confirmPassword) {
      alert('Password tidak sama');
      return;
    }

    updateUser.mutate(form);
  };

  return (
    <ContentLayout title={'Profile'}>
      <Card className="mt-12">
        <CardBody>
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4 justify-end items-center mb-5">
                {!disabled ? (
                  <EditButtonElement setDisabled={setDisabled} />
                ) : (
                  <Button color="blue" size="md" onClick={() => setDisabled(false)}>
                    Edit Profile
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  labelName="Username"
                  placeholder="Username"
                  type="text"
                  name="username"
                  disabled={disabled}
                  value={form.username}
                  onChange={handleChange}
                />
                <Input
                  labelName="Nama User"
                  placeholder="Nama User"
                  type="text"
                  name="nama_user"
                  disabled={disabled}
                  value={form.nama_user}
                  onChange={handleChange}
                />
                <Input
                  labelName="Email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  disabled={disabled}
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  labelName="No Hp"
                  placeholder="No Hp"
                  type="text"
                  name="no_hp"
                  disabled={disabled}
                  value={form.no_hp}
                  onChange={handleChange}
                />
                <Input
                  labelName="Password"
                  placeholder="********"
                  type="password"
                  name="password"
                  disabled={disabled}
                  value={form.password}
                  onChange={handleChange}
                />
                <Input
                  labelName="Confirm Password"
                  placeholder="********"
                  type="password"
                  name="confirmPassword"
                  disabled={disabled}
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </form>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
