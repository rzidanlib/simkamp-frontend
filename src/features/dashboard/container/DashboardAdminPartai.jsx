import { ArchiveBoxIcon, BanknotesIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/solid';
import { CardStatistik, TableMembers } from '../components';

import PropTypes from 'prop-types';
import { useArusKasStatisticsAdmin } from '../api/get-aruskas-statistics';
import { useRelawanStatisticsAdmin, useTableRelawanAdmin } from '../api/get-relawan';
import { usePemilihStatisticsAdmin, useTablePemilihAdmin } from '../api/get-pemilih';
import { useTotalLogistikAdmin } from '../api/get-logistik';

export const DashboardAdminPartai = () => {
  const { data: aruskas, isLoading: loadingArusKas } = useArusKasStatisticsAdmin();
  const { data: totalRelawan, isLoading: loadingTotalRelawan } = useRelawanStatisticsAdmin();
  const { data: relawan, isLoading: loadingRelawan } = useTableRelawanAdmin();
  const { data: totalPemilih, isLoading: loadingTotalPemilih } = usePemilihStatisticsAdmin();
  const { data: pemilih, isLoading: loadingPemilih } = useTablePemilihAdmin();
  const { data: totalLogistik, isLoading: loadingTotalLogistik } = useTotalLogistikAdmin();

  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <CardStatistik
          title="Total Arus Kas"
          icon={<BanknotesIcon width={24} />}
          value={aruskas}
          color="blue"
          loading={loadingArusKas}
          prefix="+ Rp"
        />

        <CardStatistik
          title="Jumlah Relawan"
          color="red"
          icon={<UsersIcon width={24} />}
          value={{
            currentvalue: totalRelawan?.currentvalue,
            newvalue: totalRelawan?.currentvalue === 0 ? 'Kosong' : 'Relawan Baru',
          }}
          prefix="+"
          loading={loadingTotalRelawan}
        />
        <CardStatistik
          title="Jumlah Calon Pemilih"
          icon={<UserGroupIcon width={24} />}
          value={{
            currentvalue: totalPemilih?.currentvalue,
            newvalue: totalPemilih?.currentvalue === 0 ? 'Kosong' : 'Calon Pemilih Baru',
          }}
          loading={loadingTotalPemilih}
          prefix="+"
          color="green"
        />
        <CardStatistik
          title="Total Logistik"
          icon={<ArchiveBoxIcon width={24} color="white" />}
          value={totalLogistik}
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
        />
        <TableMembers
          TABLE_ROW={pemilih}
          TABLE_HEAD={['Calon', 'Status']}
          title="Data Calon Pemilih"
          loading={loadingPemilih}
          icon={<UserGroupIcon width={24} />}
        />
      </div>
    </>
  );
};

DashboardAdminPartai.propTypes = {
  data: PropTypes.object,
};
