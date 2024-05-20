import { Modal } from '@/components/Elements/Modal';
import { InputText } from '@/components/Form';
import { Option, Select } from '@material-tailwind/react';
import PropTypes from 'prop-types';

export const ModalFilter = ({ openModal, handleOpenModal }) => {
  return (
    <Modal size="xs" title={'Filter Relawan'} open={openModal} handleOpen={handleOpenModal}>
      <InputText label="Usia" name="usia" type="number" className="mb-3" />
      <div className="mb-3">
        <Select
          label="Jenis Kelamin"
          name="relawan_jenis_kelamin"
          id="relawan_jenis_kelamin"
          // value={form.relawan_jenis_kelamin}
          // onChange={(event) => selectChange('relawan_jenis_kelamin', event)}
          // disabled={disabled}
        >
          <Option value="laki-laki">Laki-laki</Option>
          <Option value="perempuan">Perempuan</Option>
        </Select>
      </div>
      <div className="mb-3">
        <Select
          label="Provinsi"
          name="relawan_provinsi"
          id="relawan_provinsi"
          // value={form.relawan_provinsi}
          // onChange={(value) => selectChange('relawan_provinsi', value)}
          // selected={() => {
          //   const selectedOptions = wilayah.provinsi
          //     ? wilayah.provinsi
          //         .filter((prov) => prov.id === form.relawan_provinsi)
          //         .map((item) => item.name)
          //     : 'provinsi';
          //   return selectedOptions;
          // }}
          // disabled={disabled}
        >
          {/* {wilayah.provinsi ? (
                wilayah.provinsi.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))
              ) : (
                <Option value="">Pilih Provinsi</Option>
              )} */}
          <Option value="">Pilih Kecamatan</Option>
        </Select>
      </div>
      <div className="mb-3">
        <Select
          label="Kabupaten/Kota"
          name="relawan_kab_kota"
          id="relawan_kab_kota"
          defaultValue=""
          // value={form.relawan_kab_kota}
          // onChange={(value) => selectChange('relawan_kab_kota', value)}
          // selected={() => {
          //   const selectedOptions = wilayah.kabupaten
          //     ? wilayah.kabupaten
          //         .filter((prov) => prov.id === form.relawan_kab_kota)
          //         .map((item) => item.name)
          //     : '';
          //   return selectedOptions;
          // }}
          // disabled={disabled}
        >
          {/* {wilayah.kabupaten ? (
                wilayah.kabupaten.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))
              ) : (
                <Option value="">Pilih Kabupaten/Kota</Option>
              )} */}
          <Option value="">Pilih Kabupaten/Kota</Option>
        </Select>
      </div>
      <div className="mb-3">
        <Select
          label="Kecamatan"
          name="relawan_kecamatan_desa"
          id="relawan_kecamatan_desa"
          defaultValue=""
          // value={form.relawan_kecamatan_desa}
          // onChange={(value) => selectChange('relawan_kecamatan_desa', value)}
          // selected={() => {
          //   const selectedOptions = wilayah.kecamatan
          //     ? wilayah.kecamatan
          //         .filter((prov) => prov.id === form.relawan_kecamatan_desa)
          //         .map((item) => item.name)
          //     : '';
          //   return selectedOptions;
          // }}
          // disabled={disabled}
        >
          {/* {wilayah.kecamatan ? (
                wilayah.kecamatan.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))
              ) : (
                <Option value="">Pilih Kecamatan</Option>
              )} */}
          <Option value="">Pilih Kecamatan</Option>
        </Select>
      </div>
      <Select label="Status" name="status" className="mb-3">
        <Option value="aktif">Aktif</Option>
        <Option value="tidak aktif">Tidak Aktif</Option>
      </Select>
    </Modal>
  );
};

ModalFilter.propTypes = {
  openModal: PropTypes.bool,
  handleOpenModal: PropTypes.func,
};
