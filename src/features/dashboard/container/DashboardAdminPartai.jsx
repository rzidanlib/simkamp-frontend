import { UserIcon } from '@heroicons/react/24/solid';
import { CardStatistik, TableMembers } from '../components';

import PropTypes from 'prop-types';
import { useArusKasStatisticsAdmin } from '../api/get-aruskas-statistics';
import { useRelawanStatisticsAdmin, useTableRelawanAdmin } from '../api/get-relawan';

export const DashboardAdminPartai = () => {
  const { data: aruskas, isLoading: loadingArusKas } = useArusKasStatisticsAdmin();
  const { data: totalRelawan, isLoading: loadingTotalRelawan } = useRelawanStatisticsAdmin();
  const { data: relawan, isLoading: loadingRelawan } = useTableRelawanAdmin();

  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <CardStatistik
          title="Total Arus Kas"
          value={aruskas}
          color="blue"
          loading={loadingArusKas}
          prefix="Rp"
        />

        <CardStatistik
          title="Jumlah Relawan"
          value={{
            currentvalue: totalRelawan?.currentvalue,
            newvalue: 'Relawan Baru',
          }}
          loading={loadingTotalRelawan}
          prefix="+"
          color="red"
        />

        {/* <CardStatistik title="Jumlah Anggota" value={data.dashboard.members.length} color="green" />


        <CardStatistik
          title="Jumlah Calon Pemilih"
          value={data.dashboard.members.length}
          color="yellow"
        /> */}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <TableMembers
          TABLE_ROW={relawan}
          TABLE_HEAD={['Relawan', 'Status']}
          title="Data Relawan"
          loading={loadingRelawan}
          icon={<UserIcon className="h-5 w-5" />}
        />
        {/* <TableMembers
          data={data.dashboard.members}
          title="Data Calon Pemilih"
          icon={<UserIcon className="h-5 w-5" />}
        /> */}
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
                  <CardStatistik
                    title="Jumlah Relawan"
                    value={data.dashboard.members.length}
                    color="green"
                  />

                  <CardCharts title="Statistik Relawan" color="green">
                    <LineChart settings={{ color: '#4caf50' }} />
                  </CardCharts>
                </div>

                <TableMembers
                  data={data.dashboard.members}
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
                    value={data.dashboard.members.length}
                    color="red"
                  />

                  <CardCharts title="Statistik Calon Pemilih" color="red">
                    <LineChart settings={{ color: '#f44336' }} />
                  </CardCharts>
                </div>

                <TableMembers
                  data={data.dashboard.members}
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

DashboardAdminPartai.propTypes = {
  data: PropTypes.object,
};
