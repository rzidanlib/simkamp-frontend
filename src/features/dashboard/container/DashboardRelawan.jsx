import { CardKandidatBio, CardKandidatProfile, CardStatistik, TableMembers } from '../components';

import PropTypes from 'prop-types';
import { useKandidat } from '@/features/kandidat/api/get-kandidat';
import { useArusKasStatisticsRelawan } from '../api/get-aruskas-statistics';
import { usePemilihStatisticsRelawan, useTablePemilihRelawan } from '../api/get-pemilih';
import { useTotalLogistikRelawan } from '../api/get-logistik';
import { ArchiveBoxIcon, BanknotesIcon, UsersIcon } from '@heroicons/react/24/solid';

export const DashboardRelawan = ({ kandidatId }) => {
  const { data: currentKandidat, isLoading } = useKandidat(kandidatId);
  const { data: aruskas, isLoading: loadingArusKas } = useArusKasStatisticsRelawan();
  const { data: totalPemilih, isLoading: loadingTotalPemilih } = usePemilihStatisticsRelawan();
  const { data: pemilih, isLoading: loadingPemilih } = useTablePemilihRelawan();
  const { data: totalLogistik, isLoading: loadingTotalLogistik } = useTotalLogistikRelawan();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Profile Kandidat */}
      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <CardKandidatProfile profile={currentKandidat} />
        <div className="h-full xl:col-span-2">
          <CardKandidatBio profile={currentKandidat} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <CardStatistik
          title="Total Arus Kas"
          value={aruskas}
          icon={<BanknotesIcon width={24} />}
          color="blue"
          loading={loadingArusKas}
          prefix="+ Rp"
        />
        <CardStatistik
          title="Jumlah Calon Pemilih"
          value={{
            currentvalue: totalPemilih?.currentvalue,
            newvalue: 'Calon Pemilih Baru',
          }}
          icon={<UsersIcon width={24} />}
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

      <div className=" mb-6">
        <TableMembers
          TABLE_ROW={pemilih}
          TABLE_HEAD={['Calon', 'Status']}
          title="Data Calon Pemilih"
          loading={loadingPemilih}
          icon={<UsersIcon width={24} />}
          color="green"
        />
      </div>
    </>
  );
};

DashboardRelawan.propTypes = {
  kandidatId: PropTypes.number,
};
