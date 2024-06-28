import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, InputImage, Select } from '@/components/Form';
import { env } from '@/config/env';

const baseURL = env.BASE_URL;

export const FormKandidat = ({ handleSubmit, onSubmit, control, errors, data, disabled }) => {
  const { agamaData, dapilData, jenisPemilihanData, posisiCalonData } = data;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {disabled ? null : (
        <div className="flex justify-end w-full">
          <Button color="green" size="md" type="submit" className="mb-6">
            Simpan Kandidat
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 mb-4">
        <Controller
          name="kandidat_foto"
          control={control}
          render={({ field }) => (
            <InputImage
              label="Foto Kandidat"
              imagePath={field.value ? `${baseURL}/${field.value}` : undefined}
              errorMessage={errors.kandidat_foto?.message}
              width="h-80 w-80"
              disabled={disabled}
              {...field}
            />
          )}
        />

        <div />

        <Controller
          name="kandidat_nama"
          control={control}
          render={({ field }) => (
            <Input
              id="kandidat_nama"
              label="Nama Kandidat"
              type="text"
              error={errors.kandidat_nama?.message}
              placeholder="Masukkan nama kandidat..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="kandidat_email"
          control={control}
          render={({ field }) => (
            <Input
              id="kandidat_email"
              label="Email Kandidat"
              type="email"
              error={errors.kandidat_email?.message}
              placeholder="Masukkan email kandidat..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        {disabled ? null : (
          <Controller
            name="kandidat_password"
            control={control}
            render={({ field }) => (
              <Input
                id="kandidat_password"
                label="Password Kandidat"
                type="password"
                error={errors.kandidat_password?.message}
                placeholder="Masukkan password kandidat..."
                disabled={disabled}
                {...field}
              />
            )}
          />
        )}

        {disabled ? null : (
          <Controller
            name="konfirmasi_password"
            control={control}
            render={({ field }) => (
              <Input
                id="konfirmasi_password"
                label="Konfirmasi Password"
                type="password"
                error={errors.konfirmasi_password?.message}
                placeholder="Masukkan konfirmasi password..."
                disabled={disabled}
                {...field}
              />
            )}
          />
        )}
        <Controller
          name="kandidat_no_telp"
          control={control}
          render={({ field }) => (
            <Input
              id="kandidat_no_telp"
              label="No. Telepon Kandidat"
              type="text"
              error={errors.kandidat_no_telp?.message}
              placeholder="Masukkan no. telepon kandidat..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="kandidat_agama_id"
          control={control}
          render={({ field }) => (
            <Select
              id="kandidat_agama_id"
              label="Agama Kandidat"
              value={agamaData.isLoadingAgama ? undefined : String(field.value)}
              onChange={(val) => field.onChange(Number(val))}
              error={errors.kandidat_agama_id?.message}
              disabled={disabled}
              options={
                agamaData.isLoadingAgama
                  ? []
                  : agamaData.agama.map((item) => ({
                      key: item.agama_id,
                      value: String(item.agama_id),
                      label: item.agama,
                    }))
              }
              placeholder={agamaData.isLoadingAgama ? 'Loading...' : 'Pilih agama'}
            />
          )}
        />
        <Controller
          name="kandidat_usia"
          control={control}
          render={({ field }) => (
            <Input
              id="kandidat_usia"
              label="Usia Kandidat"
              type="number"
              error={errors.kandidat_usia?.message}
              placeholder="Masukkan usia kandidat..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="kandidat_alamat"
          control={control}
          render={({ field }) => (
            <Input
              id="kandidat_alamat"
              label="Alamat Kandidat"
              type="text"
              error={errors.kandidat_alamat?.message}
              placeholder="Masukkan alamat kandidat..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="kandidat_dapil_id"
          control={control}
          render={({ field }) => (
            <Select
              id="kandidat_dapil_id"
              label="Dapil Kandidat"
              value={dapilData.isLoadingDapil ? undefined : String(field.value)}
              onChange={(val) => field.onChange(Number(val))}
              error={errors.kandidat_dapil_id?.message}
              disabled={disabled}
              options={
                dapilData.isLoadingDapil
                  ? []
                  : dapilData.dapil.map((item) => ({
                      key: item.dapil_id,
                      value: String(item.dapil_id),
                      label: item.dapil_nama,
                    }))
              }
              placeholder={dapilData.isLoadingDapil ? 'Loading...' : 'Pilih dapil'}
            />
          )}
        />
        <Controller
          name="kandidat_jenis_pemilihan_id"
          control={control}
          render={({ field }) => (
            <Select
              id="kandidat_jenis_pemilihan_id"
              label="Jenis Pemilihan Kandidat"
              value={jenisPemilihanData.isLoadingJenisPemilihan ? undefined : String(field.value)}
              onChange={(val) => field.onChange(Number(val))}
              error={errors.kandidat_jenis_pemilihan_id?.message}
              disabled={disabled}
              options={
                jenisPemilihanData.isLoadingJenisPemilihan
                  ? []
                  : jenisPemilihanData.jenisPemilihan.map((item) => ({
                      key: item.jenis_pemilihan_id,
                      value: String(item.jenis_pemilihan_id),
                      label: item.jenis_pemilihan,
                    }))
              }
              placeholder={
                jenisPemilihanData.isLoadingJenisPemilihan ? 'Loading...' : 'Pilih jenis pemilihan'
              }
            />
          )}
        />
        <Controller
          name="kandidat_posisi_calon_tetap_id"
          control={control}
          render={({ field }) => (
            <Select
              id="kandidat_posisi_calon_tetap_id"
              label="Posisi Calon Tetap Kandidat"
              value={posisiCalonData.isLoadingPosisiCalon ? undefined : String(field.value)}
              onChange={(val) => field.onChange(Number(val))}
              error={errors.kandidat_posisi_calon_tetap_id?.message}
              disabled={disabled}
              options={
                posisiCalonData.isLoadingPosisiCalon
                  ? []
                  : posisiCalonData.posisiCalon.map((item) => ({
                      key: item.posisi_calon_tetap_id,
                      value: String(item.posisi_calon_tetap_id),
                      label: item.posisi_calon_tetap,
                    }))
              }
              placeholder={
                posisiCalonData.isLoadingPosisiCalon ? 'Loading...' : 'Pilih posisi calon tetap'
              }
            />
          )}
        />
        <Controller
          name="kandidat_nomor_urut"
          control={control}
          render={({ field }) => (
            <Input
              id="kandidat_nomor_urut"
              label="Nomor Urut Kandidat"
              type="number"
              error={errors.kandidat_nomor_urut?.message}
              placeholder="Masukkan nomor urut kandidat..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="kandidat_jenis_kelamin"
          control={control}
          render={({ field }) => (
            <Select
              id="kandidat_jenis_kelamin"
              label="Jenis Kelamin Kandidat"
              value={String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.kandidat_jenis_kelamin?.message}
              disabled={disabled}
              options={[
                { key: 1, value: 'laki-laki', label: 'Laki-Laki' },
                { key: 2, value: 'perempuan', label: 'Perempuan' },
              ]}
              placeholder="Pilih jenis kelamin"
            />
          )}
        />
      </div>
    </form>
  );
};

FormKandidat.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  data: PropTypes.object,
  disabled: PropTypes.bool,
};
