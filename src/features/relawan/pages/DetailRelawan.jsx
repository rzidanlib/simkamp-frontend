import { ContentLayout } from '@/components/Layout';
import { Typography, Card, CardBody, CardHeader } from '@material-tailwind/react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  getKabupaten,
  getKecamatan,
  getProvinsi,
} from '@/features/wilayah-administrasi/api/get-wilayah';
import { FormTambahRelawan } from '../components';

export const DetailRelawan = () => {
  const [wilayah, setWilayah] = useState({
    provinsi: [],
    kabupaten: [],
    kecamatan: [],
  });

  const [form, setForm] = useState({
    relawan_kandidat_kode: 'kandiat123',
    relawan_nama: 'Fahri Ramadhan',
    relawan_no_telepon: '0987654321',
    relawan_usia: '21',
    relawan_foto: '/images/anies.jpg',
    relawan_jenis_kelamin: 'laki-laki',
    relawan_status: 'aktif',
    relawan_provinsi: '11',
    relawan_kab_kota: '11.01',
    relawan_kecamatan_desa: '11.01.01',
  });

  useEffect(() => {
    const fetchWilayah = async () => {
      const provinsi = await getProvinsi();
      setWilayah({ provinsi: provinsi.value });

      if (form.relawan_provinsi !== '') {
        const kabupaten = await getKabupaten(form.relawan_provinsi);
        setWilayah((prevstate) => ({
          ...prevstate,
          kabupaten: kabupaten.value,
        }));

        if (form.relawan_kab_kota !== '') {
          const kecamatan = await getKecamatan(form.relawan_kab_kota);
          setWilayah((prevstate) => ({
            ...prevstate,
            kecamatan: kecamatan.value,
          }));
        }
      }
    };

    fetchWilayah();
  }, [form.relawan_provinsi, form.relawan_kab_kota]);

  return (
    <ContentLayout title={'detail Relawan'}>
      <Card className="mt-12">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="border-b rounded-none"
        >
          <Typography variant="h4" color="blue-gray">
            Detail Relawan
          </Typography>
          <Typography variant="small" color="blue-gray">
            Informasi detail mengenai data relawan.
          </Typography>
        </CardHeader>

        <CardBody>
          <FormTambahRelawan form={form} disabled={true} wilayah={wilayah} />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
