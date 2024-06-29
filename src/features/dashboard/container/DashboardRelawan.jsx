import { CardKandidatBio, CardKandidatProfile } from '../components';

import PropTypes from 'prop-types';
import { useCurrentUser } from '@/features/auth/api/get-current-user';
import { useKandidat } from '@/features/kandidat/api/get-kandidat';

export const DashboardRelawan = ({ kandidatId }) => {
  const { data: currentKandidat, isLoading } = useKandidat(kandidatId);

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
    </>
  );
};

DashboardRelawan.propTypes = {
  kandidatId: PropTypes.string,
  data: PropTypes.object,
};
