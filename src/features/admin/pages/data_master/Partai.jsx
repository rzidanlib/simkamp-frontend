import { ContentLayout } from '@/components/Layout';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { TablePartai } from '../../components/TablePartai';

export const PartaiPage = () => {
  const data = [];

  return (
    <ContentLayout title="Data Master Partai">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Partai
          </Typography>
          <Link to={'/data-master/partai/tambah'}>
            <Button color="blue" size="md">
              Tambah Partai
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          <TablePartai tableData={data} />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
