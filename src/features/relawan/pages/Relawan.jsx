import { ContentLayout } from '@/components/Layout';
import { data } from '@/data/data-example';

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  MagnifyingGlassPlusIcon,
} from '@heroicons/react/24/outline';
import { EllipsisVerticalIcon, TrashIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import { Dialog } from '@material-tailwind/react';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TABLE_HEAD = ['No.', 'Nama Relawan', 'Usia', 'Kabupaten/Kota', 'Status', ''];
const TABLE_ROWS = [...data.relawan.TABLE_ROWS];

export const Relawan = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);

  return (
    <ContentLayout title={'Relawan'}>
      <Card className="h-full w-full mt-12">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex md:flex-row flex-col xl:items-center justify-between gap-2 xl:gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Data Relawan
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Lihat semua informasi mengenai relawan.
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col sm:flex-row">
              <Link to={'/relawan/tambah'}>
                <Button className="flex items-center gap-3" size="lg">
                  <UserPlusIcon strokeWidth={2} className="h-5 w-5" /> Tambah Relawan
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row xl:items-center gap-4">
            <div className="w-full md:w-72">
              <Input size="lg" label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
            </div>
            <Button className="flex items-center gap-3" size="md" onClick={handleOpenModal}>
              <MagnifyingGlassPlusIcon strokeWidth={2} className="h-5 w-5" />{' '}
              <span className="hidden md:block">Filter</span>
            </Button>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-auto p-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{' '}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  { relawan_id, relawan_nama, relawan_usia, relawan_kab_kota, relawan_status },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast ? 'px-4 py-2' : 'px-4 py-2 border-b border-blue-gray-50';

                  return (
                    <tr
                      key={relawan_id}
                      className="cursor-pointer transition-colors hover:bg-blue-gray-50/50"
                    >
                      <td className={classes}>
                        <Typography color="blue-gray" className="font-normal">
                          {index + 1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography color="blue-gray" className="font-normal">
                          {relawan_nama}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography color="blue-gray" className="font-normal">
                          {relawan_usia}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography color="blue-gray" className="font-normal">
                          {relawan_kab_kota}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={relawan_status ? 'aktif' : 'tidak aktif'}
                            color={relawan_status ? 'green' : 'blue-gray'}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Aksi">
                          <Menu placement="left-start">
                            <MenuHandler>
                              <IconButton variant="text">
                                <EllipsisVerticalIcon className="h-6 w-6" />
                              </IconButton>
                            </MenuHandler>
                            <MenuList className="p-1">
                              <MenuItem
                                className="flex items-center gap-4"
                                onClick={() => {
                                  alert('Data Dihapus');
                                }}
                              >
                                <TrashIcon strokeWidth={2} className="h-5 w-5 " />

                                <Typography variant="small" color="blue-gray">
                                  Delete
                                </Typography>
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
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

      <Dialog open={openModal} handler={handleOpenModal}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way, it took me twenty
          five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m
          never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpenModal} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpenModal}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </ContentLayout>
  );
};
