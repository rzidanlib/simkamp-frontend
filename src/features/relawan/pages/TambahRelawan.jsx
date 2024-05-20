import { useState, useEffect } from 'react';
import { ContentLayout } from '@/components/Layout';
import { Typography, Card, CardBody, CardHeader } from '@material-tailwind/react';
import { FormTambah } from '../components';
import {
  getKabupaten,
  getKecamatan,
  getProvinsi,
} from '@/features/wilayah-administrasi/api/get-wilayah';

export const TambahRelawan = () => {
  const [wilayah, setWilayah] = useState({
    provinsi: [],
    kabupaten: [],
    kecamatan: [],
  });

  const [form, setForm] = useState({
    relawan_kandidat_kode: 'kandiat123',
    relawan_nama: '',
    relawan_no_telepon: '',
    relawan_usia: '',
    relawan_foto: null,
    relawan_jenis_kelamin: '',
    relawan_status: 'aktif',
    relawan_provinsi: '',
    relawan_kab_kota: '',
    relawan_kecamatan_desa: '',
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

  const handleImageChange = (relawan_foto) => {
    setForm((prevstate) => ({
      ...prevstate,
      relawan_foto,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setForm((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <ContentLayout title={'Tambah Relawan'}>
      <Card className="mt-12">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="border-b rounded-none"
        >
          <Typography variant="h5" color="blue-gray">
            Form Data Relawan
          </Typography>
          <Typography variant="small" color="blue-gray">
            Lengkapi dan isi form data relawan dibawah ini dengan lengkap.
          </Typography>
        </CardHeader>

        <CardBody>
          <FormTambah
            form={form}
            imageChange={handleImageChange}
            inputChange={handleInputChange}
            selectChange={handleSelectChange}
            wilayah={wilayah}
            submit={handleSubmit}
          />
        </CardBody>
      </Card>
    </ContentLayout>
  );
};
