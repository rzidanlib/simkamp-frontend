import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';

export const RolesUsersPage = () => {
  return (
    <ContentLayout title="Roles Users">
      <Card className="mt-12">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <h2>Roles Users</h2>
        </CardHeader>
        <CardBody>
          <p>Roles Users content</p>
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
