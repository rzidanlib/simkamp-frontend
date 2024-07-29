import { TableKandidat, useKandidat } from '@/features/kandidat';

import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { ContentLayout } from '@/components/Layout';

export const KandidatPage = () => {
  const { data: kandidat, isLoading, isError } = useKandidat();

  return (
    <ContentLayout title="Kandidat">
      <Card className="mt-12 p-4">
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-0 mt-0 mb-4 rounded-none flex justify-between items-center"
        >
          <Typography variant="h4" color="blue-gray">
            Table Kandidat
          </Typography>
        </CardHeader>
        <CardBody className="p-0 overflow-x-scroll">
          {!isError ? (
            <TableKandidat
              tableData={kandidat}
              isLoading={isLoading}
              actions={{ detailPath: `/manage-users/kandidat` }}
            />
          ) : (
            <div className="h-10 flex justify-center items-center">{isError}</div>
          )}
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
