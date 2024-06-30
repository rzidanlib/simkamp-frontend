import PropTypes from 'prop-types';

import { CardKandidatBio, CardKandidatProfile, CardStatistik } from '../components';
import { useArusKasStatisticsKandidat } from '../api/get-aruskas-statistics';

export const DashboardKandidat = ({ currentKandidat }) => {
  const { data: aruskas, isLoading: loadingArusKas } = useArusKasStatisticsKandidat();

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
          color="blue"
          loading={loadingArusKas}
          prefix="Rp"
        />

        {/* <CardStatistik title="Jumlah Anggota" value={data.dashboard.members.length} color="green" />

        <CardStatistik title="Jumlah Relawan" value={data.dashboard.members.length} color="red" />

        <CardStatistik
          title="Jumlah Calon Pemilih"
          value={data.dashboard.members.length}
          color="yellow"
        /> */}
      </div>
    </>
  );
};

DashboardKandidat.propTypes = {
  currentKandidat: PropTypes.object,
};
