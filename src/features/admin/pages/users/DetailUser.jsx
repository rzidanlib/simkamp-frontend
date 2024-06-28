import { ContentLayout } from '@/components/Layout';
import { useParams } from 'react-router-dom';
import { Card, CardBody } from '@material-tailwind/react';
import { Input } from '@/components/Form';
import { useUsers } from '../../api/users/get-users';
import { usePartai } from '../../api/data_master/partai/get-partai';
import { useRoles } from '../../api/data_master/roles/get-roles';
import { LoadingSpinner } from '@/components/Elements/Spinner';
import { Typography } from '@material-tailwind/react';

export const DetailUserPage = () => {
  const { userId } = useParams();
  const { data: userData, isLoading, isError } = useUsers(userId);
  const { data: partaiData } = usePartai(userData?.user_partai_id);
  const { data: rolesData } = useRoles(userData?.user_role_id);

  return (
    <ContentLayout title="Detail Users">
      <Card className="mt-12">
        <CardBody>
          <Typography variant="h4" className="mb-6">
            Detail Pengguna : {userData?.user_nama}
          </Typography>

          {isLoading && (
            <div className="flex flex-col justify-center items-center h-52">
              <LoadingSpinner size="md" />
              <Typography h4>Sedang mengambil data...</Typography>
            </div>
          )}
          {isError && (
            <div className="flex flex-col justify-center items-center h-52">
              <Typography h4>Error saat mengambil data...</Typography>
            </div>
          )}

          {userData && (
            <div className="grid grid-cols-2 gap-6">
              <Input label="Nama" disabled={true} value={userData?.user_nama} />
              <Input label="Email" disabled={true} value={userData?.user_email} />
              <Input label="Password" disabled={true} value={'********'} />
              <Input label="No Hp" disabled={true} value={userData?.user_no_telp} />
              <Input label="Partai" disabled={true} value={partaiData?.partai_label} />
              <Input label="Role" disabled={true} value={rolesData?.role} />
            </div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
