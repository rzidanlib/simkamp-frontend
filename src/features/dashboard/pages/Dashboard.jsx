import { ContentLayout } from '@/components/Layout';
import { data } from '@/data/data-example';
import { DashboardKandidat } from '../container';

const dashboard = { ...data.dashboard };

export const Dashboard = () => {
  return (
    <ContentLayout title={'Dashboard'}>
      <div className="mt-10">
        <DashboardKandidat data={dashboard} />
      </div>
    </ContentLayout>
  );
};
