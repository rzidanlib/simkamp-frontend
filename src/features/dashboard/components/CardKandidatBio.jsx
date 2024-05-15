import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

export const CardKandidatBio = ({ profile }) => {
  const biodata = [
    { label: 'Tempat, Tanggal Lahir', bio: profile.tempat_tgl_lahir },
    { label: 'Usia', bio: profile.usia },
    { label: 'Jenis Kelamin', bio: profile.jenis_kelamin },
    { label: 'Agama', bio: profile.agama },
    { label: 'Alamat', bio: profile.alamat },
    { label: 'Dapil', bio: profile.dapil },
    { label: 'Partai', bio: profile.partai?.deskripsi_partai },
    { label: 'Pemilihan', bio: profile.jenis_pemilu },
    { label: 'Status', bio: profile.status },
    { label: 'No. Telp', bio: profile.no_telp },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="w-fit" color="gray" floated={false} shadow={false}>
        <Typography variant="h5" color="white" className="p-3">
          Profil Kandidat
        </Typography>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          {profile.nama_kandidat}
        </Typography>
        <hr className="mt-3 mb-5" />

        {biodata.map((item, index) => (
          <div key={index} className="flex flex-col xl:flex-row pt-2 border-b border-blue-gray-50">
            <Typography color="blue-gray" className="text-md font-semibold xl:w-1/2">
              {item.label}
            </Typography>
            <Typography color="blue-gray" className="text-md font-normal xl:w-1/2">
              {item.bio}
            </Typography>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

CardKandidatBio.propTypes = {
  profile: PropTypes.object,
};
