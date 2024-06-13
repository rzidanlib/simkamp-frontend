import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';

export const ManageUsersPage = () => {
  return (
    <ContentLayout title="Users">
      <Card className="mt-12">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <h2>Users</h2>
        </CardHeader>
        <CardBody>
          <p>Users content</p>
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
