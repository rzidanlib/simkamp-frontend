import { ContentLayout } from '@/components/Layout';
import {
  DashboardAdmin,
  DashboardAdminPartai,
  DashboardKandidat,
  DashboardRelawan,
} from '../container';
import { useCurrentUser } from '@/features/auth/api/get-current-user';
import localStorageHandler from '@/utils/localStorage';

export const Dashboard = () => {
  const { role } = localStorageHandler.getItem('currentUser');
  const { data: currentUser, isLoading } = useCurrentUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ContentLayout title={'Dashboard'}>
      <div className="mt-10">
        {role === 'kandidat' ? <DashboardKandidat currentKandidat={currentUser} /> : null}
        {role === 'relawan' ? (
          <DashboardRelawan kandidatId={currentUser.relawan_kandidat_id} />
        ) : null}
        {role === 'admin-partai' ? <DashboardAdminPartai /> : null}
        {role === 'administrator' ? <DashboardAdmin /> : null}
      </div>
    </ContentLayout>
  );
};
