import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

export const CardKandidatProfile = ({ profile }) => {
  return (
    <Card className="h-fit">
      <CardHeader className="place-self-center w-fit p-0" floated={false} shadow={false}>
        <img src={profile.foto} alt="Foto Kandidat" className="h-80 object-cover object-top" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray">
          {profile.nama_kandidat}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {profile.status}
        </Typography>

        <div className="mt-4 grid grid-cols-2 gap-4 cursor-pointer">
          <Typography className="p-2 font-semibold rounded-lg text-white bg-blue-gray-900 shadow-md shadow-gray-900/10">
            No. {profile.no_urut}
          </Typography>
          <Typography
            className={`p-2 font-semibold rounded-lg text-white bg-indigo-900 shadow-md shadow-gray-900/10 uppercase`}
          >
            {profile.partai.nama_partai}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
};

CardKandidatProfile.propTypes = {
  profile: PropTypes.object,
};
