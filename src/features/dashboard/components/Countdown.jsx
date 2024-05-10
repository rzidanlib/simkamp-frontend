import { data } from '@/data/data-example';
import { Card, CardBody, Typography, Badge } from '@material-tailwind/react';

const countdown = { ...data.dashboard.hitung_mundur };

export const Countdown = () => {
  return (
    <Card className="border border-blue-gray-100 shadow-sm mb-4">
      <CardBody>
        <div className="flex justify-between items-center">
          <Typography variant="h5">Hitung Mundur Pilkada : </Typography>
          <Badge className="animate-pulse">
            <Typography
              variant="h6"
              color="green"
              className="p-2 bg-green-500 text-white rounded-md"
            >
              {countdown.tanggal}
            </Typography>
          </Badge>
        </div>

        <div className="grid xl:grid-cols-5 gap-2 mt-4">
          {countdown.countdown.map((item, index) => (
            <div key={index} className="px-4 py-2 text-center h-32 bg-green-50 rounded-md">
              <Typography variant="h1" color="green" className="mt-2 ">
                {item.waktu}
              </Typography>
              <Typography variant="h4" color="gray" className="mb-1">
                {item.penanggalan}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
