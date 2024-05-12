import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';

export const Modal = ({ open, handleOpen, onSubmit, children, title }) => {
  return (
    <Dialog size="sm" open={open} handler={handleOpen}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody className="border border-y">{children}</DialogBody>
      <DialogFooter className="flex justify-center items-center gap-4">
        <Button variant="text" color="red" onClick={handleOpen} className="border border-red-500">
          Cancel
        </Button>
        <Button variant="filled" color="green" onClick={onSubmit}>
          Confirm
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
