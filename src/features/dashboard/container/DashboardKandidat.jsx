import PropTypes from 'prop-types';

import { CardKandidatBio, CardKandidatProfile, CardStatistik, TableMembers } from '../components';
import { useArusKasStatisticsKandidat } from '../api/get-aruskas-statistics';
import { useRelawanStatisticsKandidat, useTableRelawanKandidat } from '../api/get-relawan';
import { usePemilihStatisticsKandidat, useTablePemilihKandidat } from '../api/get-pemilih';
import { useTotalLogistikKandidat } from '../api/get-logistik';
import { ArchiveBoxIcon, BanknotesIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/solid';

export const DashboardKandidat = ({ currentKandidat }) => {
  const { data: aruskas, isLoading: loadingArusKas } = useArusKasStatisticsKandidat();
  const { data: totalRelawan, isLoading: loadingTotalRelawan } = useRelawanStatisticsKandidat();
  const { data: relawan, isLoading: loadingRelawan } = useTableRelawanKandidat();
  const { data: totalPemilih, isLoading: loadingTotalPemilih } = usePemilihStatisticsKandidat();
  const { data: pemilih, isLoading: loadingPemilih } = useTablePemilihKandidat();
  const { data: totalLogistik, isLoading: loadingTotalLogistik } = useTotalLogistikKandidat();

  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <CardKandidatProfile profile={currentKandidat} />
        <div className="h-full xl:col-span-2">
          <CardKandidatBio profile={currentKandidat} />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <CardStatistik
          title="Total Arus Kas"
          value={aruskas}
          icon={<BanknotesIcon width={24} />}
          color="blue"
          loading={loadingArusKas}
          prefix="+ Rp"
        />

        <CardStatistik
          title="Jumlah Relawan"
          value={{
            currentvalue: totalRelawan?.currentvalue,
            newvalue: 'Relawan Baru',
          }}
          icon={<UsersIcon width={24} />}
          loading={loadingTotalRelawan}
          prefix="+"
          color="red"
        />
        <CardStatistik
          title="Jumlah Calon Pemilih"
          value={{
            currentvalue: totalPemilih?.currentvalue,
            newvalue: 'Calon Pemilih Baru',
          }}
          loading={loadingTotalPemilih}
          icon={<UserGroupIcon width={24} />}
          prefix="+"
          color="green"
        />
        <CardStatistik
          title="Total Logistik"
          value={totalLogistik}
          icon={<ArchiveBoxIcon width={24} color="white" />}
          loading={loadingTotalLogistik}
          prefix="+"
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <TableMembers
          TABLE_ROW={relawan}
          TABLE_HEAD={['Relawan', 'Status']}
          title="Data Relawan"
          loading={loadingRelawan}
          icon={<UsersIcon width={24} />}
          color="red"
        />
        <TableMembers
          TABLE_ROW={pemilih}
          TABLE_HEAD={['Calon', 'Status']}
          title="Data Calon Pemilih"
          loading={loadingPemilih}
          icon={<UserGroupIcon width={24} />}
          color="green"
        />
      </div>
    </>
  );
};

DashboardKandidat.propTypes = {
  currentKandidat: PropTypes.object,
};
