import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { env } from '@/config/env';

const baseURL = env.BASE_URL;

export const CardKandidatProfile = ({ profile }) => {
  return (
    <Card className="h-fit">
      <CardHeader className="place-self-center w-fit p-0" floated={false} shadow={false}>
        <img
          src={`${baseURL}/${profile.kandidat_foto}`}
          alt="Foto Kandidat"
          className="h-80 object-cover object-top"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray">
          {profile.kandidat_nama}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {profile.posisi_calon_tetap}
        </Typography>

        <div className="mt-4 grid grid-cols-2 gap-4 cursor-pointer">
          <Typography className="p-2 font-semibold rounded-lg text-white bg-blue-gray-900 shadow-md shadow-gray-900/10">
            No. {profile.kandidat_nomor_urut}
          </Typography>
          <Typography
            className={`p-2 font-semibold rounded-lg text-white bg-indigo-900 shadow-md shadow-gray-900/10 uppercase`}
          >
            {profile.partai_label}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
};

CardKandidatProfile.propTypes = {
  profile: PropTypes.object,
};
