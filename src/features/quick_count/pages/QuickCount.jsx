import * as React from 'react';

import { Link } from 'react-router-dom';

import { useQuickCountRelawan } from '../api/get-quick-count';
import { useDeleteQuickCount } from '../api/manage-quick-count';

import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';
import { TableQuickCount } from '../components/TableQuickCount';

export const QuickCountPage = () => {
  const { data: quickCount, isLoading, isError } = useQuickCountRelawan();
  const { mutate: deleteQuickCount } = useDeleteQuickCount();

  const handleDelete = React.useCallback(
    (id) => {
      deleteQuickCount(id);
    },
    [deleteQuickCount]
  );

  return (
    <ContentLayout title="Quick Count">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Quick Count
          </Typography>
          <Link to={'/quick-count/tambah'}>
            <Button color="blue" size="md">
              Tambah Quick Count
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableQuickCount
              tableData={quickCount}
              handleDelete={handleDelete}
              isLoading={isLoading}
            />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
