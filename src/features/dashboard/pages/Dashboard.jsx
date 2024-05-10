import { LineChart } from '@/components/Elements/Chart';
import { ContentLayout } from '@/components/Layout';
import { data } from '@/data/data-example';
import { CardKandidatBio, CardKandidatProfile } from '../components';
import { Typography } from '@material-tailwind/react';

const dashboard = { ...data.dashboard };

export const Dashboard = () => {
  return (
    <ContentLayout title={'Dashboard'}>
      <div className="mt-10">
        {/* Profile Kandidat */}
        <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <CardKandidatProfile profile={dashboard.profile} />
          <div className="h-full xl:col-span-2">
            <CardKandidatBio profile={dashboard.profile} />
          </div>
        </div>

        {/* Chart Statistik Pendukung */}
        <div className="mb-6 grid xl:grid-cols-2 gap-4">
          <LineChart
            title="Statistik Relawan"
            settings={{ color: '#43a047' }}
            footer={
              <div className="flex md:items-center gap-2">
                <Typography variant="h5" color="blue-gray" className="font-medium">
                  Total Relawan :
                </Typography>
                <Typography variant="h4" color="green" className="font-semibold">
                  500 <span className="text-sm text-black">Orang</span>
                </Typography>
              </div>
            }
          />

          {/* <LineChart
            title="Statistik Calon Pemilih"
            settings={{ color: '#f44336' }}
            footer={
              <div className="flex md:items-center gap-2">
                <Typography variant="h5" color="blue-gray" className="font-medium">
                  Total Calon Pemilih :
                </Typography>
                <Typography variant="h4" color="red" className="font-semibold">
                  500 <span className="text-sm text-black">Orang</span>
                </Typography>
              </div>
            }
          /> */}
        </div>
      </div>
    </ContentLayout>
  );
};
