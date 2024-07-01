import { UserIcon } from '@heroicons/react/24/solid';
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
        <CardStatistik
          title="Jumlah Calon Pemilih"
          value={{
            currentvalue: totalPemilih?.currentvalue,
            newvalue: 'Calon Pemilih Baru',
          }}
          loading={loadingTotalPemilih}
          prefix="+"
          color="green"
        />
        <CardStatistik
          title="Total Logistik"
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
          icon={<UserIcon className="h-5 w-5" />}
        />
        <TableMembers
          TABLE_ROW={pemilih}
          TABLE_HEAD={['Calon', 'Status']}
          title="Data Calon Pemilih"
          loading={loadingPemilih}
          icon={<UserIcon className="h-5 w-5" />}
        />
      </div>
    </>
  );
};

DashboardAdminPartai.propTypes = {
  data: PropTypes.object,
};
