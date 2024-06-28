import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';

export const EditButton = ({ setDisabled, handleSubmit, onSubmit, reset }) => {
  const handleCancel = () => {
    setDisabled(true);
    reset();
  };

  return (
    <div className="flex items-center gap-4">
      <Button color="red" size="md" onClick={handleCancel}>
        Batal
      </Button>
      <Button color="green" size="md" onClick={handleSubmit(onSubmit)}>
        Simpan
      </Button>
    </div>
  );
};
EditButton.propTypes = {
  setDisabled: PropTypes.func,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  reset: PropTypes.func,
};
