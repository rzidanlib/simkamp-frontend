import * as React from 'react';

import localStorageHandler from '@/utils/localStorage';
import { useCurrentUser } from '@/features/auth/api/get-current-user';

import { Card, CardBody } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { FormProfileAdmin } from '../components/FormProfileAdmin';
import { FormProfileKandidat } from '../components/FormProfileKandidat';

export const ProfilePage = () => {
  const [disabled, setDisabled] = React.useState(true);
  const { data: userData, isLoading } = useCurrentUser();
  const user = localStorageHandler.getItem('currentUser');

  return (
    <ContentLayout title="Profile Admin">
      <Card className="mt-12">
        <CardBody>
          {user.role === 'admin-partai' || user.role === 'administrator' ? (
            <FormProfileAdmin
              disabled={disabled}
              loadingData={isLoading}
              userData={userData}
              setDisabled={setDisabled}
            />
          ) : null}

          {user.role === 'kandidat' ? (
            <FormProfileKandidat
              disabled={disabled}
              loadingData={isLoading}
              userData={userData}
              setDisabled={setDisabled}
            />
          ) : null}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
