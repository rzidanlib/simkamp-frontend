import { ContentLayout } from '@/components/Layout';
import { useParams } from 'react-router-dom';
import { useUserById } from '../../api/users/get-user-id';
import { Card, CardBody } from '@material-tailwind/react';
import { Input } from '@/components/Form';

export const DetailUserPage = () => {
  const { userId } = useParams();
  const { data, isLoading, isError } = useUserById(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <ContentLayout title="Detail Users">
      <Card className="mt-12">
        <CardBody>
          <div className="grid grid-cols-2 gap-4">
            <Input labelName="Username" disabled={true} value={data?.user?.username} />
            <Input labelName="Nama User" disabled={true} value={data?.user?.nama_user} />
            <Input labelName="Email" disabled={true} value={data?.user?.email} />
            <Input labelName="No Hp" disabled={true} value={data?.user?.no_hp} />
            <Input labelName="Password" disabled={true} value={'********'} />
            <Input labelName="Partai" disabled={true} value={data?.user?.partai} />
          </div>
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
