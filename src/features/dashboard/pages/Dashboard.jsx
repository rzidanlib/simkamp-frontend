import { ContentLayout } from '@/components/Layout';
import { DashboardKandidat, DashboardRelawan } from '../container';
import { useCurrentUser } from '@/features/auth/api/get-current-user';

export const Dashboard = () => {
  const { role } = JSON.parse(localStorage.getItem('currentUser'));
  console.log(role);
  const { data: currentUser, isLoading } = useCurrentUser();

  console.log(currentUser);

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
      </div>
    </ContentLayout>
  );
};
