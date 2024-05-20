import { InputImage, InputText } from '@/components/Form';
import { Option, Select, Button } from '@material-tailwind/react';
import { generateStaticAccount } from '@/utils/generateStaticAccount';

import PropTypes from 'prop-types';

export const FormTambah = ({
  submit,
  imageChange,
  inputChange,
  selectChange,
  form,
  wilayah,
  disabled,
}) => {
  return (
    <form className="grid md:grid-cols-3 gap-4" onSubmit={submit}>
      <div className="flex flex-col items-start justify-start ">
        <InputImage
          onImageChange={imageChange}
          imagePath={form.relawan_foto ?? ''}
          className="p-4 h-80 w-full"
          disabled={disabled}
        />
      </div>

      <div className="md:col-span-2">
        <div className="grid md:grid-cols-2 gap-4">
          <InputText
            label="Nama Relawan"
            name="relawan_nama"
            onChange={inputChange}
            value={form.relawan_nama}
            disabled={disabled}
            className="col-span-2"
          />
          <InputText
            label="Email"
            name="relawan_email"
            type="email"
            value={generateStaticAccount(form.relawan_nama).email}
            disabled
          />
          <InputText
            label="Password"
            name="relawan_password"
            type="text"
            value={generateStaticAccount(form.relawan_nama).password}
            disabled
          />
          <InputText
            label="No Telp"
            name="relawan_no_telepon"
            type="number"
            onChange={inputChange}
            value={form.relawan_no_telepon}
            disabled={disabled}
          />
          <InputText
            label="Usia"
            name="relawan_usia"
            type="text"
            onChange={inputChange}
            value={form.relawan_usia}
            disabled={disabled}
          />
          <div className="w-full flex flex-col">
            <Select
              label="Jenis Kelamin"
              name="relawan_jenis_kelamin"
              id="relawan_jenis_kelamin"
              value={form.relawan_jenis_kelamin}
              onChange={(event) => selectChange('relawan_jenis_kelamin', event)}
              disabled={disabled}
            >
              <Option value="laki-laki">Laki-laki</Option>
              <Option value="perempuan">Perempuan</Option>
            </Select>
            {/* {error ? <span className="text-red-500 text-sm ">{error}</span> : null} */}
          </div>
          <div className="w-full flex flex-col">
            <Select
              label="Provinsi"
              name="relawan_provinsi"
              id="relawan_provinsi"
              value={form.relawan_provinsi}
              onChange={(value) => selectChange('relawan_provinsi', value)}
              selected={() => {
                const selectedOptions = wilayah.provinsi
                  ? wilayah.provinsi
                      .filter((prov) => prov.id === form.relawan_provinsi)
                      .map((item) => item.name)
                  : 'provinsi';
                return selectedOptions;
              }}
              disabled={disabled}
            >
              {wilayah.provinsi ? (
                wilayah.provinsi.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))
              ) : (
                <Option value="">Pilih Provinsi</Option>
              )}
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <Select
              label="Kabupaten/Kota"
              name="relawan_kab_kota"
              id="relawan_kab_kota"
              defaultValue=""
              value={form.relawan_kab_kota}
              onChange={(value) => selectChange('relawan_kab_kota', value)}
              selected={() => {
                const selectedOptions = wilayah.kabupaten
                  ? wilayah.kabupaten
                      .filter((prov) => prov.id === form.relawan_kab_kota)
                      .map((item) => item.name)
                  : '';
                return selectedOptions;
              }}
              disabled={disabled}
            >
              {wilayah.kabupaten ? (
                wilayah.kabupaten.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))
              ) : (
                <Option value="">Pilih Kabupaten/Kota</Option>
              )}
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <Select
              label="Kecamatan"
              name="relawan_kecamatan_desa"
              id="relawan_kecamatan_desa"
              defaultValue=""
              value={form.relawan_kecamatan_desa}
              onChange={(value) => selectChange('relawan_kecamatan_desa', value)}
              selected={() => {
                const selectedOptions = wilayah.kecamatan
                  ? wilayah.kecamatan
                      .filter((prov) => prov.id === form.relawan_kecamatan_desa)
                      .map((item) => item.name)
                  : '';
                return selectedOptions;
              }}
              disabled={disabled}
            >
              {wilayah.kecamatan ? (
                wilayah.kecamatan.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))
              ) : (
                <Option value="">Pilih Kecamatan</Option>
              )}
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <Select
              label="Jenis Kelamin"
              name="relawan_status"
              id="relawan_status"
              value={form.relawan_status}
              onChange={(event) => selectChange('relawan_status', event)}
              disabled={disabled}
            >
              <Option value="aktif">Aktif</Option>
              <Option value="tidak aktif">Tidak aktif</Option>
            </Select>
            {/* {error ? <span className="text-red-500 text-sm ">{error}</span> : null} */}
          </div>
        </div>

        <div className={`mt-4 flex justify-end ${disabled ? 'hidden' : ''}`}>
          <Button type="submit" className="xl:w-1/3 w-full">
            Tambah Relawan
          </Button>
        </div>
      </div>
    </form>
  );
};

FormTambah.propTypes = {
  submit: PropTypes.func,
  inputChange: PropTypes.func,
  selectChange: PropTypes.func,
  imageChange: PropTypes.func,
  wilayah: PropTypes.object,
  form: PropTypes.object,
  disabled: PropTypes.bool,
};
