import { TableRelawan, useRelawan } from '@/features/relawan';

import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';

export const RelawanPage = () => {
  const { data, isLoading, isError } = useRelawan();

  return (
    <ContentLayout title="Relawan">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Relawan
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          {!isError ? (
            <TableRelawan
              tableData={data}
              isLoading={isLoading}
              actions={{ detailPath: `/manage-users/relawan` }}
            />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
