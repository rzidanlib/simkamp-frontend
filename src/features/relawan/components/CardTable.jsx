import { MagnifyingGlassPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Typography,
  Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserPlusIcon } from '@heroicons/react/24/solid';

export const CardTable = ({ children, handleModal }) => {
  return (
    <Card className="h-full w-full mt-12">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex md:flex-row flex-col xl:items-center justify-between gap-2 xl:gap-8">
          <div>
            <Typography variant="h5" color="blue-gray" className="capitalize">
              Data Relawan
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Lihat semua informasi mengenai Relawan.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col sm:flex-row">
            <Link to={'/relawan/tambah'}>
              <Button className="flex items-center gap-3">
                <UserPlusIcon strokeWidth={2} className="h-5 w-5" /> Tambah Relawan
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row xl:items-center gap-4">
          <div className="w-full md:w-72">
            <Input
              size="lg"
              label="Cari Relawan"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          <Button className="flex items-center gap-3" size="md" onClick={handleModal}>
            <MagnifyingGlassPlusIcon strokeWidth={2} className="h-5 w-5" />{' '}
            <span className="hidden md:block">Filter</span>
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-x-auto p-0">{children}</CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

CardTable.propTypes = {
  children: PropTypes.node,
  handleModal: PropTypes.func,
};
