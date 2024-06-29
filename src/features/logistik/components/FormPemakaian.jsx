import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { Button } from '@material-tailwind/react';
import { Input, Select } from '@/components/Form';
import { InputDate } from '@/components/Form/InputDate';

export const FormPemakaian = ({ handleSubmit, onSubmit, control, errors, disabled, data }) => {
  const { logistikData, isLoadingLogistik, isErrorLogistik } = data;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {disabled ? null : (
        <div className="flex justify-end w-full">
          <Button color="green" size="md" type="submit" className="mb-6">
            Simpan Pemakaian
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 mb-4">
        <Controller
          name="pemakaian_tanggal"
          control={control}
          render={({ field }) => (
            <InputDate
              id="pemakaian_tanggal"
              label="Tanggal"
              placeholder="Pilih tanggal pemakaian"
              error={errors.pemakaian_tanggal?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="pemakaian_jumlah"
          control={control}
          render={({ field }) => (
            <Input
              id="pemakaian_jumlah"
              label="Jumlah Pemakaian"
              type="number"
              error={errors.pemakaian_jumlah?.message}
              placeholder="Masukkan jumlah pemakaian..."
              disabled={disabled}
              {...field}
            />
          )}
        />
        <Controller
          name="pemakaian_logistik_id"
          control={control}
          render={({ field }) => (
            <Select
              id="pemakaian_logistik_id"
              label="Atribut"
              value={isLoadingLogistik ? undefined : String(field.value)}
              onChange={(val) => field.onChange(val)}
              error={errors.pemakaian_logistik_id?.message}
              options={
                isLoadingLogistik
                  ? []
                  : logistikData.map((item) => ({
                      key: item.logistik_id,
                      value: String(item.logistik_id),
                      label: item.logistik_nama_atribut,
                    }))
              }
              placeholder={isLoadingLogistik ? 'Loading...' : 'Pilih Atribut'}
            />
          )}
        />
      </div>
    </form>
  );
};

FormPemakaian.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  data: PropTypes.object,
};
