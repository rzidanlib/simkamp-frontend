import { Input } from '@/components/Form';
import { ContentLayout } from '@/components/Layout';
import { Card, CardBody } from '@material-tailwind/react';

export const AddUsersPage = () => {
  return (
    <ContentLayout title="Tambah User">
      <Card className="mt-12">
        <CardBody>
          <div className="grid grid-cols-2 gap-4">
            <Input labelName="Username" />
            <Input labelName="Nama User" />
            <Input labelName="Email" />
            <Input labelName="No Hp" />
            <Input labelName="Password" />
            <Input labelName="Partai" />
          </div>
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
