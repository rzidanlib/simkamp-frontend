import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

export const CardKandidatBio = ({ profile }) => {
  const biodata = [
    { label: 'Usia', bio: `${profile.kandidat_usia} Tahun` },
    { label: 'Jenis Kelamin', bio: profile.kandidat_jenis_kelamin },
    { label: 'Agama', bio: profile.agama },
    { label: 'Alamat', bio: profile.kandidat_alamat },
    { label: 'Dapil', bio: profile.dapil_nama },
    { label: 'Partai', bio: profile.partai_label },
    { label: 'Pemilihan', bio: profile.jenis_pemilihan },
    { label: 'Posisi Calon', bio: profile.posisi_calon_tetap },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="w-fit" color="gray" floated={false} shadow={false}>
        <Typography variant="h6" color="white" className="p-3">
          Profil Kandidat
        </Typography>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          {profile.kandidat_nama}
        </Typography>
        <hr className="mt-3 mb-5" />

        {biodata.map((item, index) => (
          <div key={index} className="flex flex-col xl:flex-row pt-2 border-b border-blue-gray-50">
            <Typography color="blue-gray" className="text-md font-semibold xl:w-1/2">
              {item.label}
            </Typography>
            <Typography color="blue-gray" className="capitalize text-md font-normal xl:w-1/2">
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
