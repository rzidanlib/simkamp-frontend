import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export const PartaiPage = () => {
  return (
    <ContentLayout title="Data Master Partai">
      <Card className="mt-12">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Partai
          </Typography>
          <Link to={'/manage-users/roles/tambah'}>
            <Button color="blue" size="md">
              Tambah Partai
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {/* <TableRoles tableData={data} handleDelete={handleDelete} /> */}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
