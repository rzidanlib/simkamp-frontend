import { Modal } from '@/components/Elements/Modal';
import PropTypes from 'prop-types';

export const ModalFilter = ({ openModal, handleOpenModal }) => {
  return (
    <Modal title={'Filter Relawan'} open={openModal} handleOpen={handleOpenModal}>
      <p>Filter Relawan</p>
    </Modal>
  );
};

ModalFilter.propTypes = {
  openModal: PropTypes.bool,
  handleOpenModal: PropTypes.func,
};
