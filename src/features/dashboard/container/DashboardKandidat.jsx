import * as React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import { LineChart } from '@/components/Elements/Chart';
import {
  CardCharts,
  CardKandidatBio,
  CardKandidatProfile,
  CardStatistik,
  TableMembers,
} from '../components';
import { Tab, Tabs, TabPanel, TabsBody, TabsHeader } from '@material-tailwind/react';

import PropTypes from 'prop-types';
import { useCurrentUser } from '@/features/auth/api/get-current-user';

export const DashboardKandidat = ({ currentKandidat }) => {
  const [activeTab, setActiveTab] = React.useState('relawan');

  return (
    <>
      {/* Profile Kandidat */}
      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <CardKandidatProfile profile={currentKandidat} />
        <div className="h-full xl:col-span-2">
          <CardKandidatBio profile={currentKandidat} />
        </div>
      </div>

      {/* Chart Statistik Pendukung */}
      {/* <div className="mb-6 space-y-6">
        <Tabs value={activeTab}>
          <TabsHeader className="z-0 xl:w-1/2 mb-4 bg-blue-gray-200">
            <Tab value={'relawan'} onClick={() => setActiveTab('relawan')}>
              Relawan
            </Tab>
            <Tab value={'calon-pemilih'} onClick={() => setActiveTab('calon-pemilih')}>
              Calon Pemilih
            </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value={'relawan'} className="p-0">
              <div className="mb-6 grid xl:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4 items-stretch">
                  <CardStatistik title="Jumlah Relawan" value={data.members.length} color="green" />

                  <CardCharts title="Statistik Relawan" color="green">
                    <LineChart settings={{ color: '#4caf50' }} />
                  </CardCharts>
                </div>

                <TableMembers
                  data={data.members}
                  title="Data Relawan"
                  icon={<UserIcon className="h-5 w-5" />}
                />
              </div>
            </TabPanel>

            <TabPanel value={'calon-pemilih'} className="p-0">
              <div className="mb-6 grid xl:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4 items-stretch">
                  <CardStatistik
                    title="Jumlah Calon Pemilih"
                    value={data.members.length}
                    color="red"
                  />

                  <CardCharts title="Statistik Calon Pemilih" color="red">
                    <LineChart settings={{ color: '#f44336' }} />
                  </CardCharts>
                </div>

                <TableMembers
                  data={data.members}
                  title="Data Statistik"
                  icon={<UserIcon className="h-5 w-5" />}
                />
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div> */}
    </>
  );
};

DashboardKandidat.propTypes = {
  data: PropTypes.object,
};
